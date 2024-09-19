import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { id, title, image, price } = product || {};
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full duration-300 hover:scale-[1.02] cursor-pointer">
      <Link
        to={`/products/${id}`}
        className="block relative h-[200px] rounded overflow-hidden "
      >
        <img
          alt={title}
          className="object-center w-full h-full block"
          src={image}
        />
      </Link>
      <Link to={`/products/${id}`}>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2
            title={title}
            className="text-gray-900 title-font text-lg font-medium h-8 text-ellipsis  overflow-clip whitespace-nowrap"
          >
            {title}
          </h2>
          <p className="mt-1">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
