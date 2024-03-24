import { Outlet, Link } from "react-router-dom";
import logo from "../public/logoGray.svg";
import Avatar from "../public/default-avatar.svg";
import Add from "../public/add.svg";
import Footer from "./Footer/Footer.jsx";

function Root() {
    return (
        <>
            <nav className="w-screen flex flex-row justify-between bg-neutral-950 border-b-2 border-solid border-neutral-700 p-4 ">
                <Link to={"/"}>
                    <img src={logo} alt="Logo" />
                </Link>
                <div className="flex">
                    <Link to={"/lesson-creator/"}>
                        <img src={Add} alt="CreateLesson" />
                    </Link>
                    <Link to={"/settings/"}>
                        <img src={Avatar} alt="Avatar" />
                    </Link>
                </div>
            </nav>
            <Outlet />
            <Footer />
        </>
    );
}

export default Root;
