import { useEffect, useState } from "react";
import About from "./components/About/About";
import RecordingButton from "./components/RecordingButton/RecordingButton";
import Title from "./components/Title/Title";
import gsap from "gsap";

function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const toggleSlideover = () => {
    if (isAboutOpen) {
      // Slide is closing
      setShowButton(false);
      setTimeout(() => {
        setShowButton(true);
      }, 2000); // Show button after 2 seconds
    } else {
      // Slide is opening
      setShowButton(false);
    }
    setIsAboutOpen(!isAboutOpen);
  };

  useEffect(() => {
    if (isAboutOpen) {
      gsap.to(".slide", { duration: 3, x: 1024 });
    }
  }, [isAboutOpen]);

  return (
    <div>
      <div className="background-container">
        <div className="background-image"></div>
        <div className="background-gradient"></div>
        <main className="content">
          {showButton && (
            <button
              onClick={toggleSlideover}
              className="about-button right-0 absolute text-white p-10 text-4xl z-30 opacity-75 animate-fade animate-duration-[1500ms] animate-ease-in"
            >
              {`${isAboutOpen ? "" : "about"}`}
            </button>
          )}

          <div className="flex flex-row justify-center">
            <section
              className={`flex flex-col gap-8 ${
                isAboutOpen ? "animate-fadeOut" : "animate-fadeIn"
              }`}
            >
              <header className="flex items-center justify-center">
                <Title isAboutOpen={isAboutOpen} />
              </header>
              <RecordingButton />
            </section>
          </div>
          <About isAboutOpen={isAboutOpen} toggleSlideover={toggleSlideover} />
        </main>
        <span className="h-30 ">v-1.0</span>
      </div>
    </div>
  );
}

export default App;
