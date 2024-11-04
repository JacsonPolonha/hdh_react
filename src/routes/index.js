import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import HondaTuruna from "../pages/hondaTuruna";
import About from "../pages/about";

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="turuna" element={<HondaTuruna />} />
                <Route path="about" element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;