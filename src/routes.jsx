import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Index';
import About from './pages/About/Index';
import Feticos from './pages/Feiticos/Index';
import Rituais from "src/pages/Rituais/index.jsx";
import Livros from './pages/Livros/Index';

function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<About />} />
                <Route path="/feticos" element={<Feticos />} />
                <Route path="/rituais" element={<Rituais />} />
                <Route path="/livros" element={<Livros />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
