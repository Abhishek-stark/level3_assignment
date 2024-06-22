import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SurveyForm from "./components/SurveyForm";
import DetailWindow from "./components/DetailWindow";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SurveyForm />} />
          <Route path="/pop-up" element={<DetailWindow />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
