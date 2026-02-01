
import React from 'react';
import { MOCK_ORDERS, MOCK_ACTIVITY } from '../constants';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 lg:p-10 flex flex-col gap-8 max-w-[1400px] mx-auto">
      {/* Welcome Hero */}
      <div className="relative rounded-2xl overflow-hidden min-h-[220px] bg-surface-dark border border-slate-800">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: `linear-gradient(90deg, rgba(15, 25, 35, 0.9) 0%, rgba(15, 25, 35, 0.4) 60%, rgba(15, 25, 35, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuA6kIgCzYTyBIJdJZxrQ4v8FaxftRjbdUJHVM-MYk-Sp6WwhJmmWZSFfp_9-gt910DGYzWI9DcfnsBdgqiP5hp8yMGJlN86Ke0wDbJCegfftOWUOwfepZopkabM7kFR1VcImCN2a-Nhz_51w8mMyPfKiYOr-6ah83hCsHO_GhOyguMb7nXBmpKnFqpgQUW6pqG4wjhkWuHHB2JnAFKQSMae0qyauyJVqa5raBACabzv0VDuVPCdeV0Vec_xBqbhxr5aB4aqSLXAQCWA")` 
          }}
        />
        <div className="relative z-10 p-8 flex flex-col justify-end h-full min-h-[220px]">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-1 rounded bg-electric-teal/20 text-electric-teal text-xs font-bold uppercase tracking-wider border border-electric-teal/30">Shop Open</span>
            <span className="text-slate-300 text-sm font-medium"> • Today, Oct 24</span>
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight mb-2">Morning, Alex.</h2>
          <p className="text-slate-300 text-lg max-w-xl">Stock levels are looking good. You have 8 pending orders to review before noon.</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Inventory', value: '1,245 items', change: '5.2%', icon: 'inventory_2', color: 'text-primary', bg: 'bg-primary/10' },
          { label: 'Monthly Sales', value: '$45,230', change: '12.5%', icon: 'attach_money', color: 'text-electric-teal', bg: 'bg-electric-teal/10' },
          { label: 'Low Stock Alerts', value: '12 items', status: 'Action', icon: 'warning', color: 'text-vibrant-orange', bg: 'bg-vibrant-orange/10' },
          { label: 'Pending Orders', value: '8 orders', change: '1.5%', icon: 'local_shipping', color: 'text-purple-400', bg: 'bg-purple-500/10' },
        ].map((stat, idx) => (
          <div key={idx} className="bg-surface-dark border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-2 rounded-lg ${stat.bg} ${stat.color}`}>
                <span className="material-symbols-outlined">{stat.icon}</span>
              </div>
              <span className={`flex items-center gap-1 text-sm font-medium px-2 py-1 rounded ${stat.color} ${stat.bg}`}>
                <span className="material-symbols-outlined text-[16px]">{stat.status ? 'priority_high' : 'trending_up'}</span>
                {stat.change || stat.status}
              </span>
            </div>
            <p className="text-slate-400 text-sm font-medium mb-1">{stat.label}</p>
            <h3 className="text-white text-2xl font-bold">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-white text-xl font-bold tracking-tight">Quick Actions</h2>
            <button className="text-primary text-sm font-medium hover:text-primary/80 transition-colors">View All</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Add Product', icon: 'add_circle', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8h65TBmc1LakiOjhbrK5L8qxtXW9GKNdwK0On1E_66vXqGADCWOvButAYoivoa5Y733PVs_nra0-GkghMUif6ZN_q3bOOugAdk6vfgI-_EjPOyp3-PNB-mh2kEF1xH3e_EbmXBnVyk_y6HE7nUunYOcYMgcIHI1bf5tCsdy5P5sGvoY6PFLxag1yugoPn14-8g4JfLMtvqUosuN0ZukLIBxC1LNsLouyTfEsihxemliHwTz9Lqr_CxisMfT01VmFxGTbEdVeNzj4z', to: '/add-product' },
              { label: 'Scan SKU', icon: 'qr_code_scanner', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZYaPPwzXwxAl9T8etVKLId9OyiGXSQTjfn4eBCvey-FnJQ8whcsQ_1b4wsBhoF4eK_5lN4nMZWViZauFcWlhZDzytBR3tPXut2wfKHqlvkWEnVU046Y2EgoGMz_-xBWPIBgSrwOTxXZMhWG3jyDPJxz3QmVK-N-eCvlJw3YsbyIVGVAkhzfbTlfNS3WnMceFWbggJGw7sSQuF6wRQ1b2HJeqMaLXBS1vx4-GtBPSQTXb4Q833dxzkVXGWThxlMrXONwp_4itTdRvl' },
              { label: 'Create Order', icon: 'post_add', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMEGHjiXdW-NCfT9ssPkkpsY7E-bBAHZNlU3aAFO5mPn08xt9C1_QPm1Cx90sSQXmGVZkDbzOAH6amW99uHjSnt_sDuaAHChgPz9UXcnhNEt76T1_qpgTxUzxRdmP3LTbWGjoAt8ZhatbYxf-P6fytbr8o3WEngwYNSaamvhlpgdMdo7eO_TfqfGnPXmC2kKpEhlH19bWQ7iVZdu8T0pVVbT3DuUAJrTm_NEfT_Fhu-lVlb6UjAF4IOMWhQSZ5UYKWqNGKRUbZ-cqb' },
              { label: 'Stock Check', icon: 'inventory', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvPB04QXtirUvz7lGA6uGzlFTYIGFlYbmmkdiLa2Lkn6Huk6EIPvszGdiBsf-QJP9lROF-xH1zdNQ4KCZxKt7A80yecULoFxeif8-_q_vTTfV-3wggQhn4Riu1GlSvgYlUzXxilz7xUY5Ywgv5908InFRDYF8cC1xO0cm5HOZWAdYGghjxWEqDMm4iVreKp0XBNMhePjnojPeh0t_OAyUea7WBPNFazygo6wEqucx7asIeHf5PiersRxsLTU6KdmJiDccG6qiVCmXu' },
            ].map((action, idx) => (
              <Link key={idx} to={action.to || '#'} className="group relative flex flex-col justify-end h-40 p-4 rounded-xl overflow-hidden hover:ring-2 hover:ring-primary/50 transition-all">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%), url("${action.img}")` }}
                />
                <div className="relative z-10 flex flex-col gap-1">
                  <div className="bg-white/20 w-fit p-1.5 rounded-lg backdrop-blur-sm mb-1 group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[20px] text-white">{action.icon}</span>
                  </div>
                  <span className="text-white font-bold leading-tight">{action.label}</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="bg-surface-dark border border-slate-800 rounded-xl overflow-hidden">
            <div className="p-4 border-b border-slate-800 flex justify-between items-center">
              <h3 className="text-white font-bold">Recent Orders</h3>
              <span className="text-xs text-slate-400">Last 24 Hours</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-slate-400">
                <thead className="text-xs text-slate-300 uppercase bg-surface-darker/50">
                  <tr>
                    <th className="px-6 py-3">Order ID</th>
                    <th className="px-6 py-3">Customer</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {MOCK_ORDERS.map((order) => (
                    <tr key={order.id} className="bg-surface-dark hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 font-medium text-white">{order.id}</td>
                      <td className="px-6 py-4">{order.customer}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${
                          order.status === 'PENDING' ? 'bg-yellow-500/10 text-yellow-500' :
                          order.status === 'COMPLETED' ? 'bg-electric-teal/10 text-electric-teal' :
                          'bg-blue-500/10 text-blue-400'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">{order.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-white text-xl font-bold tracking-tight">Activity Feed</h2>
          <div className="bg-surface-dark border border-slate-800 rounded-xl overflow-hidden flex flex-col">
            <div className="flex flex-col flex-1">
              {MOCK_ACTIVITY.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 border-b border-slate-800 hover:bg-surface-darker/30 transition-colors">
                  <div className="flex-shrink-0 relative">
                    {item.image ? (
                      <div className="size-12 rounded-lg bg-cover bg-center border border-slate-700" style={{ backgroundImage: `url("${item.image}")` }} />
                    ) : (
                      <div className="size-12 rounded-lg bg-surface-darker flex items-center justify-center border border-slate-700">
                        <span className="text-white font-bold text-lg">{item.title.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                    )}
                    <div className={`absolute -bottom-1 -right-1 rounded-full p-0.5 border-2 border-surface-dark ${
                      item.type === 'add' ? 'bg-electric-teal' :
                      item.type === 'edit' ? 'bg-primary' :
                      item.type === 'person' ? 'bg-vibrant-orange' : 'bg-red-500'
                    }`}>
                      <span className={`material-symbols-outlined text-[10px] ${item.type === 'add' ? 'text-black' : 'text-white'} font-bold block`}>
                        {item.type === 'add' ? 'add' : item.type === 'edit' ? 'edit' : item.type === 'person' ? 'person' : 'priority_high'}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 overflow-hidden">
                    <p className="text-white text-sm font-medium leading-tight truncate">{item.title}</p>
                    <p className="text-slate-400 text-xs truncate">{item.description}</p>
                    <span className="text-slate-500 text-[10px] mt-1">{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="p-4 bg-surface-darker/30 text-center text-sm text-primary hover:text-white transition-colors font-medium border-t border-slate-800">
              View All Activity
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
