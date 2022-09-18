import { Routes, Route } from "react-router-dom";
import Home from "./containers/home";
import Sidebar from "./components/sidebar/sidebar";
import Header from "./components/header";

function App() {
    return (
        <div className='container-fluid'>
            <section><Sidebar /></section>
            <section className='content-wrapper'>
                <section className='header-content'><Header /></section>
                <section className='home main-content'><Home /></section>
            </section>
            <Routes>
                <Route path='/' element={Home} index />
            </Routes>
        </div>
    );
}

export default App;
