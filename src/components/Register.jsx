import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";

export default function Register() {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const name = form.get("name");

    if (name?.length < 5) {
      setError({ ...error, name: "Name should more then 5 charecter long" });
      return;
    }

    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    console.log(name, email, password, photo);

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errormessage = error.message;
        console.log(errorCode, errormessage);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 text-white w-full max-w-lg shrink-0 shadow-2xl">
        <p className="text-center font-bold pt-10 text-2xl">
          Register Your Account
        </p>
        <div className="card-body">
          <form onSubmit={handleSubmit} className="form space-y-4">
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input w-full"
              placeholder="name"
            />
            <p>
              {error?.name && <p className="text-red-400">* {error?.name}</p>}
            </p>
            <label className="label">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input w-full"
              placeholder="Photo url"
            />
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

            <button className="btn btn-neutral mt-4 w-full">Register</button>
          </form>
          <div className="text-center text-green-300 py-5 font-bold">
            <Link to="/auth/login">Login Your Account !!!</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
