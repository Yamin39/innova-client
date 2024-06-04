const Newsletter = () => {
  return (
    <div className="my-12 md:my-24">
      <div className="text-center mx-auto p-16 bg-[#4db2ec15] rounded-2xl">
        <h1 className="text-4xl font-bold mt-4">Subscribe to Our Newsletter</h1>
        <p className="sm:max-w-[25rem] mx-auto text-gray-500 mt-2">Stay updated with our latest offers and news by subscribing to our newsletter</p>
        <div className="input input-bordered p-0 pl-2 sm:pl-4 pr-2 h-auto min-h-0 py-2 rounded-2xl mt-4 w-full max-w-[320px] flex flex-col sm:flex-row mx-auto sm:items-center justify-between">
          <input type="email" className="pl-2 sm:pl-0" placeholder="email@gmail.com" />
          <button className="btn bg-primary-color mt-3 sm:mt-0 text-white hover:bg-black h-auto w-full sm:w-auto min-h-0 rounded-xl text-base py-2">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
