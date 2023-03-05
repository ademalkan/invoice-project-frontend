import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { setToken } from "@/utils/helpers/auth";
import api from "@/utils/helpers/api";
function AuthForm() {
  const [email, setEmail] = useState("adem@gmail.com");
  const [password, setPassword] = useState("123");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Loading durumunu true yap

    try {
      const response = await api.post("http://127.0.0.1:8000/api/auth/login", {
        email,
        password,
      });

      if (!response.data.status) {
        throw new Error(response.data.message);
      }

      setToken(response.data.token);
      router.push("/invoice/dashboard");
    } catch (error) {
      setError(error.message);
    }

    setLoading(false); // Loading durumunu false yap
  };
  return (
    <div className="mx-auto h-screen  grid place-items-center bg-blue-300">
      <form onSubmit={handleSubmit} className="grid place-items-center">
        <h1 className="text-3xl font-bold underline mb-10">Login in</h1>
        <div class="grid mb-6 md:grid-col">
          <label
            for="last_name"
            className="block 2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </label>
        </div>
        <div class="grid mb-6 md:grid-col">
          <label
            for="last_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </label>
        </div>
        <div>
          <button
            type="submit"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            disabled={loading}
          >
            Login
          </button>{" "}
          {/* Butonu disable et */}
        </div>
        {loading && <p>Loading...</p>} {/* Loading durumunda mesaj göster */}
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default AuthForm;
