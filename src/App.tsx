import Description from "./components/Description/Description";
import Explanation from "./components/Explanation/Explanation";
import Footer from "./components/Footer/Footer";
import RecordingButtons from "./components/RecordingButtons/RecordingButtons";
import TitleRight from "./components/Title/TitleLeft";
import TitleRightt from "./components/Title/TitleRightt";

function App() {
  return (
    <div className="App">
      <div className="flex flex-row  ">
        <section className="p-16 flex flex-col gap-8 ">
          <header className="pt-20 flex flex-col">
            <TitleRight />
            <TitleRightt />
          </header>
          <RecordingButtons />
        </section>
        <section className=" border-double border-r-2 border-l-2 h-full w-[30%] z-10 absolute right-44 bg-slate-950">
          <ul className="flex flex-col gap-4 pt-20">
            <li>
              <Explanation />
            </li>
            <li>
              <Description />
            </li>
          </ul>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
