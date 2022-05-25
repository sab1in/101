import foot from "../../image/foot.png";
const footerLinks = [
  {
    name: "Company",
    links: [
      { linkName: "About Us", to: "" },
      { linkName: "What We Do", to: "" },
      { linkName: "Contact", to: "" },
    ],
  },
  {
    name: "Services",
    links: [
      { linkName: "Web Design", to: "" },
      { linkName: "App Development", to: "" },
      { linkName: "Graphic Designing", to: "" },
      { linkName: "Digital Marketing", to: "" },
      { linkName: "SEO Optimization", to: "" },
    ],
  },
  {
    name: "Join",
    links: [
      { linkName: "Careers at 101Infotech", to: "" },
      { linkName: "Internships", to: "" },
    ],
  },
  {
    name: "Connect With Us",
    links: [
      { linkName: "Facebook", to: "" },
      { linkName: "Instagram", to: "" },
      { linkName: "Twitter", to: "" },
      { linkName: "LinkedIn", to: "" },
      { linkName: "Youtube", to: "" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="w-10/12 mx-auto pt-7">
        <div className="flex flex-col sm:flex-row gap-3 justify-between">
          <div>
            <h4 className="text-2xl font-semibold">Join our newsletter</h4>
            <p className="text-xs font-normal mt-3 max-w-xs font-roboto">
              Sign up to stay updated with the latest insights, news, and more.
            </p>
          </div>
          <div className="flex items-center">
            <form className="flex  ">
              <input
                name="email"
                placeholder="Your email address"
                className=" border w-44 sm:w-full h-10  mb-4 px-2 py-2 bg-gray-100 rounded-l"
              />
              <div>
                <button className="bg-blue-500 rounded-r p-2 h-10">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row flex-wrap justify-between">
          {footerLinks &&
            Array.isArray(footerLinks) &&
            footerLinks.map((item, index) => {
              return (
                <div key={index} className="col-span-1">
                  <h5 className="font-smibold text-lg mb-2">{item.name}</h5>
                  <ul>
                    {item.links &&
                      Array.isArray(item.links) &&
                      item.links.map((link, i) => {
                        return (
                          <li key={i} className="text-xs mb-3 font-normal">
                            {link.linkName}
                          </li>
                        );
                      })}
                  </ul>
                </div>
              );
            })}
        </div>
        <div className="py-3 flex flex-wrap   justify-between">
          <div className="flex flex-wrap  justify-between sm:w-2/5">
            <p className="text-xs  sm:mx-0 mb-3 font-normal">
              Copyright 2022 101InfoTech. All rights reserved.
            </p>
            <p className="text-xs mb-3  font-normal">Privacy Policy</p>
          </div>
          <div className="ml-auto">
            <img src={foot} alt="" className="w-24 " />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
