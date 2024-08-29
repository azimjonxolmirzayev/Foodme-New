import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import NextPage from "./NextPage"; // Import the component for the next page

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/next-page" element={<NextPage />} />{" "}
        {/* Define the route for the next page */}
      </Routes>
    </Router>
  );
}

export default AppRouter;
