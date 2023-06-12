import Image from "next/image";
import { useRouter } from "next/router";
import { FullWButton, RegularButton } from "../../components/Buttons";
import products from "../../content/products.json";
import { useCart } from "../../context/CartContext";
import MinusIcon from "../../public/MinusIcon";
import PlusIcon from "../../public/PlusIcon";

export default function SingleProductPage() {
  const router = useRouter();
  const { increaseQuantity } = useCart();
  const { id } = router.query;
  console.log(id);
  const { title, picture, price, description, quantity } = products.find(
    (el) => el.id === id
  );

  return (
    <section className=" mt-16 h-screen  py-11 px-10">
      <div className=" flex w-full  items-center justify-between gap-20">
        <div className="relative h-72 w-72 rounded-sm object-cover ring-8 ring-pink-600">
          <Image src={picture} alt={title} fill />
        </div>
        <div className="flex w-[80%] flex-col gap-8 bg-sky-700/30 p-6 rounded-xl h-fit">
          <h2 className="font-semibold max-w-sm text-4xl">{title}</h2>
          <p>{description}</p>
          <div className="flex justify-between">
            <div className="flex flex-col items-center gap-1">
              <span>Price</span>
              <span className="text-2xl font-bold">${price}</span>
            </div>

            <div className="flex flex-col items-center gap-1">
              <span>Items Left</span>
              <span className="text-2xl font-bold">{quantity}</span>
            </div>

            <div className="w-48">
              <FullWButton
                onClick={() => increaseQuantity(id)}
                disabled={quantity === 0}
              >
                Add to Cart
              </FullWButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
