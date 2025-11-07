import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <BrowserRouter basename="/TaskForge">
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
