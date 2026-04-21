import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/bgremovedlogo.png';

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder for login logic
        alert('Login functionality will be integrated with the backend.');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] py-12 px-4 font-dm pt-[150px]">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center mb-4">
                        <img src={logo} alt="Bravo Groups Logo" className="h-14 w-auto drop-shadow-sm" />
                    </div>
                    <h2 className="text-1xl font-bold text-navy mb-1">Welcome Back</h2>
                    <p className="text-[0.7rem] text-gray-500">Login to your account to continue</p>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[0.65rem] font-bold text-navy">Email Address</label>
                        <input 
  type="email" 
  placeholder="Enter your email" 
  required 
  className="w-full h-9 px-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none" 
/>
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[0.65rem] font-bold text-navy">Password</label>
                        <input 
                            type="password" 
                            placeholder="Enter your password" 
                            required 
                            className="w-full h-9 px-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none" 
                        />
                    </div>
                    <button type="submit" className="w-full bg-primary text-white py-3.5 rounded-xl font-bold uppercase tracking-wide shadow-lg hover:bg-navy transition-all transform hover:-translate-y-0.5">
                        LOGIN
                    </button>
                </form>

                <div className="mt-8 text-center text-[0.9rem] text-gray-500">
                    Don't have an account? 
                    <Link to="/register" className="text-primary font-bold ml-1 hover:underline">Register Now</Link>
                </div>
                
                <div className="mt-4 text-center">
                    <Link to="/" className="text-gray-400 text-[0.85rem] hover:text-navy transition-colors">Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
