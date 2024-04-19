import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { User } from "./client";
import * as client from "./client";
export default function Signin() {
    const [credentials, setCredentials] = useState<User>({
        _id: "",
        username: "", password: "", firstName: "", lastName: "", role: "USER"
    });
    const navigate = useNavigate();
    const signin = async () => {
        await client.signin(credentials);
        navigate("/Kanbas/Account/Profile");
    };


    return (
        <div>
            <h1>Signin</h1>
            <input placeholder="Username" value={credentials.username} onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })} />
            <input placeholder="Password" value={credentials.password} onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })} />
            <button className="btn btn-primary" onClick={signin}> Sign in </button>
            <Link to="../Signup">
                <button className="btn btn-secondary">Go to Sign up</button>
            </Link>
        </div>
    );
}
