const Connect = () => {
  return (
    <section className="bg-primary1 mt-4">
      <div className="w-11/12 lg:w-9/12 mx-auto py-8 flex justify-between sm:flex-row flex-col gap-4 sm:gap-0">
        <div className="md:w-1/2 ">
          <div className="flex justify-center md:justify-start my-2 items-center gap-1">
            <div className="h-0.5 w-5 bg-primary"></div>
            <h5 className="text-sm font-medium ">
              Connect with{" "}
              <span className="text-sm font-semibold text-primary">Us</span>
            </h5>
          </div>
          <h3 className="text-2xl sm:text-3xl text-center sm:text-left font-semibold">
            Make your <span className="text-primary">dream</span>
            <br /> <span className="text-primary">projects</span> on the <br />
            best way possible
          </h3>
          <p className="mt-4 text-center sm:text-left text-xs sm:text-sm">
            Mean if he they been no hold mr. Is at much do made. Latter person
            am secure of estate genius at.
          </p>
        </div>

        <div className=" flex justify-end items-center w-11/12 sm:w-10/12 md:w-1/2 mx-auto sm:mx-0">
          <form className="lg:w-1/2 md:w-2/3 w-11/12">
            <input
              name="email"
              placeholder="Email address"
              className="w-full border mb-4 px-2 py-2 bg-gray-100 rounded"
            />
            <br />
            <input
              name="password"
              placeholder="Password"
              className="w-full border mb-4 px-2 py-2 bg-gray-100 rounded"
            />
            <br />
            <button className="w-full text-center rounded-md text-white bg-primary pt-2 pb-1">
              Get Started
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Connect;
