import Config from "../config.jsx";
import { Label, Input } from "../helpers/forms.jsx";
import { Link } from "react-router-dom";
import logo from "/public/logoBlue.svg";
import logoBig from "/public/logoBlueBig.svg";
import { redirect } from "react-router-dom";

export default function Login() {
    let url = Config.host + "/login/";
    function handleSubmit(e) {
        e.preventDefault();
        let data = new FormData(e.target);
        let body = JSON.stringify(Object.fromEntries(data));

        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        fetch("http://localhost:5000/login/", {
            method: "POST",
            mode: "cors",
            headers: headers,
            body: body,
        }).then((response) => {
            if (response.ok) {
                response.json().then((data) => {
                    alert(data.message);
                    redirect("/");
                });
            } else {
                response.json().then((data) => {
                    alert(data.message);
                });
            }
        });
    }
    return (
        <div className="bg-neutral-950 w-screen h-screen">
            <main className="bg-neutral-900 h-screen flex flex-col w-[500px] rounded-r-3xl p-10 relative z-10">
                <h1 className="text-sky-200 text-7xl font-bold">Sign In</h1>
                <img src={logo} alt="Logo" className="absolute top-6 right-6" />
                <form
                    action={url}
                    className="flex flex-col gap-4 p-4 pl-0 mt-14"
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-col">
                        <Label
                            labelFor="login"
                            text="Login or E-mail Address"
                            required={true}
                        />
                        <Input type="text" name="login" />
                    </div>
                    <div className="flex flex-col">
                        <Label
                            labelFor="password"
                            text="Password"
                            required={true}
                        />
                        <Input type="password" name="password" />
                    </div>
                    <button
                        type="submit"
                        className="bg-sky-200 text-sky-950 rounded-xl p-1 px-3 w-fit text-xl"
                    >
                        Sign In
                    </button>
                </form>
                <Link
                    to={"/register/"}
                    className="underline text-neutral-500 absolute bottom-7"
                >
                    Dont Have An Account?
                </Link>
            </main>
            <img
                src={logoBig}
                alt="Background"
                className="z-0 fixed h-screen left-14 top-24 blur-xl opacity-50"
            />
        </div>
    );
}
