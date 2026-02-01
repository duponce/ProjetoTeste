
import React, { useState } from 'react';
import { MOCK_PRODUCTS } from '../constants';
import { Link } from 'react-router-dom';

const Catalog: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All Products');

  const filters = ['All Products', 'Skate', 'Surf', 'Apparel', 'Accessories'];

  return (
    <div className="p-6 lg:p-10 flex flex-col gap-8 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-black leading-tight tracking-tight">Product Catalog</h1>
          <p className="text-slate-400 text-base font-normal">Manage your skate and surf inventory</p>
        </div>
        <Link to="/add-product" className="flex shrink-0 items-center justify-center gap-2 rounded-lg h-10 px-6 bg-primary hover:bg-blue-600 text-white text-sm font-bold transition-colors shadow-lg shadow-blue-500/20">
          <span className="material-symbols-outlined text-[20px]">add</span>
          <span>Add New Product</span>
        </Link>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col lg:flex-row gap-4 items-center">
        <label className="flex w-full lg:flex-1 h-12">
          <div className="flex w-full items-stretch rounded-xl h-full bg-surface-dark border border-slate-700 shadow-sm focus-within:ring-2 focus-within:ring-primary focus-within:border-transparent transition-all overflow-hidden">
            <div className="text-slate-400 flex items-center justify-center pl-4 pr-2">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input 
              className="flex w-full min-w-0 flex-1 bg-transparent text-white focus:outline-0 border-none h-full placeholder:text-slate-500 px-2 text-base font-medium" 
              placeholder="Search Gear..." 
            />
          </div>
        </label>
        
        <div className="flex items-center gap-3 overflow-x-auto pb-1 lg:pb-0 scrollbar-hide">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`flex h-10 shrink-0 items-center justify-center rounded-full px-5 transition-all ${
                activeFilter === filter 
                  ? 'bg-white text-slate-900 font-bold' 
                  : 'bg-surface-dark border border-slate-700 text-slate-400 hover:border-primary/50'
              }`}
            >
              <p className="text-sm font-medium">{filter}</p>
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <button className="flex items-center justify-center h-12 w-12 rounded-xl bg-surface-dark border border-slate-700 text-slate-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">filter_list</span>
          </button>
          <button className="flex items-center justify-center h-12 w-12 rounded-xl bg-surface-dark border border-slate-700 text-slate-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">grid_view</span>
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {MOCK_PRODUCTS.map((product) => (
          <Link 
            key={product.id} 
            to={`/product/${product.id}`}
            className="group flex flex-col bg-surface-dark rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/10 border border-slate-700 transition-all duration-300"
          >
            <div className="relative h-64 overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                style={{ backgroundImage: `url("${product.image}")` }} 
              />
              <div className="absolute top-3 right-3">
                <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold border backdrop-blur-md ${
                  product.stockStatus === 'In Stock' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' :
                  product.stockStatus === 'Low Stock' ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' :
                  'bg-rose-500/20 text-rose-300 border-rose-500/30'
                }`}>
                  {product.stockStatus}
                </span>
              </div>
            </div>
            <div className="p-5 flex flex-col gap-3 flex-1">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold tracking-widest text-primary uppercase">{product.brand}</span>
                <span className="text-xs font-mono text-slate-500">SKU: {product.sku}</span>
              </div>
              <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">{product.name}</h3>
              <div className="mt-auto pt-3 border-t border-slate-700/50 flex items-center justify-between">
                <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
                <button className="text-slate-500 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
