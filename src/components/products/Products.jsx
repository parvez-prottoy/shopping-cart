import Product from "./Product";

const Products = () => {
  return (
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Products;
