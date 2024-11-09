/* eslint-disable react/prop-types */
import { useCart } from "../context/CartContext";
import "react-toastify/dist/ReactToastify.css";

export default function AddToCartBtn({ comic, quantity, text, disabled }) {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: comic.id,
        series: comic.Series,
        price: comic.Price,
        quantity,
      },
    });
  };

  return (
    <>
      <button
        onClick={handleAddToCart}
        className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded text-sm disabled:bg-red-900"
        disabled={disabled}
      >
        {text}
      </button>
    </>
  );
}
