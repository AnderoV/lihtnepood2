import { FullWButton } from "../components/Buttons";
import { CartItem } from "../components/CartItem";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cartItems, cartTotalPrice, createCheckOutSession } = useCart();
  return (
    <section className=" mt-16 h-screen flex justify-between py-11 px-10">
      <div className="flex flex-col w-1/2 gap-14">
        <h2 className="font-extrabold text-5xl">My Cart:</h2>

        <div className="flex flex-col gap-4 ">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className="flex flex-col w-1/4 p-6 h-fit  bg-sky-700/60 rounded-md gap-8">
        <h6 className="text-2xl font-semibold">
          Total:
          <span className="font-bold  text-sky-200 "> ${cartTotalPrice}</span>
        </h6>
        <FullWButton
          disabled={!cartItems.length}
          onClick={() => createCheckOutSession(cartItems)}
        >
          Checkout
        </FullWButton>
      </div>
    </section>
  );
}
