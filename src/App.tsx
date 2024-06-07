import Description from "./components/Description/Description";
import Explanation from "./components/Explanation/Explanation";
import RecordingButtons from "./components/RecordingButtons/RecordingButtons";
import TitleRight from "./components/Title/TitleLeft";
import TitleRightt from "./components/Title/TitleRightt";

function App() {
  return (
    <div className="App">
      <div className="flex flex-col ">
        <header>
          <ul className="p-4 flex flex-row justify-center items-center h-[160px] gap-4 font-extrabold font-geologica ">
            <li>
              <TitleRight />
            </li>
            <li>
              <TitleRightt />
            </li>
          </ul>
        </header>
        <ul className="flex flex-col gap-4 pt-4">
          <li>
            <RecordingButtons />
          </li>
          <li>
            <Explanation />
          </li>
          <li>
            <Description />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
