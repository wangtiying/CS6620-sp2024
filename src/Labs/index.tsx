import { Routes, Route, Link } from "react-router-dom";
import Nav from "../Nav";
import Assignment3 from "./a3";
import Assignment4 from "./Assignment4";
import store from "./store";
import { Provider } from "react-redux";
function Labs() {
    return (
        <Provider store={store}>
            <>
                <Nav />
                <h1>Labs</h1>
                <Link to="a3">Assignment 3</Link> | <Link to="a4">Assignment 4</Link>
                <Routes>
                    <Route path="a3/*" element={<Assignment3 />} />
                    <Route path="a4" element={<Assignment4 />} />
                </Routes>
            </>
        </Provider>
    );
}

export default Labs;