import Config from "../config.jsx";
import { Label, Input } from "../helpers/forms.jsx";
import { Link } from "react-router-dom";
import logo from "/public/logoBlue.svg";
import logoBig from "/public/logoBlueBig.svg";
import { redirect } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
    let url = Config.host + "/register/";
    const [shouldRedirect, setShouldRedirect] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        let data = new FormData(e.target);
        let body = JSON.stringify(Object.fromEntries(data));
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        fetch("http://localhost:5000/register/", {
            method: "POST",
            mode: "cors",
            headers: headers,
            body: body,
        }).then((response) => {
            if (response.ok) {
                response.json().then((data) => {
                    alert(data.message);
                    setShouldRedirect([<Navigate to="/" replace />]);
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
            {shouldRedirect.map((e, index) => {
                return <div key={index}>{e}</div>;
            })}
            <main className="bg-neutral-900 h-screen flex flex-col w-[500px] rounded-r-3xl p-10 relative z-10">
                <h1 className="text-sky-200 text-7xl font-bold">Sign Up</h1>
                <img src={logo} alt="Logo" className="absolute top-6 right-6" />
                <form
                    action={url}
                    className="flex flex-col gap-4 p-4 pl-0 mt-14"
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-col">
                        <Label
                            labelFor="username"
                            text="Name"
                            required={true}
                        />
                        <Input type="text" name="username" />
                    </div>
                    <div className="flex flex-col">
                        <Label
                            labelFor="email"
                            text="E-mail Address"
                            required={true}
                        />
                        <Input type="email" name="email" />
                    </div>
                    <div className="flex flex-col">
                        <Label
                            labelFor="date-of-birth"
                            text="Date Of Birth"
                            required={true}
                        />
                        <Input type="date" name="date-of-birth" />
                    </div>
                    <div className="flex flex-col">
                        <Label
                            labelFor="password"
                            text="Password"
                            required={true}
                        />
                        <Input type="password" name="password" />
                    </div>
                    <div className="flex flex-col">
                        <Label
                            labelFor="password-confirmation"
                            text="Confirm Password"
                            required={true}
                        />
                        <Input type="password" name="password-confirmation" />
                    </div>
                    <button
                        type="submit"
                        className="bg-sky-200 text-sky-950 rounded-xl p-1 px-3 w-fit text-xl"
                    >
                        Sign Up
                    </button>
                </form>
                <Link
                    to={"/login/"}
                    className="underline text-neutral-500 absolute bottom-7"
                >
                    Already Have An Account?
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
