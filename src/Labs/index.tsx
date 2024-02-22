import { Routes, Route, Link } from "react-router-dom";
import Nav from "../Nav";
import Assignment3 from "./a3";
import Assignment4 from "./Assignment4";

function Labs() {
    return (
        <>
            <Nav />
            <h1>Labs</h1>
            <Link to="a3">Assignment 3</Link> | <Link to="a4">Assignment 4</Link>
            <Routes>
                <Route path="a3/*" element={<Assignment3 />} />
                <Route path="a4" element={<Assignment4 />} />
            </Routes>
        </>
    );
}

export default Labs;