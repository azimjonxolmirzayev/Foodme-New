import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NextPage from "./components/NextPage";
import Login from "./components/login/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/next-page" element={<NextPage />} />{" "}
      </Routes>
    </Router>
  );
}

export default App;
