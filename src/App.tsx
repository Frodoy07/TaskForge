import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
