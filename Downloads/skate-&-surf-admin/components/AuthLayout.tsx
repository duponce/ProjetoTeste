import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout: React.FC = () => {
    return (
        <div className="min-h-screen bg-background-dark flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-md bg-surface-darker rounded-xl border border-gray-800 shadow-2xl p-8 animate-fade-in">
                <div className="flex flex-col items-center mb-8">
                    <div
                        className="bg-center bg-no-repeat bg-cover rounded-full size-16 shadow-lg shadow-electric-teal/20 mb-4"
                        style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAacMT16Vrcy0F-fYd2jAV5ArRo8heRyibDnQa7ZeeBwqcA8yeFMhdlaOxCTzeTvswPWH_bAB56X2a9PZ7mHaHJI1s0ZhAotm_SdU1jNd_8qM6hztma2tgKe-3yU1FgAxdkYUyTOpLcF85mvn6YkMYjb8C3wOFnZhQEN0tS85ZX6M-_-0V4AEj5GE8KVaPv1a_O3qAIfTUIAS_YZ0glFxnF9hmI5sb75Uc8gWkMAQrBVq6m3DY1lIYklG1z--d-fZW2Lcy3d2ErLSWl")` }}
                    />
                    <h1 className="text-2xl font-bold text-white tracking-tight">Skate & Surf</h1>
                    <p className="text-slate-400 text-sm font-medium uppercase tracking-wider mt-1">Admin Portal</p>
                </div>
                <Outlet />
            </div>
            <p className="mt-8 text-slate-500 text-sm">
                &copy; {new Date().getFullYear()} Skate & Surf. All rights reserved.
            </p>
        </div>
    );
};

export default AuthLayout;
