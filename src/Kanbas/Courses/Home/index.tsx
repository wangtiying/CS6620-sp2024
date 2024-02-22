import ModuleList from "../Modules/List";
import Status from "./status";


function Home() {
    return (
        <div className="d-flex">
            {/* <h2>Home</h2> */}
            <div className="flex-fill col-sm-7"><ModuleList /></div>
            <Status />
        </div>
    );
}
export default Home;