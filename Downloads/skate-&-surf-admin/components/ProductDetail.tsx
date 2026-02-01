
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_VARIANTS } from '../constants';
import { generateProductDescription, getInventoryInsight } from '../services/geminiService';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const [description, setDescription] = useState("The Channel Islands Surfboard is built for high performance in varied conditions. Featuring a refined rocker profile and single to double concave bottom for speed and drive.");
  const [isGenerating, setIsGenerating] = useState(false);
  const [insight, setInsight] = useState<string | null>(null);

  const handleAiGenerate = async () => {
    setIsGenerating(true);
    const text = await generateProductDescription("Al Merrick Channel Islands", "Surfboards");
    setDescription(text);
    setIsGenerating(false);
  };

  useEffect(() => {
    const fetchInsight = async () => {
        const text = await getInventoryInsight(12, "high");
        setInsight(text);
    };
    fetchInsight();
  }, []);

  return (
    <div className="flex flex-col h-full bg-background-dark">
      {/* Header */}
      <header className="bg-background-dark/50 backdrop-blur-md border-b border-slate-800 sticky top-0 z-10 px-6 py-4">
        <div className="flex items-center gap-2 text-sm">
          <Link to="/catalog" className="text-slate-400 hover:text-primary transition-colors">Inventory</Link>
          <span className="text-slate-600">/</span>
          <span className="text-slate-400">Surfboards</span>
          <span className="text-slate-600">/</span>
          <span className="text-white font-medium">Edit Product</span>
        </div>
      </header>

      <main className="p-6 md:p-8 lg:px-12 max-w-7xl mx-auto flex flex-col gap-8 w-full">
        {/* Title Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Al Merrick Channel Islands</h1>
              <span className="px-2 py-0.5 rounded text-xs font-bold bg-green-500/20 text-green-400 border border-green-500/30 uppercase tracking-wider">Active</span>
            </div>
            <p className="text-slate-400 font-mono text-sm">SKU: CI-AM-2023-001</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="h-10 px-4 rounded-lg border border-slate-700 bg-surface-dark hover:bg-slate-700 text-slate-300 hover:text-white font-medium text-sm transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px]">visibility</span>
              Preview
            </button>
            <button className="h-10 px-6 rounded-lg bg-primary hover:bg-primary/90 text-white font-bold text-sm shadow-[0_0_20px_rgba(6,127,249,0.3)] transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px]">save</span>
              Save Changes
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Gallery */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-surface-dark border border-slate-800 rounded-xl p-4 flex flex-col gap-4">
              <div className="w-full aspect-[4/5] bg-background-dark rounded-lg overflow-hidden relative group">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                  style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuD-P_N4JjD6r2_JL3YkeQNCBf_q7fWWaqKJuCWqp-t2c3YYHwJhRoCb77PoKoHcY_dGmKyG4gIYO4PDXzkTa1Wb9ap18JLc6i5NFh8t4y4hRlbfahl4qeoVNWfnTrx2nhedAtSq616p9g0cGnIBL4QJq_RAWgqXPDrfKN8pxpeGXECVC63nq8mMQiz38OKv0YxptWMuzJBq4Di5bZmxUCfpS6Fm-fW5kt_Pv6tArMstEH1qe4mD1BM4jlPJfnIZvPDEKHSZ3W24jrwn")` }}
                />
                <button className="absolute top-3 right-3 p-2 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full text-white transition-colors">
                  <span className="material-symbols-outlined text-[18px]">edit</span>
                </button>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {[
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuA5KeEjvj9b89GROwBQIX972qrbJwHdshjmykqk-kCLLNNEnLYeabfqydlc-wxAK0rSfSiFH_3n0v83l51_zO2moAD5scnQPPjZS7vwbd0UNUzLnDXZPpMPWXYsuhU5iwe4Dy-bB7DeudieotXlgULp4yX7i9oqs1EZhrL_f59iaJtdj1fM7KLnLzQgGsaHejIJ2EOLpDW61T_ZDcyMsCxZlC4j1pcBHKJ_-QiMNFormervC_CWjBHkc6n26em8CSiEfq8lFuGdu6y1',
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuApdRXWtFmP-1bUUEpADDXFkQnPE2_UHX3paf1wBzN__gcEow6usN7i2VnnuZAWT_9C3EwmP_gCI3Kp6JCvoZxOZrYb0e99opg06tt9wJB3_Pl-OzKALG1ziUP3R9-CWvaAnafAAq4Qufzb7naObAV4pYe1i_QmY-KeL5hbHoS8zHvA5lE1iP37P8KA1RlcFm-mVJ-wnmuNiwg8quJV_YkpLrmpLJQVYvuoGXrDV8rhmFIoVge0LGFtzDgy9LJw4_bNtys5DHWFBIUN',
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuAZJnxoiNq1oM3WUXHt5xH0F5SKXPHWKLUeBO4UywxPLLBKlwQ1KlkHl7sG3eGbZHRXP23jBy3Mn7sB1ODyQG99F4EUVH0MmOAunQDsRZGGXO1E6zxzk17F902VGXCpAq9uKXQPd8uFC69QGpR4V-d705NzwQilhSti019B-We4wTjJmWOszsGXuO0E6lTu-4iKdzHKm2xbS9L--WQr6SckqHZ9dl4MdEknxMXlNmHrDB45Guimtysa0EBdT9R_--lgyTiPUBejHgWs'
                ].map((img, i) => (
                  <button key={i} className={`aspect-square rounded-lg border-2 overflow-hidden relative ${i === 0 ? 'border-primary' : 'border-slate-800'}`}>
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("${img}")` }} />
                  </button>
                ))}
                <button className="aspect-square rounded-lg border border-slate-800 bg-background-dark flex items-center justify-center text-slate-500 hover:text-primary transition-all">
                  <span className="material-symbols-outlined text-3xl">add_photo_alternate</span>
                </button>
              </div>
            </div>
            
            {insight && (
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                <h3 className="text-primary font-bold mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">info</span>
                  AI Inventory Insight
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{insight}</p>
              </div>
            )}
          </div>

          {/* Form */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="bg-surface-dark border border-slate-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">edit_note</span>
                  General Information
                </h2>
                <button 
                  onClick={handleAiGenerate}
                  disabled={isGenerating}
                  className="text-xs font-bold text-primary flex items-center gap-1 hover:text-white transition-colors disabled:opacity-50"
                >
                  <span className="material-symbols-outlined text-[16px]">{isGenerating ? 'sync' : 'auto_fix'}</span>
                  {isGenerating ? 'Generating...' : 'AI Enhance Desc'}
                </button>
              </div>
              
              <div className="flex flex-col gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Product Name</label>
                  <input className="w-full bg-background-dark border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none" value="Al Merrick Channel Islands Surfboard" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Brand</label>
                    <select className="w-full bg-background-dark border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary outline-none">
                      <option>Channel Islands</option>
                      <option>Lost Surfboards</option>
                      <option>Pyzel</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Category</label>
                    <select className="w-full bg-background-dark border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary outline-none">
                      <option>Surfboards</option>
                      <option>Wetsuits</option>
                      <option>Skateboards</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Description</label>
                  <textarea 
                    className="w-full bg-background-dark border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary outline-none resize-none min-h-[120px]" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>Markdown supported</span>
                    <span>{description.length}/1000 characters</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Variants */}
            <div className="bg-surface-dark border border-slate-800 rounded-xl overflow-hidden flex flex-col">
              <div className="p-6 pb-2 flex items-center justify-between">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">style</span>
                  Product Variants
                </h2>
                <button className="text-sm font-bold text-primary hover:text-white flex items-center gap-1 transition-colors">
                  <span className="material-symbols-outlined text-[18px]">add</span>
                  Add Variant
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-500 text-xs uppercase tracking-wider">
                      <th className="p-6 font-medium">Size</th>
                      <th className="p-6 font-medium">Fin Setup</th>
                      <th className="p-6 font-medium">Price</th>
                      <th className="p-6 font-medium">Stock</th>
                      <th className="p-6 font-medium text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {MOCK_VARIANTS.map((v) => (
                      <tr key={v.id} className="group hover:bg-white/5 transition-colors border-b border-slate-800/50">
                        <td className="p-6 font-medium text-white">{v.size}</td>
                        <td className="p-6 text-slate-400">{v.finSetup}</td>
                        <td className="p-6 text-slate-400">${v.price.toFixed(2)}</td>
                        <td className="p-6">
                          <div className="flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full ${v.stockCount > 5 ? 'bg-emerald-500' : v.stockCount > 0 ? 'bg-amber-500 animate-pulse' : 'bg-slate-600'}`}></span>
                            <span className={`${v.stockCount > 5 ? 'text-emerald-400' : v.stockCount > 0 ? 'text-amber-400' : 'text-slate-500'} font-medium`}>
                              {v.stockCount > 0 ? `${v.stockCount} in stock` : 'Out of stock'}
                            </span>
                          </div>
                        </td>
                        <td className="p-6 text-right">
                          <button className="text-slate-500 hover:text-white"><span className="material-symbols-outlined">edit</span></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="h-20" />
      </main>
    </div>
  );
};

export default ProductDetail;
