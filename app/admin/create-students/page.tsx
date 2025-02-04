"use client";
import { useState } from "react";
import axios from "axios";

export default function CreateStudents() {
  const [name, setName] = useState("");
  const [regno, setRegNo] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhoneNo] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = async (event) => {
    event.preventDefault();

    // Validation
    if (!name || !regno || !phoneno || !email) {
      setMessage("Please fill in all the fields.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/admin/newstudent",
        {
          name: name,
          regno: Number(regno),
          phoneno: Number(phoneno),
          email: email,
        }
      );

      setMessage("Student created successfully!");
      console.log("Student created successfully:", response.data);

      
      setName("");
      setRegNo("");
      setEmail("");
      setPhoneNo("");
    } catch (error) {
      setMessage("Error creating student. Please try again.");
      console.error("Error creating student:", error.response?.data || error.message);
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="p-6 space-y-4 border rounded shadow-lg">
        <div className="text-center font-bold">Admin Dashboard</div>
        <h1 className="text-xl font-bold text-center">Create New Student</h1>
        {message && (
          <div
            className={`p-2 text-center rounded ${
              message.includes("success")
                ? "bg-green-200 text-green-800"
                : "bg-red-200 text-red-800"
            }`}
          >
            {message}
          </div>
        )}
        <div className="space-y-3">
          <div>
            <label className="block mb-1">Student Name:</label>
            <input
              className="border rounded p-2 w-full"
              placeholder="Enter student name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1">Registration No:</label>
            <input
              className="border rounded p-2 w-full"
              placeholder="Enter registration number"
              type="number"
              value={regno}
              onChange={(e) => setRegNo(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1">Email:</label>
            <input
              className="border rounded p-2 w-full"
              placeholder="Enter student email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1">Phone No:</label>
            <input
              className="border rounded p-2 w-full"
              placeholder="Enter phone number"
              type="tel"
              value={phoneno}
              onChange={(e) => setPhoneNo(e.target.value)}
            />
          </div>
          <button
            onClick={handleClick}
            className="w-full bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
          >
            Create Student
          </button>
        </div>
      </div>
    </div>
  );
}
