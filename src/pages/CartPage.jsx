import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartPage() {
  const { state, dispatch } = useCart();

  const handleRemoveFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
  };

  const handleClearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {state.items.length > 0 ? (
        <>
          <ul>
            {state.items.map((item) => (
              <li
                key={item.id}
                className="flex justify-between py-2 border-b border-gray-600"
              >
                <span>
                  {item.series} (x{item.quantity})
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <h2 className="text-xl font-bold">
              Total: $
              {state.items
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toFixed(2)}
            </h2>
            <button
              onClick={handleClearCart}
              className="mt-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              Clear Cart
            </button>
          </div>
        </>
      ) : (
        <p>Your cart is empty!</p>
      )}
      <Link
        to="/checkout"
        className="mt-4 inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
      >
        Proceed to Checkout
      </Link>
    </div>
  );
}

export default CartPage;
