import {Routes,Route} from "react-router-dom";
import "./App.css"
import Login from "./pages/Login/login";
import Reports from "./pages/reports/reports";
import SideBar from "./components/sidbar/sidbar";
import New from "./pages/new/new";
import Prev from "./pages/prev/prev";
import Upload from "./pages/upload/upload";
import Checkplagiarism from "./pages/checkPlagrism/checkP";

function App() {
  return (
    <div className="App">
     
     
      <Routes >
        <Route path="/" element={ <> <SideBar/> <Reports /> </> } />
        <Route path="/newprojects" element={ <> <SideBar/> <New /> </> } />
        <Route path="/previousprojects" element={ <> <SideBar/> <Prev /> </> } />
        <Route path="/uploadfiles" element={ <> <SideBar/> <Upload /> </> } />
        <Route path="/checkplagiarism/:id" element={ <> <SideBar/> <Checkplagiarism /> </> } />
        <Route path="/login" element={<Login />} />
      </Routes>

    </div>
  );
}

export default App;
