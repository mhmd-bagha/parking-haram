import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./containers/home";
import Sidebar from "./components/sidebar/sidebar";
import Header from "./components/header";

function App() {
    return (
        <div>
            <div className="container-fluid">
                <div className='row'>
                    <div className="col-2 bg-sidebar"><Sidebar/></div>
                    <div className="col-10 bg-header"><Header/> <Home/> </div>
                </div>
            </div>
            <Routes>
                <Route path='/' element={Home} index/>
            </Routes>
        </div>
    );
}

export default App;
