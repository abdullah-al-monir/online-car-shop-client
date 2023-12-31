import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { BsEyeSlashFill, BsEyeFill, BsGoogle } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";

import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signInUser, googleSignIn, dark } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
      .then(() => {
        e.target.reset();
        navigate(location?.state ? location.state : "/");
        return Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User logged in successfully!",
          showConfirmButton: false,
          timer: 1000,
        });
      })
      .catch((error) => {
        let errorMessage = "An error occurred during login.";

        if (error.code === "auth/invalid-email") {
          errorMessage = "Invalid email address.";
        } else if (error.code === "auth/user-not-found") {
          errorMessage = "User not found. Please check your credentials.";
        } else if (error.code === "auth/wrong-password") {
          errorMessage = "Incorrect password.";
        }
        setError(errorMessage);
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        navigate(location?.state ? location.state : "/");
        return Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User logged in successfully!",
          showConfirmButton: false,
          timer: 1000,
        });
      })
      .catch(() => {
        let errorMessage =
          "An error occurred while login using this Google account.";
        return setError(errorMessage);
      });
  };

  return (
    <div className="flex justify-center items-center  min-h-[85vh] bg-login bg-cover bg-center">
      <form
        onSubmit={handleLogIn}
        className={`my-20 w-3/4 md:w-4/6 lg:max-w-lg mx-20 rounded-2xl py-12 px-10 md:px-20 shadow-xl ${
          dark ? "bg-black/70" : "bg-white/70"
        } font-semibold`}
      >
        <img className="w-24 mx-auto" src="logo.png" alt="" />
        <h1 className="text-center my-3 text-3xl font-bold uppercase">
          Automotive Oasis
        </h1>
        {error && (
          <div className="text-red-500 text-center  rounded-lg p-3 mb-5">
            {error}
          </div>
        )}
        <div className="mb-5">
          <label className="block mb-2">Your email</label>
          <input
            type="email"
            name="email"
            className={`${
              dark
                ? "bg-gray-50 text-gray-900 border-gray-300"
                : "bg-gray-700 text-white  border-gray-200"
            } border   rounded-lg  block w-full p-2.5`}
            placeholder="yourmail@example.com"
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm  ">Your password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className={`${
                dark
                  ? "bg-gray-50 text-gray-900 border-gray-300"
                  : "bg-gray-700 text-white  border-gray-200"
              } border   rounded-lg  block w-full p-2.5`}
              placeholder="your password"
              required
            />
            <button
              className={`text-lg absolute right-3 top-3 ${
                dark ? " text-gray-900 " : " text-white  "
              }`}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <BsEyeFill></BsEyeFill>
              ) : (
                <BsEyeSlashFill></BsEyeSlashFill>
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between mb-4 gap-5">
          <div className="flex items-start ">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className={`${
                  dark
                    ? "bg-gray-50 text-gray-900 border-gray-300"
                    : "bg-gray-700 text-white  border-gray-200"
                } border   rounded-lg  block w-full p-2.5`}
              />
            </div>
            <label className="ml-2 text-sm  ">Remember me</label>
          </div>
          <NavLink
            to="/resetPassword"
            className="ml-2 text-sm font-semibold text-red-600"
          >
            Forget password?
          </NavLink>
        </div>

        <div className="mb-5">
          <h2>
            Don't have an account?{" "}
            <NavLink className="text-red-600 font-semibold" to="/signUp">
              SignUp
            </NavLink>
          </h2>
        </div>
        <button
          type="submit"
          className="text-white focus:ring-4 focus:outline-none rounded-lg text-sm w-full px-10 py-2.5 text-center bg-red-600 hover:bg-red-700 focus:ring-red-800 flex gap-2 items-center justify-center"
        >
          Login
        </button>
        <div className="flex text-center items-center justify-center gap-2 my-5">
          <hr
            className={`w-full border ${
              dark ? "border-white" : "border-black"
            }`}
          />
          <h2 className="text-center w-72">Login with</h2>
          <hr
            className={`w-full border ${
              dark ? "border-white" : "border-black"
            }`}
          />
        </div>

        <button
          onClick={handleGoogleSignIn}
          type="submit"
          className="text-white focus:ring-4 focus:outline-none   rounded-lg text-sm w-full px-10 py-2.5 text-center bg-red-600 hover:bg-red-700 focus:ring-red-800 flex gap-2 items-center justify-center"
        >
          <BsGoogle className="text-lg"></BsGoogle>
          Google
        </button>
      </form>
    </div>
  );
};

export default Login;
