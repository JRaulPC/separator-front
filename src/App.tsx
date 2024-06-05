import "./App.css";
import PageDescription from "./components/Description/Description";
import Header from "./components/Header/Header";
import RecordingButtons from "./components/RecordingButtons/RecordingButtons";
import Timer from "./utils/RecordingTimer";

function App() {
  return (
    <div className="App">
      <Header />
      <PageDescription />
      <RecordingButtons />
    </div>
  );
}

export default App;
