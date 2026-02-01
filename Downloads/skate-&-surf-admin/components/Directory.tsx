
import React from 'react';
import { MOCK_CATEGORIES, MOCK_BRANDS } from '../constants';

const Directory: React.FC = () => {
  return (
    <div className="p-6 lg:p-10 flex flex-col gap-6 max-w-[1200px] mx-auto">
      <div className="flex flex-col gap-3 pb-4 border-b border-slate-800">
        <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">Directory Management</h1>
        <p className="text-slate-400 text-lg">Manage product categories and brand partners in one place.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Categories */}
        <section className="lg:col-span-5 flex flex-col gap-4">
          <div className="flex items-center justify-between py-2">
            <h2 className="text-white text-2xl font-bold leading-tight">Categories</h2>
            <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded-full">{MOCK_CATEGORIES.length} Total</span>
          </div>
          
          <div className="flex flex-col gap-3">
            {MOCK_CATEGORIES.map((cat) => (
              <div key={cat.id} className="group flex items-center justify-between gap-4 rounded-xl border border-slate-800 bg-surface-dark p-4 hover:border-primary/50 transition-all cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>{cat.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-bold leading-tight">{cat.name}</h3>
                    <p className="text-slate-500 text-sm">{cat.description}</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-slate-500 group-hover:text-primary">chevron_right</span>
              </div>
            ))}
          </div>

          <button className="mt-2 flex w-full items-center justify-center rounded-lg h-12 px-4 bg-primary hover:bg-primary/90 transition-colors text-white gap-2 text-base font-bold">
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>add</span>
            <span>Add New Category</span>
          </button>
        </section>

        {/* Brands */}
        <section className="lg:col-span-7 flex flex-col gap-4">
          <div className="flex items-center justify-between py-2">
            <h2 className="text-white text-2xl font-bold leading-tight">Brand Directory</h2>
            <button className="text-primary text-sm font-bold hover:underline">View All</button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {MOCK_BRANDS.map((brand) => (
              <div key={brand.id} className="flex flex-col gap-3 rounded-xl border border-slate-800 bg-surface-dark p-6 items-center text-center hover:shadow-lg transition-all hover:shadow-primary/10">
                <div className="bg-white p-4 rounded-lg w-full h-32 flex items-center justify-center mb-2 overflow-hidden">
                  <img 
                    className="max-w-[80%] max-h-[80%] object-contain" 
                    src={brand.logo} 
                    alt={brand.name}
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <h3 className="text-white text-xl font-bold">{brand.name}</h3>
                  <p className="text-slate-500 text-sm">{brand.productCount} Products</p>
                </div>
                <div className="w-full h-px bg-slate-800 my-2" />
                <button className="text-primary text-sm font-bold hover:text-white">Manage Catalog</button>
              </div>
            ))}
          </div>

          <button className="mt-2 flex w-full items-center justify-center rounded-lg h-12 px-4 bg-surface-dark border border-slate-800 text-white hover:bg-slate-700 transition-colors gap-2 text-base font-bold">
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>settings</span>
            <span>Manage Brands</span>
          </button>
        </section>
      </div>
    </div>
  );
};

export default Directory;
