const Navigation = () => {
  return (
    <header className="fixed w-full bg-slate-200 z-10 text-gray-600 body-font border-b shadow-sm">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex font-monospace text-xl font-extrabold items-center text-gray-900 mb-4 md:mb-0">
          Shopping Cart
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">Home</a>
          <a className="mr-5 hover:text-gray-900">Products</a>
          <a className="mr-5 hover:text-gray-900">Blogs</a>
          <a className="mr-5 hover:text-gray-900">Contact</a>
          <a className="mr-5 hover:text-gray-900">About Us</a>
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Cart(0) $0
        </button>
      </div>
    </header>
  );
};

export default Navigation;
