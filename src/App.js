import { Routes, Route } from "react-router-dom";
import "./App.css";
import RegistrationForm from "./components/pages/registrationForm";
import Header from "./components/pages/header";
import View from "./components/View";
function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<View />} />
        <Route path="register" element={<RegistrationForm />} />
      </Routes>

      {/* <RegistrationForm /> */}
    </div>
  );
}

export default App;
