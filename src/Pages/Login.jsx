import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAuth } from "../Context/AuthContext";

const Login = () => {
  const { logIn, signUp } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isRegister) {
        await signUp(email, password, firstName);
        navigate("/home");
      } else {
        await logIn(email, password);

        // Redirect based on role
        if (email === "fk9719650@gmail.com") {
          navigate("/admin");
        } else {
          navigate("/home");
        }
      }

      setEmail("");
      setPassword("");
      setFirstName("");
    } catch (error) {
      console.error(error);
      toast.error("Login failed, please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6">
      <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center">
          {isRegister ? "Register" : "Login"}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegister && (
            <div>
              <label className="block mb-1 font-medium text-sm sm:text-base md:text-base">
                First Name
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full border px-3 py-2 sm:px-4 sm:py-2 md:px-4 md:py-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm sm:text-base"
                required
              />
            </div>
          )}

          <div>
            <label className="block mb-1 font-medium text-sm sm:text-base md:text-base">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border px-3 py-2 sm:px-4 sm:py-2 md:px-4 md:py-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm sm:text-base"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-sm sm:text-base md:text-base">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border px-3 py-2 sm:px-4 sm:py-2 md:px-4 md:py-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm sm:text-base"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 sm:py-3 md:py-3 rounded hover:bg-blue-700 transition text-sm sm:text-base md:text-base"
          >
            {isRegister ? "Register" : "Login"}
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600 text-xs sm:text-sm md:text-sm">
          {isRegister ? "Already have an account?" : "New user?"}{" "}
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="text-blue-600 hover:underline text-xs sm:text-sm md:text-sm"
          >
            {isRegister ? "Login" : "Register"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
