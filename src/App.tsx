import ReactFullpage from "@fullpage/react-fullpage";
import Myself from "./assets/myself2.jpg";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { MdAlternateEmail } from "react-icons/md";
import {
  BsTelephone,
  BsTelegram,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import SelectLanguage from "./components/SelectLanguage";
function App() {
  const { i18n, t } = useTranslation();
  // const { i18n, t } = useTranslation();
  useEffect(() => {
    const savedLanguage = localStorage.getItem("lang") || "fa";
    !savedLanguage && localStorage.setItem("lang", "fa");
    i18n.changeLanguage(savedLanguage);
  }, []);
  const [currentPage, setCurrentPage] = useState(0);
  const skills = [
    {
      skillName: "HTML 5",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/174/174854.png",
    },
    {
      skillName: "CSS",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
    },
    {
      skillName: "Javascript",
      imageUrl:
        "https://logospng.org/download/javascript/logo-javascript-icon-1024.png",
    },
    {
      skillName: "Typescript",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/919/919832.png",
    },
    {
      skillName: "Tailwind css",
      imageUrl:
        "https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png",
    },
    {
      skillName: "React js",
      imageUrl:
        "https://nextsoftware.io/files/images/logos/main/reactjs-logo.png",
    },
    {
      skillName: "Redux",
      imageUrl:
        "https://repository-images.githubusercontent.com/347723622/92065800-865a-11eb-9626-dff3cb7fef55",
    },
    {
      skillName: "Next js",
      imageUrl:
        "https://www.datocms-assets.com/75941/1657707878-nextjs_logo.png",
    },
    {
      skillName: "PWA",
      imageUrl:
        "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/pwa-icon.png",
    },
    {
      skillName: "i18N",
      imageUrl:
        "https://camo.githubusercontent.com/f055080dc60e3fe64f11893fe506379defd0f1f0e06fcfbcb410cfef155e5ac5/68747470733a2f2f76616e64657273657970656e2e6465762f6173736574732f696d616765732f6931386e2f6c6f676f2d6c617267652e706e67",
    },
    {
      skillName: "Git & Github",
      imageUrl: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    },
    {
      skillName: "Npm",
      imageUrl:
        "https://static-00.iconduck.com/assets.00/npm-icon-2048x2048-3xqnd60o.png",
    },
  ];
  const projects = [
    {
      name: "digiHosein",
      link: "https://github.com/Miladjoodi/",
      imageUrl:
        "https://cdni.iconscout.com/illustration/premium/thumb/online-shopping-trolley-2748734-2289777.png",
      technologies: "React.js - Redux toolkit - Tailwind",
      description: "digiHoseinDesc",
    },
    {
      name: "musicCity",
      link: "https://github.com/Miladjoodi/",
      imageUrl:
        "https://cdni.iconscout.com/illustration/premium/thumb/boy-listening-music-2527775-2114678.png",
      technologies: "React.js - Redux toolkit - Tailwind",
      description: "musicCityDesc",
    },
    {
      name: "movieCity",
      link: "https://github.com/Miladjoodi/",
      imageUrl:
        "https://cdni.iconscout.com/illustration/premium/thumb/movie-production-4991886-4159604.png?f=webp",
      technologies: "Next.js (SSG) - Tailwind",
      description: "movieCityDesc",
    },
  ];
  return (
    <ReactFullpage
      licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={1000}
      credits={{}}
      navigation
      onLeave={(_origin, destination) => {
        setCurrentPage(destination.index);
      }}
      render={({ fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <div
                className={` ${
                  i18n.dir() === "ltr" ? "right-0" : "left-0"
                } absolute top-0 p-4 lg:p-8`}
              >
                <SelectLanguage />
              </div>
              <div
                dir={i18n.dir()}
                className="w-full flex flex-col items-center justify-start transition-all"
              >
                <div className="w-full h-screen lg:flex-row flex flex-col">
                  <div className="w-full lg:w-[50%] lg:h-full h-[35%] bg-primary relative">
                    <div
                      className={`2xl:w-[28rem]  hover:scale-105 ring-4 fadeShow1 ring-dark duration-300 lg:shadow-2xl 2xl:h-[28rem] lg:w-[20rem] lg:h-[20rem] rounded-full overflow-hidden absolute top-[8rem] ${
                        i18n.dir() === "ltr"
                          ? "lg:right-[-13.5rem]"
                          : "lg:right-[65%]"
                      } w-[12rem] h-[12rem] right-0   lg:bottom-32 mb-auto mt-auto mr-auto ml-auto left-0 lg:mr-auto lg:ml-auto lg:left-auto bottom-0`}
                    >
                      <img className="profile" src={Myself} alt="" />
                    </div>
                  </div>

                  <div className="w-full h-full  bg-dark flex justify-center items-start lg:items-center text-secondary lg:pt-0 pt-24">
                    <div
                      className={`flex flex-col justify-center fadeShow2 items-start lg:items-start ${
                        i18n.dir() === "ltr" ? "lg:pl-52" : "lg:pr-48"
                      } gap-2 w-[75%]`}
                    >
                      <p className="text-base lg:text-2xl">
                        {t("frontEndDeveloper")}
                      </p>
                      <p className="text-3xl lg:text-5xl font-bold">
                        {t("me")}
                      </p>
                      {/* <p className="text-base lg:text-xl w-64 lg:w-96 flex flex-wrap">
                        {t("info")}
                      </p> */}
                      {/* <p className="text-base lg:text-xl w-64 lg:w-96 flex flex-wrap">
                        {t("info2")}
                      </p> */}
                      <div className="flex lg:flex-row lg:text-xl flex-col justify-center items-center fadeShow3 gap-4 pt-4 w-full text-sm lg:w-96 lg:flex-wrap">
                        <div className="w-full flex justify-around items-center gap-2">
                          <button
                            onClick={() => fullpageApi.moveTo(2)}
                            className="py-2 px-6  rounded-full text-neutral-300 border-2 border-neutral-600"
                          >
                            {t("whoAmI")}
                          </button>
                          <button
                            onClick={() => fullpageApi.moveTo(3)}
                            className="py-2 px-6  rounded-full text-neutral-300 border-2 border-neutral-600"
                          >
                            {t("mySkills")}
                          </button>
                        </div>
                        <div className="w-full flex justify-around items-center gap-2">
                          <button
                            onClick={() => fullpageApi.moveTo(4)}
                            className="py-2 px-6 rounded-full text-neutral-300 border-2 border-neutral-600"
                          >
                            {t("myProjects")}
                          </button>
                          <button
                            className="py-2 px-6  text-neutral-300 border-2 border-neutral-600 rounded-full"
                            onClick={() => fullpageApi.moveTo(5)}
                          >
                            {t("contacts")}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section">
              <div
                dir={i18n.dir()}
                className="h-screen w-full relative bg-dark text-secondary flex flex-col lg:flex-row justify-start lg:justify-center items-center gap-4 p-8"
              >
                <div
                  className={`w-[80%] flex gap-4 absolute top-10 lg:top-16 right-0 left-0 mr-auto ml-auto ${
                    currentPage === 1 && "fadeShow1"
                  }`}
                >
                  <span className="h-2 w-full bg-primary rounded-full"></span>
                  <span className="h-2 w-2 bg-primary rounded-full"></span>
                  <span className="h-2 w-2 bg-primary rounded-full"></span>
                </div>
                <div className="w-[80%]  lg:justify-between  lg:flex-row flex flex-col">
                  <img
                    className={`${
                      currentPage === 1 && "fadeShow2 infiniteAnimation"
                    } `}
                    src={
                      "https://cdni.iconscout.com/illustration/premium/thumb/developer-doing-programming-opening-multi-working-tabs-on-the-desktop-2381447-1997255.png"
                    }
                    alt=""
                  />
                  <div
                    className={`${
                      currentPage === 1 && "fadeShow3"
                    } flex flex-col items-center lg:items-start justify-center gap-3`}
                  >
                    <p className="lg:text-5xl text-4xl text-primary">
                      {t("whoAmI")}
                    </p>
                    <p className="text-lg lg:text-2xl lg:w-[40rem]">
                      {t("iAm")}
                    </p>
                    <p className="text-lg lg:text-2xl lg:w-[40rem]">
                      {t("iAm2")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="flex h-screen lg:flex-row flex-col justify-between items-center">
                <div className="h-full w-full relative order-1 lg:order-none lg:w-[70%] bg-dark text-secondary flex flex-col lg:flex-row justify-start items-center gap-4">
                  <div className="w-full flex flex-col justify-center items-center gap-2 p-4">
                    <div className="flex flex-col justify-center items-center gap-4 pt-28 lg:pt-0">
                      <img
                        className={`lg:block w-[15rem] lg:w-[35%] absolute top-[-10rem] lg:bottom-0 lg:mt-auto lg:mb-auto right-0 lg:right-[-20%] left-0 lg:left-auto ml-auto mr-auto ${
                          currentPage === 2 && "fadeShow2"
                        }`}
                        src="https://cdni.iconscout.com/illustration/premium/thumb/male-developer-working-on-project-6992637-5699686.png?f=webp"
                        alt=""
                      />
                      <p
                        className={`text-3xl lg:text-5xl  ${
                          currentPage === 2 && "fadeShow2"
                        } lg:pb-10`}
                      >
                        {t("mySkills")}
                      </p>
                    </div>
                    <Swiper
                      simulateTouch={false}
                      allowTouchMove={false}
                      slidesPerView={window.innerWidth < 1024 ? 3.5 : 5}
                      spaceBetween={30}
                      loop={true}
                      slideToClickedSlide
                      autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                        reverseDirection: false,
                      }}
                      modules={[Autoplay]}
                      className={`${
                        currentPage === 2 && "fadeShow3"
                      } mySwiper w-full lg:h-[13rem] lg:w-[70%] h-[12rem] pt-8 lg:border-x-2 border-x-primary rounded-lg lg:p-4`}
                    >
                      {skills.map((item) => {
                        return (
                          <SwiperSlide
                            key={item.imageUrl}
                            className="flex w-full h-full flex-col justify-around items-center gap-6"
                          >
                            <img
                              className="w-full lg:w-[55%] skillImageAnimation"
                              src={item.imageUrl}
                              alt=""
                            />
                            <p className="min-w-[6rem] text-base  lg:text-xl flex h-full items-end justify-center">
                              {item.skillName}
                            </p>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                </div>
                <div className="h-[40%] lg:h-full w-full bg-primary"></div>
              </div>
            </div>
            <div className="section">
              <div
                dir={i18n.dir()}
                className="w-full h-screen bg-dark flex flex-col justify-start lg:justify-center items-center p-4 text-secondary transition-all"
              >
                <div className="w-full lg:w-3/4 flex justify-center items-center">
                  <div className="w-full flex flex-col justify-center items-center lg:gap-8 gap-1">
                    <p className="text-secondary text-2xl lg:text-5xl">
                      {t("myProjects")}
                    </p>
                    <div className="w-full flex lg:flex-row flex-col justify-center items-center gap-2 lg:gap-8">
                      {projects.map((item) => {
                        return (
                          <a
                            key={item.imageUrl}
                            href={item.link}
                            target="blank"
                            className={`relative group/container w-full h-48 lg:w-80 lg:h-96 lg:hover:translate-y-[-1rem] lg:hover:scale-105 duration-200 lg:cursor-pointer rounded-md bg-primary text-white flex flex-col justify-between items-center p-4 ${
                              currentPage === 3 && "fadeShow1"
                            }`}
                          >
                            <div className="flex flex-row items-center justify-between w-full lg:flex-col">
                              <div className="flex flex-col justify-center items-start gap-1">
                                <p className="text-xl lg:text-3xl">
                                  {t(item.name)}
                                </p>
                                <p className="text-sm lg:hidden">
                                  {t(item.description)}
                                </p>
                              </div>
                              <img
                                className="lg:group-hover/container:opacity-50 duration-200 lg:w-auto w-[10rem] "
                                src={item.imageUrl}
                                alt=""
                              />
                            </div>
                            <p className="w-[95%] rounded-md text-center absolute bottom-2 text-sm lg:bottom-auto lg:relative lg:text-base   border border-secondary text-white p-1 ">
                              {item.technologies}
                            </p>
                            <div className="absolute  opacity-0 top-16 right-0 p-4 bg-dark lg:group-hover/container:scale-100 lg:group-hover/container:opacity-100 duration-300 max-w-[12rem]">
                              {t(item.description)}
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                  <img
                    className="hidden lg:block 2xl:w-[30rem] lg:w-[15rem]"
                    src="https://cdni.iconscout.com/illustration/free/thumb/free-developer-team-2043022-1731280.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="section">
              <div className="w-full h-screen bg-dark flex flex-col justify-start items-center text-secondary p-8 gap-6">
                <img
                  className={`${currentPage === 4 && "fadeShow2"}`}
                  src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-6114172-5059493.png"
                  alt=""
                />
                <p className="text-3xl lg:text-5xl">{t("contacts")}</p>
                <div
                  className={`lg:text-xl flex flex-col justify-center items-start gap-4 ${
                    currentPage === 4 && "fadeShow2"
                  }`}
                >
                  <div className="flex justify-between items-center gap-2">
                    <span className="scale-125">
                      <MdAlternateEmail />
                    </span>
                    <p>c.1x@yahoo.com</p>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span className="scale-125">
                      <BsTelephone />
                    </span>
                    <p>+98 910 588 67 40</p>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span className="scale-125">
                      <BsTelegram />
                    </span>
                    <p>@Milad_Js</p>
                  </div>
                  <div className="w-full flex justify-start items-center gap-8 pt-4">
                    <a
                      href="https://github.com/MiladJoodi"
                      target="blank"
                      className="scale-[2]"
                    >
                      <AiFillGithub />
                    </a>
                    <a
                      target="blank"
                      href="https://t.me/Milad_js"
                      className="scale-[2]"
                    >
                      <BsTelegram />
                    </a>
                  </div>
                </div>
                <button
                  className="scale-[2] absolute bottom-16 right-16"
                  onClick={() => fullpageApi.moveTo(1)}
                >
                  <BsFillArrowUpCircleFill />
                </button>
              </div>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

export default App;
