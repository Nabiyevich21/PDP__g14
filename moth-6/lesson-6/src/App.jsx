// import React, { Component } from "react";
// import "./App.css";
// import { Route, Routes, Link } from "react-router-dom";
// export default class App extends Component {
//     render() {
//         return (
//             <>
//                 <Link to={"/"}>Home</Link>
//                 <Link to={"/about"}>about</Link>
//                 <Link to={"/contact"}>contact</Link>
//                 <Routes>
//                     <Route path="/" element={<h1>Home Page</h1>} />
//                     <Route path="/about" element={<h1>about Page</h1>} />
//                     <Route path="/contact" element={<h1>contact Page</h1>} />
//                 </Routes>
//             </>
//         );
//     }
// }

import React from "react";
import Counter from "./Components/Counter/Counter";

export default function App() {
    return (
        <div>
            <Counter />
        </div>
    );
}
