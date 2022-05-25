import image1 from "../../image/image 37.svg";

const featureData = [
  {
    title: "Mobile Development",
    description:
      "We are a group of expertise in designing responsive websites.We are a group of expertise in designing responsive websitesWe are a group of expertise in designing responsive websites.",
    icon: image1,
  },
  {
    title: "Graphic Designing",
    description:
      "We are a group of expertise in designing responsive websites.We are a group of expertise in designing responsive websitesWe are a group of expertise in designing responsive websites.",
    icon: image1,
  },
  {
    title: "Digital Marketing",
    description:
      "We are a group of expertise in designing responsive websites.We are a group of expertise in designing responsive websitesWe are a group of expertise in designing responsive websites.",
    icon: image1,
  },
];

const OurFeatures = () => {
  return (
    <section className="mt-5">
      <div className="">
        <div className="flex my-2 justify-center items-center gap-1">
          <div className="h-0.5 w-4 bg-primary"></div>
          <p className="text-sm font-medium ">Our</p>
          <p className="text-sm font-medium text-primary">Features</p>
        </div>
        <h1 className="text-3xl text-center font-semibold my-1">
          Our <span className="text-primary">Solution</span> For All Your Basic
          Needs
        </h1>
        <p className="text-sm font-normal text-center font-roboto">
          Whatever your digital needs, We will provide you the best services to
          grow your business
        </p>
      </div>

      <div className=" w-11/12 lg:w-10/12 xl:w-9/12 mx-auto mb-5 flex overflow-x-auto overflow-y-hidden scrollbar  gap-5 xl:gap-x-14 xl:gap-y-8 mt-8">
        {featureData &&
          Array.isArray(featureData) &&
          featureData.map((item, index) => {
            const { title, description, icon } = item;
            return (
              <div
                key={index}
                className="col-span-1 flex flex-col items-center w-72  flex-shrink-0 justify-center rounded-lg bg-primary1 py-7 px-3"
              >
                <div className="pb-2">
                  <img src={icon} alt="Frame" width={100} />
                </div>
                <h4 className="text-primary font-semibold text-base leading-9">
                  {title}
                </h4>
                <p className="text-center text-xs font-normal font-roboto text-secondary1">
                  {description}
                </p>
                <div>
                  <button className="text-white text-xs font-medium py-2 px-5 bg-blue-800 rounded-md mt-4">
                    Connect Now
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default OurFeatures;
