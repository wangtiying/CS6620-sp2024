import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaRegClock, FaLaptop, FaArrowAltCircleRight, FaQuestionCircle } from "react-icons/fa";



function KanbasNavigation() {
        const links = [
                { label: "Account", icon: <FaRegUserCircle className="fs-2 " /> },
                { label: "Dashboard", icon: <FaTachometerAlt className="fs-2 icon-red" /> },
                { label: "Courses", icon: <FaBook className="fs-2 icon-red" /> },
                { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2 icon-red" /> },
                { label: "Inbox", icon: <FaInbox className="fs-2 icon-red" /> },
                { label: "History", icon: <FaRegClock className="fs-2 icon-red" /> },
                { label: "Studio", icon: <FaLaptop className="fs-2 icon-red" /> },
                { label: "Commons", icon: <FaArrowAltCircleRight className="fs-2 icon-red" /> },
                { label: "Help", icon: <FaQuestionCircle className="fs-2 icon-red" /> },

        ];

        const { pathname } = useLocation();

        return (
                <ul className="wd-kanbas-navigation">
                        <li className="N-icon">
                                <Link to="http://northeastern.edu">N</Link>
                        </li>
                        {links.map((link, index) => (
                                <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                                        <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
                                </li>
                        ))}
                </ul>
        );
}
export default KanbasNavigation;

