import Frame1 from "../../image/Frame908.svg";

const Services = () => {
  return (
    <section className="mt-20 mb-10">
      <div className="lg:w-8/12 w-11/12  mx-auto md:flex gap-10">
        <div className="xl:w-8/12  w-11/12 mx-auto flex items-center md:items-end flex-col pr-8 md:border-r md:border-black">
          <h5 className="text-sm font-semibold text-center md:text-left ">
            OUR <span className="text-primary">SERVICES</span>
          </h5>
          <h2 className="text-3xl font-semibold text-center md:text-left">
            <span className="md:pl-10">
              Get <span className="text-primary">Exceptional</span>
            </span>
            <br /> Service for Growth
          </h2>
        </div>
        <div className="md:w-1/2">
          <p className="font-normal text-xs flex items-center h-full font-roboto">
            Our experienced team is here to help you grow your business to a new
            height. We guarantee to provide services at it’s best to help you
            convert your idea into a brand.
          </p>
        </div>
      </div>

      <div className=" w-11/12 lg:w-10/12 xl:w-9/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 xl:gap-x-6 xl:gap-y-8 mt-8">
        {[1, 2, 3, 4, 5, 6].map((item, index) => {
          return (
            <div
              key={index}
              className="col-span-1 flex flex-col items-center justify-center rounded-lg bg-blue-100 py-7 px-3"
            >
              <div className="pb-2">
                <img src={Frame1} alt="Frame" />
              </div>
              <h4 className="text-primary font-semibold text-base leading-9">
                Web Development
              </h4>
              <p className="text-center text-xs font-normal font-roboto">
                Multi-Vendor E-commerce to Small Website, Payment Integration,
                API Integration, Domain Registration, Web Hosting, Website
                Maintenance, Website Redesign
              </p>
              <div>
                <p className="text-primary text-xs font-semibold mt-4">
                  Read More
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
