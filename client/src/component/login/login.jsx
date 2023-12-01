import { Link } from "react-router-dom";
import React from 'react';

export function Login(){
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-semibold mb-6 text-center">Log in</h1>
                <form action="/signup" method="post">
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
                        <input type="text" id="username" name="username" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Password</label>
                        <input type="text" id="username" name="username" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div className="mb-6">
                        <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign Up</button>
                    </div>
                </form>
                <Link to="/sign-up">Create an account</Link>
            </div>
        </div>
    );
}