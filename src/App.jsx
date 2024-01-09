import React from "react";
import Navbar from "./components/navbar/Navbar"
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
    return (
        <>
        <Navbar></Navbar>
        <Home></Home>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
        </>
    )
}

export default App;