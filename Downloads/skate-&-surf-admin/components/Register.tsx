import React, { useState } from 'react';
import { supabase } from '../services/supabaseClient';
import { Link, useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            setLoading(false);
            return;
        }

        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
            });

            if (error) throw error;

            if (data.session) {
                navigate('/');
            } else {
                // Requires email verification usually, let user know or redirect to login
                alert('Registration successful! Please check your email for confirmation link if enabled, or sign in.');
                navigate('/login');
            }

        } catch (err: any) {
            setError(err.message || 'Failed to register');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full">
            <h2 className="text-xl font-semibold text-white mb-6 text-center">Register New Admin</h2>

            {error && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-sm p-3 rounded-lg mb-4">
                    {error}
                </div>
            )}

            <form onSubmit={handleRegister} className="space-y-4">
                <div>
                    <label className="block text-slate-400 text-sm font-medium mb-1">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-background-dark border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        placeholder="admin@example.com"
                        required
                    />
                </div>

                <div>
                    <label className="block text-slate-400 text-sm font-medium mb-1">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-background-dark border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        placeholder="••••••••"
                        required
                        minLength={6}
                    />
                </div>

                <div>
                    <label className="block text-slate-400 text-sm font-medium mb-1">Confirm Password</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full bg-background-dark border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        placeholder="••••••••"
                        required
                        minLength={6}
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary hover:bg-primary-hover text-white font-medium py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {loading ? (
                        <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    ) : (
                        'Create Account'
                    )}
                </button>
            </form>

            <div className="mt-6 text-center">
                <p className="text-slate-500 text-sm">
                    Already have an account?{' '}
                    <Link to="/login" className="text-primary hover:text-primary-light transition-colors">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
