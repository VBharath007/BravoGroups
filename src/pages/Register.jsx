import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/bgremovedlogo.png';

const Register = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder for registration logic
        alert('Registration functionality will be integrated with the backend.');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] py-12 px-4 font-dm pt-[150px]">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center mb-4">
                        <img src={logo} alt="Bravo Groups Logo" className="h-14 w-auto drop-shadow-sm" />
                    </div>
                    <h2 className="text-2xl font-bold text-navy mb-1">Create Account</h2>
                    <p className="text-[0.9rem] text-gray-500">Join Bravo Groups to start your journey</p>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[0.85rem] font-bold text-navy">Full Name</label>
                        <input 
                            type="text" 
                            placeholder="Enter your full name" 
                            required 
                            className="w-full p-3.5 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none" 
                        />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[0.85rem] font-bold text-navy">Email Address</label>
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            required 
                            className="w-full p-3.5 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none" 
                        />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[0.85rem] font-bold text-navy">Mobile Number</label>
                        <input 
                            type="tel" 
                            placeholder="Enter mobile number" 
                            required 
                            className="w-full p-3.5 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none" 
                        />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-[0.85rem] font-bold text-navy">Password</label>
                        <input 
                            type="password" 
                            placeholder="Create a password" 
                            required 
                            className="w-full p-3.5 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none" 
                        />
                    </div>
                    <button type="submit" className="w-full bg-primary text-white py-3.5 rounded-xl font-bold uppercase tracking-wide shadow-lg hover:bg-navy transition-all transform hover:-translate-y-0.5 mt-2">
                        REGISTER
                    </button>
                </form>

                <div className="mt-8 text-center text-[0.9rem] text-gray-500">
                    Already have an account? 
                    <Link to="/login" className="text-primary font-bold ml-1 hover:underline">Login Here</Link>
                </div>

                <div className="mt-4 text-center">
                    <Link to="/" className="text-gray-400 text-[0.85rem] hover:text-navy transition-colors">Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
