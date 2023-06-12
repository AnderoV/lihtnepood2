import Image from "next/image";
import { useCart } from "../context/CartContext";
import CrossIcon from "../public/CrossIcon";
import MinusIcon from "../public/MinusIcon";
import PlusIcon from "../public/PlusIcon";

export const CartItem = ({ title, quantity, price, img, id }) => {
  const { increaseQuantity, decreaseQuantity, removeItem } = useCart();
  return (
    <div className="flex h-28 w-full items-center justify-around border-[3px] border-pink-600 bg-transparent">
      <div className="flex h-full gap-6">
        <div className=" flex flex-col items-start justify-center gap-4">
          <button className="h-7 w-7" onClick={() => increaseQuantity(id)}>
            <PlusIcon className="fill-pink-600 transition-all duration-300 hover:fill-pink-400" />
          </button>
          <button className="h-7 w-7" onClick={() => decreaseQuantity(id)}>
            <MinusIcon className="fill-pink-600 transition-all duration-300 hover:fill-pink-400" />
          </button>
        </div>
        <div className="relative h-full w-28 object-cover object-center">
          <Image src={img} alt={title} fill />
        </div>
      </div>
      <div className="flex w-1/4 flex-col items-center gap-2">
        <h6 className="text-center text-lg font-medium">{title}</h6>
        <div className="flex items-center gap-1 text-sm">
          <span>Quantity:</span>
          <span className="text-lg font-medium text-pink-600">{quantity}</span>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-sm"> Price:</span>
        <p className="font-medium">${price}</p>
      </div>

      <button
        className="flex h-8 w-8 items-center justify-center rounded-sm bg-pink-600 transition-all duration-300 hover:bg-pink-400"
        onClick={() => removeItem(id)}
      >
        <CrossIcon className="fill-sky-800 transition-all duration-300 hover:fill-pink-600" />
      </button>
    </div>
  );
};
