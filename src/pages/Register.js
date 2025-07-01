import React, { useState } from "react";
const Register = () => {
  const [email, setEmail] = useState(""); const [password, setPassword] = useState("");
  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="border p-2 w-full mb-2" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="border p-2 w-full mb-4" />
      <button className="bg-green-600 text-white py-2 px-4 rounded w-full">Register</button>
    </div>
  );
};
export default Register;