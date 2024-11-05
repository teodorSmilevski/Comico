import { useCart } from "../context/CartContext";

function Checkout() {
  const { state } = useCart();

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      {state.items.length > 0 ? (
        <div>
          <h2 className="text-xl">Order Summary</h2>
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
              </li>
            ))}
          </ul>
          <h2 className="text-xl font-bold mt-4">
            Total: $
            {state.items
              .reduce((acc, item) => acc + item.price * item.quantity, 0)
              .toFixed(2)}
          </h2>
          <button className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Complete Purchase
          </button>
        </div>
      ) : (
        <p>Your cart is empty!</p>
      )}
    </div>
  );
}

export default Checkout;
