import heroImg from "../../image/heroImg.svg";
import Ellipse1 from "../../image/Ellipse 725.svg";
import Ellipse2 from "../../image/Ellipse 720.svg";
import Ellipse3 from "../../image/Ellipse 29.svg";
import vector1 from "../../image/Vector 7.svg";
import vector2 from "../../image/Vector 8.svg";
import Ellipse4 from "../../image/Ellipse 723.svg";
import Ellipse5 from "../../image/Ellipse 718.svg";
import Ellipse6 from "../../image/Ellipse 725.svg";
import Connect from "../../image/Connect.svg";

const Hero = () => {
  return (
    <section>
      <div
        style={{
          background:
            "linear-gradient(111.08deg, #091E80 1.49%, #3254F1 96.65%)",
          borderRadius: "25px 25px 150px 25px",
        }}
        className="w-full relative z-0 overflow-hidden"
      >
        <div className="w-full px-4 md:px-10 lg:px-0  lg:w-11/12 xl:w-10/12 pb-16 lg:mx-auto flex  md:flex-row flex-col-reverse md:gap-11 lg:justify-center lg:items-center">
          <div className="md:w-1/2 lg:w-7/12  relative md:mt-10 lg:ml-10 ">
            <h1 className="text-white font-bold lg:text-5xl text-3xl leading-normal mb-3">
              WE HEAR <br />
              WE MAKE IT HAPPEN
            </h1>
            <h3 className="text-white font-semibold text-xl lg:text-2xl">
              Website Development and Graphic Designing
            </h3>
            <p className="text-white font-normal text-sm lg:text-base leading-6 mt-4">
              We provide a complete web and app solution by providing you the
              esential services including branding, graphic design, UX/UI
              design, web development, content, social media integration, SEO,
              and online marketing.
            </p>
            <button
              style={{
                background:
                  "linear-gradient(94.03deg, rgba(91, 111, 193, 0.2) 12.67%, rgba(214, 239, 248, 0.2) 63.83%)",
              }}
              className="mt-10 text-white text-xl font-semibold px-5 py-2 flex items-center"
            >
              <div>Connect Now</div>
              <img src={Connect} alt="" className="pl-4" />
            </button>
            <div className="absolute -top-14 right-40 hidden sm:block">
              <img src={Ellipse1} alt="" />
            </div>
            <img
              src={Ellipse6}
              alt=""
              className="absolute right-10 hidden sm:block"
            />
          </div>
          <div className=" md:w-5/12 relative">
            <img src={heroImg} alt="heroImg" width={660} height={600} />
            <img src={Ellipse4} alt="" className="absolute left-6 bottom-8" />
            <img src={Ellipse5} alt="" className="absolute -right-16 top-10" />
          </div>
        </div>
        <div className="absolute -bottom-24 -left-16 sm:left-20 ">
          <img src={Ellipse2} alt="" />
        </div>
        <div className="absolute left-0 bottom-40 ">
          <img src={Ellipse3} alt="" />
        </div>
        <img src={vector1} alt="" className="absolute left-0 top-0" />
        <img src={vector2} alt="" className="absolute -right-20 -bottom-10" />
      </div>
    </section>
  );
};

export default Hero;
