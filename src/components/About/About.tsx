import gsap from "gsap";
import { useEffect } from "react";
import PageDescription from "../Description/Description";
import Contact from "../Footer/Contact";

interface AboutProps {
  isAboutOpen: boolean;
  toggleSlideover: () => void;
}

const About = ({ isAboutOpen, toggleSlideover }: AboutProps) => {
  useEffect(() => {
    if (isAboutOpen) {
      gsap.to(".slide", { duration: 3, x: 1024 });
    }
  }, [isAboutOpen]);

  const scrollToLeft = () => {
    window.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  };

  const handleToggle = () => {
    toggleSlideover();
    scrollToLeft();
  };

  return (
    <>
      <aside className={`${isAboutOpen ? "" : "invisible"} h-[100vh] `}>
        <section
          className={` w-full h-full bg-slate-600 opacity-80  absolute bottom-0 duration-[2000ms] ease-in-out transition-all ${
            isAboutOpen ? "translate-x-0" : "translate-x-full"
          } `}
        >
          <button
            onClick={handleToggle}
            className="right-0 absolute p-16 text-white  text-4xl z-30 opacity-75 animate-fade animate-duration-[9000ms] animate-ease-in"
          >
            X
          </button>
          <h2 className="p-16 text-5xl text-white opacity-70">about</h2>
          <PageDescription />
          <Contact />
        </section>
      </aside>
    </>
  );
};

export default About;
