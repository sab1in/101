import html from "../../image/Mask group.svg";

const Tools = () => {
  return (
    <section className="my-14">
      <div className="w-9/12 mx-auto flex flex-col lg:flex-row gap-6 lg:gap-16">
        <div className="lg:w-1/2">
          <h3 className="text-3xl font-semibold text-center lg:text-right">
            Tools & <span className="text-primary">Technologies</span>
            <br /> That We Use
          </h3>
          <div className="flex justify-center lg:justify-end mt-3">
            <div className="h-0.5 w-8 mt-2 bg-primary"></div>
            <h5 className="text-xs font-semibold pl-2">WE MAKE IT HAPPEN</h5>
          </div>
          <div className="flex justify-center lg:justify-end mt-5">
            <p className="text-xs text-center lg:text-left font-normal max-w-xs font-roboto">
              101 Infotech utilizes high-quality technical tools such as
              WordPress, Laravel, CSS, Javascript, HTML My SQL, etc. in order to
              provide you better business solutions
            </p>
          </div>
        </div>
        <div className="w-11/12 mx-auto lg:mx-0 md:w-1/2">
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-center py-2 shadow-md border-2 border-gray-100 col-span-1"
                >
                  <img src={html} alt="" width={50} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
