
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation, Outlet } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Catalog from './components/Catalog';
import ProductDetail from './components/ProductDetail';
import AddProduct from './components/AddProduct';
import Directory from './components/Directory';
import Login from './components/Login';
import Register from './components/Register';
import AuthLayout from './components/AuthLayout';
import { AuthProvider } from './components/AuthProvider';
import ProtectedRoute from './components/ProtectedRoute';

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const NavLink = ({ to, icon, label, badge }: { to: string; icon: string; label: string; badge?: string }) => {
    const isActive = currentPath === to || (to === '/catalog' && currentPath.startsWith('/product'));
    return (
      <Link
        to={to}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${isActive ? 'bg-primary/10 border-l-4 border-primary' : 'hover:bg-white/5'
          }`}
      >
        <span className={`material-symbols-outlined ${isActive ? 'text-primary icon-fill' : 'text-slate-400 group-hover:text-white'}`}>
          {icon}
        </span>
        <p className={`text-sm font-medium ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'}`}>
          {label}
        </p>
        {badge && (
          <span className="ml-auto bg-vibrant-orange/20 text-vibrant-orange text-xs font-bold px-2 py-0.5 rounded-full">
            {badge}
          </span>
        )}
      </Link>
    );
  };

  return (
    <aside className="flex flex-col w-[280px] h-screen bg-surface-darker border-r border-gray-800 flex-shrink-0 fixed left-0 top-0 z-50 overflow-y-auto">
      <div className="p-6 pb-2">
        <div className="flex items-center gap-3 mb-8">
          <div
            className="bg-center bg-no-repeat bg-cover rounded-full size-12 shadow-lg shadow-electric-teal/20"
            style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAacMT16Vrcy0F-fYd2jAV5ArRo8heRyibDnQa7ZeeBwqcA8yeFMhdlaOxCTzeTvswPWH_bAB56X2a9PZ7mHaHJI1s0ZhAotm_SdU1jNd_8qM6hztma2tgKe-3yU1FgAxdkYUyTOpLcF85mvn6YkMYjb8C3wOFnZhQEN0tS85ZX6M-_-0V4AEj5GE8KVaPv1a_O3qAIfTUIAS_YZ0glFxnF9hmI5sb75Uc8gWkMAQrBVq6m3DY1lIYklG1z--d-fZW2Lcy3d2ErLSWl")` }}
          />
          <div className="flex flex-col">
            <h1 className="text-white text-lg font-bold tracking-tight">Skate & Surf</h1>
            <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">Admin Portal</p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <NavLink to="/" icon="dashboard" label="Dashboard" />
          <NavLink to="/catalog" icon="skateboarding" label="Inventory" />
          <NavLink to="/orders" icon="shopping_bag" label="Orders" badge="8" />
          <NavLink to="/directory" icon="group" label="Directory" />
          <NavLink to="/analytics" icon="analytics" label="Analytics" />
        </div>
      </div>
      <div className="mt-auto p-6 border-t border-gray-800">
        <NavLink to="/settings" icon="settings" label="Settings" />
        <div className="flex items-center gap-3 px-4 py-3 mt-2">
          <div
            className="size-8 rounded-full bg-slate-700 overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDS2jNGcrqUy4GgRZZycaKpkhEMVpXAzzjYqBv2ZyrsO6iFffrza-5R27uEThx4rVXI9zvLcZgctB_lCnr6a8if53opMwVjPRwidJJWMDLIxJlwtvEDWZqB3bobHNyCD6hDyEBi_cS3yaDymnIfIzfMhnRZrQdNhO0d-xcy1KxJzofASDgZ6nT9XL9KQES8m8ldLQ2YOTHy-uPdqISzpV834p3s03dZc3TiFGS5mt__0-R3lSUF_qFkrKdf15xAsR-oK-VhA94uVqZS")` }}
          />
          <div className="flex flex-col">
            <span className="text-white text-sm font-medium">Alex Stoner</span>
            <span className="text-slate-500 text-xs">Store Manager</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

const TopNav = () => {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-800 bg-surface-dark px-6 py-3 ml-[280px]">
      <div className="flex items-center gap-4">
        <div className="size-8 text-primary">
          <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" />
          </svg>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Stoke & Style Admin</h2>
      </div>
      <div className="flex items-center gap-4">
        <button className="flex items-center justify-center p-2 rounded-full hover:bg-slate-800 text-slate-400">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9 ring-2 ring-primary/20"
          style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAQXrvLP3mI4jkJHRyzYHn6ajYYQCB9c6LW1ddfDR4xhhTpprWx0daGE8Txog7_-JsWDtLIVu1HgbjIZMJ8g5oBDVAvblHpKfwktBBLn_jHUyIihx8w8Qbh3_X0yyvMewJz5kCNFlcqsO06iUwoBQ5VMvaSG9ug9WSHG0_qV1d_UzcWLTL2O0AJsxtcSpquwrvBTXD0a61KM6SYBsFFZrCgB2cqzeTsO02lcaGhUaR6B6kC4AIkKu7cenkyAwuDYiFSVUTx8F7FYb3L")` }}
        />
      </div>
    </header>
  );
}

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-background-dark text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopNav />
        <main className="flex-1 ml-[280px] overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public Auth Routes */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          {/* Protected Dashboard Routes */}
          <Route
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/" element={<Dashboard />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/directory" element={<Directory />} />
            <Route path="*" element={<div className="p-10">Page coming soon...</div>} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
