import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import HondaTuruna from "../pages/hondaTuruna";

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="turuna" element={<HondaTuruna />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;