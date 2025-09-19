import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";

export default function Login() {
  const { signInUser, setUser } = useContext(AuthContext);
  const [error, setError] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className=" bg-base-100 text-white w-full max-w-lg shrink-0 shadow-2xl">
        <p className="text-center font-bold pt-10 text-2xl">
          Login Your Account
        </p>
        <div className="card-body ">
          <form onSubmit={handleLogin} className="form space-y-4">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input w-full"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input w-full"
              placeholder="Password"
            />

            {error.login && <div className="text-center font-bold text-lg text-red-500">{error.login}</div>}

            <button className="btn btn-neutral w-full mt-4">Login</button>
          </form>
          <div className="text-center text-green-300 py-5 font-bold">
            <Link to="/auth/register">Create Account !!!</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
