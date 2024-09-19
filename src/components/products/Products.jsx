import { useGetProductsQuery } from "../../rtk/products/productsSlice";
import Product from "./Product";

const Products = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();
  // note: decide what to render
  let content = null;
  if (isLoading) content = <p className="text-xl">Loading...</p>;
  if (!isLoading && isError)
    content = (
      <p className="text-lg text-red-600">There was an error ocurred!</p>
    );
  if (!isLoading && !isError && products.length === 0)
    content = <p className="text-lg text-red-600">No product found!</p>;
  if (!isLoading && !isError && products.length > 0)
    content = (
      <div className="flex flex-wrap -m-4">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    );
  return <div className="container px-5 py-24 mx-auto">{content}</div>;
};

export default Products;
