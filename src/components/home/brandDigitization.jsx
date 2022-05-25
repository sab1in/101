import icon1 from "../../image/brandDigization/Group 79.svg";

const details = [
  {
    title: "A Timeline You Set",
    description: "Stop feeling stuck. We only use month-to-month contracts.",
    icon: icon1,
  },
  {
    title: "A Timeline You Set",
    description: "Stop feeling stuck. We only use month-to-month contracts.",
    icon: icon1,
  },
  {
    title: "A Timeline You Set",
    description: "Stop feeling stuck. We only use month-to-month contracts.",
    icon: icon1,
  },
  {
    title: "A Timeline You Set",
    description: "Stop feeling stuck. We only use month-to-month contracts.",
    icon: icon1,
  },
];

const BrandDigitizations = () => {
  return (
    <section className="w-full mt-14 relative">
      <div>
        <h2 className="font-semibold text-3xl text-center">
          <span className="text-primary">Movement</span> For <br />
          Brand <span className="text-primary">Digitization</span>
        </h2>
        <p className="w-11/12 lg:w-7/12 md:w-10/12 xl:w-5/12 mt-4 font-normal text-sm text-center mx-auto font-roboto">
          101 INFOTECH is an extension of your organization. You aren’t just
          another client. You are a partner, and you deserve an experience that
          is comfortable and tailored to your needs. We are the team you
          deserve. We don’t claim to be the best in Nepal or Kathmandu, but we
          do our best and deliver what you need.
        </p>
      </div>
      <div className="w-11/12 md:w-10/12 lg:w-9/12 xl:w-9/12 grid grid-cols-1 md:grid-cols-2 gap-x-20 xl:gap-x-32  gap-y-14 mx-auto mt-20">
        {details &&
          Array.isArray(details) &&
          details.map((item, index) => {
            const { title, description, icon } = item;
            return (
              <div
                key={index}
                style={{
                  background:
                    "linear-gradient(92.64deg, rgba(255, 255, 255, 0.3) -0.82%, rgba(198, 198, 198, 0.018) 100%)",
                }}
                className=" border  p-3 rounded-xl ml-6 sm:ml-20 md:ml-0 pl-10 relative col-span-1 shadow-xl"
              >
                <h4 className="text-blue-800 text-base font-semibold p-1">
                  {title}
                </h4>
                <p className="text-sm font-normal font-roboto">{description}</p>
                <div className="absolute bg-opacity-0 -top-7 -left-10 shadow-2xl">
                  <img
                    width={75}
                    height={75}
                    src={icon}
                    alt="Frame908"
                    className="bg-transparent bg-opacity-0"
                  />
                </div>
              </div>
            );
          })}
      </div>
      <div className="h-20 w-20 bg-lightBlue rounded-full absolute -top-10 right-14 hidden md:block"></div>
      <div className="h-36 w-36 bg-lightBlue rounded-full absolute -top-4 -left-28 hidden md:block"></div>
      <div className="h-12 w-12 bg-lightBlue rounded-full absolute top-40 left-14 hidden md:block"></div>
    </section>
  );
};

export default BrandDigitizations;
