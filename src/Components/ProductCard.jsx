const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover"/>
      <h3 className="font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-600">₹{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-600 text-white px-4 py-2 mt-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
