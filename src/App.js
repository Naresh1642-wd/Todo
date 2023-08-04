import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import { Bloglist } from "./Components/Bloglist";
import EditList from "./Components/editList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/BlogList" Component={Bloglist}></Route>
        <Route path="/editList/:id" Component={EditList}></Route>
      </Routes>
    </Router>
  );
}
export default App;
