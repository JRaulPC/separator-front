import PageDescription from "./components/Description/Description";
import Contact from "./components/Footer/Contact";
import RecordingButton from "./components/RecordingButton/RecordingButton";
import Title from "./components/Title/Title";

function App() {
  return (
    <div>
      <section className="background-container">
        <div className="background-image"></div>
        <div className="background-gradient"></div>
        <div className="content">
          <div className="flex flex-row justify-center data-scroll-container ">
            <section className="flex flex-col gap-8">
              <header className=" flex items-center justify-center">
                <Title />
              </header>
              <RecordingButton />
            </section>
          </div>
        </div>
      </section>
      <section className="h-[1000px]">
        <h2 className="p-16 text-5xl ">About</h2>
        <PageDescription />
        <Contact />
      </section>
    </div>
  );
}

export default App;
