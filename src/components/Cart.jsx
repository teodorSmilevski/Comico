/* eslint-disable react/prop-types */
export default function Cart({ items }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {items.length ? (
        items.map((item) => (
          <div
            key={item.id}
            className="flex justify-between py-2 border-b border-gray-600"
          >
            <span>{item.Series}</span>
            <span>${item.Price}</span>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
}
