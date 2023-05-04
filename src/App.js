import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import About from "./pages/About/About";
import Work from "./pages/Work/Work";
import Experience from "./pages/Experience/Experience";
import Education from "./pages/Education/Education";
import Contact from "./pages/Contact/Contact";
import { Context } from "./Context";
import { useState } from "react";
import Certificates from "./pages/Certificates/Certificates";
import Footer from "./components/Footer/Footer";

function App() {
    const [data, setData] = useState({});
    return (
        <Router>
            <Context.Provider value={{ data, setData }}>
                <Navigation />
                <Routes>
                    <Route path="/npsonawane" element={<About />}></Route>
                    <Route path="/npsonawane/about" element={<Home />}></Route>
                    <Route path="/npsonawane/work" element={<Work />}></Route>
                    <Route
                        path="/npsonawane/experience"
                        element={<Experience />}
                    ></Route>
                    <Route
                        path="/npsonawane/education"
                        element={<Education />}
                    ></Route>
                    <Route
                        path="/npsonawane/contact"
                        element={<Contact />}
                    ></Route>
                    <Route
                        path="/npsonawane/certificates"
                        element={<Certificates />}
                    ></Route>
                </Routes>
                <Footer />
            </Context.Provider>
        </Router>
    );
}

export default App;
