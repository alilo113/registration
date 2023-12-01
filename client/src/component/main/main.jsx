import { Link } from "react-router-dom";
import React from 'react';

export function Main() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="space-x-4">
                <Link to="/log-in" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Log-in
                </Link>
                <Link to="/sign-up" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Sign-up
                </Link>
            </div>
        </div>
    );
}