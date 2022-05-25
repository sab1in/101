import image from "../../image/image 36.jpg";

const RecentProject = () => {
  return (
    <section className="w-full bg-blue-200 py-10">
      <div className="w-11/12 lg:w-10/12 mx-auto sm:flex gap-10 h-full">
        <div className="sm:w-8/12 sm:mx-auto md:mx-0 md:w-1/2 h-full">
          <img src={image} alt="" className="m-0 rounded-md" />
        </div>
        <div className="sm:w-10/12 items-center sm:items-start sm:mx-auto md:mx-auto md:w-1/2  flex flex-col justify-center">
          <div className="flex my-2 items-center gap-1">
            <div className="h-0.5 w-4 bg-primary"></div>
            <h5 className="text-sm font-medium ">
              Our{" "}
              <span className="text-sm font-medium text-primary">
                Recent Project
              </span>
            </h5>
          </div>
          <h3 className="text-3xl font-semibold">
            Danira’s{" "}
            <span className="text-primary">
              Dalmoth
              <br /> Company
            </span>
          </h3>
          <p className="text-sm font-medium mt-2 font-roboto">
            Danira’s is a brand of “Pushpanjali Spices and Food Products”is a
            premium manufacturer and supplier of innovative quality food
            products at competitive rate. Danira’s is a product which has been
            launched in most of the places in Nepal. It a product with perfect
            mixture of spices and namkeens.
          </p>
          <div>
            <button className="text-sm font-normal text-white py-2 px-3 mt-5 rounded-md bg-blue-500">
              View More Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentProject;
