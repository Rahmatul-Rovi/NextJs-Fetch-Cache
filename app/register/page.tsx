"use client";

import { registerUser } from "@/app/actions/register";
import { useState } from "react";

export default function RegisterPage() {
  const [message, setMessage] = useState("");

  async function handleSubmit(formData) {
    const result = await registerUser(formData);
    if (result.error) {
      setMessage(result.error);
    } else {
      setMessage(result.success);
    }
  }

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ccc" }}>
      <h2>Register</h2>
      <form action={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Name: </label>
          <input type="text" name="name" required style={{ width: "100%", color: "black" }} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Email: </label>
          <input type="email" name="email" required style={{ width: "100%", color: "black" }} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Password: </label>
          <input type="password" name="password" required style={{ width: "100%", color: "black" }} />
        </div>
        <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>
          Sign Up
        </button>
      </form>
      {message && <p style={{ marginTop: "10px", color: "blue" }}>{message}</p>}
    </div>
  );
}