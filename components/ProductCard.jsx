import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { RegularButton } from "./Buttons";

export const ProductCard = ({
  id,
  title,
  picture,
  description,
  price,
  quantity,
}) => {
  const { increaseQuantity } = useCart();
  return (
    <div className="mb-2 flex w-60 min-w-[17rem] snap-center flex-col justify-between rounded-lg bg-pink-600 drop-shadow-md">
      <Link
        href={`/products/${id}`}
        className="relative h-40 w-full  object-cover "
      >
        <Image src={picture} alt={title} fill className="rounded-lg" />
      </Link>
      <div className=" flex w-full flex-col justify-end gap-4 px-6 py-6 ">
        <Link href={`/products/${id}`} className="flex gap-2 group flex-col">
          <h4 className="font-extrabold text-2xl group-hover:text-pink-100">
            {title}
          </h4>
          <p className=" text-sm">{description}</p>
        </Link>
        <div className="flex justify-between w-full gap-2">
          <Link href={`/products/${id}`} className="flex  flex-col">
            <p className="text-pink-800/75 text-sm font-bold">
              {quantity > 0 ? "In stock" : "Out of Stock"}
            </p>
            <p className="text-xl font-semibold">${price}</p>
          </Link>

          <RegularButton
            disabled={quantity === 0}
            onClick={() => increaseQuantity(id)}
          >
            Add to Card
          </RegularButton>
        </div>
      </div>
    </div>
  );
};
