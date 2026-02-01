
import React from 'react';
import { Link } from 'react-router-dom';

const AddProduct: React.FC = () => {
  return (
    <div className="p-6 lg:p-10 max-w-[960px] mx-auto flex flex-col gap-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="flex flex-col gap-2">
          <Link to="/catalog" className="flex items-center gap-2 text-primary mb-1 hover:underline">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            <span className="text-sm font-bold uppercase tracking-wider">Back to Inventory</span>
          </Link>
          <h1 className="text-white text-4xl font-black leading-tight tracking-tight">Add New Gear</h1>
          <p className="text-slate-400 text-base">Create a new product listing in your catalog.</p>
        </div>
        
        <div className="w-full md:w-1/3 flex flex-col gap-2">
          <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-slate-500 px-1">
            <span className="text-primary">01 Info</span>
            <span>02 Media</span>
            <span>03 Variants</span>
          </div>
          <div className="relative h-4 w-full bg-surface-dark rounded-full border border-slate-700 overflow-hidden shadow-inner">
            <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-[#4caeff] rounded-full" style={{ width: '35%' }} />
          </div>
        </div>
      </div>

      <form className="flex flex-col gap-8">
        {/* Basic Info */}
        <div className="bg-surface-dark border border-slate-800 rounded-xl p-6 md:p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
            <span className="flex items-center justify-center size-8 rounded-full bg-primary text-white font-bold text-sm">1</span>
            <h3 className="text-xl font-bold text-white">Basic Information</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="flex flex-col gap-2">
                <span className="text-white text-sm font-bold">Product Name</span>
                <input className="w-full rounded-lg bg-background-dark border border-slate-700 text-white p-4 focus:ring-2 focus:ring-primary outline-none" placeholder="e.g. Santa Cruz 'Screaming Hand' Deck" />
              </label>
            </div>
            <div>
              <label className="flex flex-col gap-2">
                <span className="text-white text-sm font-bold">SKU / ID</span>
                <input className="w-full rounded-lg bg-background-dark border border-slate-700 text-white p-4 focus:ring-2 focus:ring-primary outline-none" placeholder="SKU-00000" />
              </label>
            </div>
            <div>
              <label className="flex flex-col gap-2">
                <span className="text-white text-sm font-bold">Brand</span>
                <input className="w-full rounded-lg bg-background-dark border border-slate-700 text-white p-4 focus:ring-2 focus:ring-primary outline-none" placeholder="e.g. Volcom" />
              </label>
            </div>
            <div>
              <label className="flex flex-col gap-2">
                <span className="text-white text-sm font-bold">Category</span>
                <select className="w-full rounded-lg bg-background-dark border border-slate-700 text-white p-4 h-[58px] focus:ring-2 focus:ring-primary outline-none">
                  <option>Decks</option>
                  <option>Trucks</option>
                  <option>Wheels</option>
                </select>
              </label>
            </div>
            <div>
              <label className="flex flex-col gap-2">
                <span className="text-white text-sm font-bold">Base Price ($)</span>
                <input className="w-full rounded-lg bg-background-dark border border-slate-700 text-white p-4 focus:ring-2 focus:ring-primary outline-none" placeholder="0.00" type="number" />
              </label>
            </div>
            <div className="md:col-span-2">
              <label className="flex flex-col gap-2">
                <span className="text-white text-sm font-bold">Description</span>
                <textarea className="w-full rounded-lg bg-background-dark border border-slate-700 text-white p-4 h-32 focus:ring-2 focus:ring-primary outline-none resize-none" placeholder="Describe the product details..." />
              </label>
            </div>
          </div>
        </div>

        {/* Media */}
        <div className="bg-surface-dark border border-slate-800 rounded-xl p-6 md:p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
            <span className="flex items-center justify-center size-8 rounded-full bg-surface-dark border border-slate-500 text-slate-400 font-bold text-sm">2</span>
            <h3 className="text-xl font-bold text-white">Media</h3>
          </div>
          <div className="w-full h-64 border-2 border-dashed border-slate-700 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:bg-white/5 transition-all group">
            <div className="bg-primary/10 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary text-4xl">cloud_upload</span>
            </div>
            <p className="text-white font-bold text-lg mb-1">Click or drag photos here</p>
            <p className="text-slate-500 text-sm">Supports JPG, PNG, WEBP (Max 5MB)</p>
          </div>
        </div>

        <div className="flex items-center justify-end gap-4 mt-4 border-t border-slate-800 pt-8">
          <Link to="/catalog" className="px-6 py-3 rounded-lg text-white font-bold text-sm hover:bg-white/5 transition-colors">
            Cancel
          </Link>
          <button type="button" className="px-8 py-3 rounded-lg bg-primary hover:bg-blue-600 text-white font-bold text-sm shadow-lg shadow-primary/25 transition-all flex items-center gap-2">
            <span>Continue to Media</span>
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
