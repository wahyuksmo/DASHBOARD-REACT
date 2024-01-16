import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";


function App() {
  return (
    <Router>
      <Sidebar />

      <div className="p-3 wrapper">
        <Routes>
          <Route path="/" element={<div>Hello from Dashboard</div>} />
          <Route path="/login" element={<div>Hello from Login</div>} />
          <Route path="/logout" element={<div>Hello from Logout</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
