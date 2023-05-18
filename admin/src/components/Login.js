import react from "react";
import logo from "../images/logo.jpg";
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = react.useState("");
    const [password, setPassword] = react.useState("");
    const history = useNavigate();
    const handleClick = () => {
        console.log('Login button clicked');
        history('/admin');
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <div className="avatar">
                        <div className="card flex-shrink-0 w-96 shadow-2xl">
                            <img src={logo} alt="Logo"/>
                        </div>
                    </div>
                </div>

                <div className="card flex-shrink-0 w-96 shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-center text-3xl font-bold">Login!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label>
                            <input
                                type="text"
                                placeholder="username"
                                className="input input-bordered"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                className="input input-bordered"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-secondary"  type="button" onClick={handleClick} >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;