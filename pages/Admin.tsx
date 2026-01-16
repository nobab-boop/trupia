import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import { Lead, LeadStatus } from '../types';
import { Search, Filter, CheckCircle, XCircle, Clock, AlertCircle, Trash2 } from 'lucide-react';

const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filter, setFilter] = useState<LeadStatus | 'All'>('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Load leads from local storage
  useEffect(() => {
    const savedLeads = JSON.parse(localStorage.getItem('leads') || '[]');
    setLeads(savedLeads);
    
    // Check if previously authenticated session exists (optional/simple version)
    const session = sessionStorage.getItem('adminSession');
    if (session === 'true') setIsAuthenticated(true);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
      sessionStorage.setItem('adminSession', 'true');
    } else {
      alert('Incorrect password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('adminSession');
  };

  const updateStatus = (id: number, newStatus: LeadStatus) => {
    const updatedLeads = leads.map(lead => 
      lead.id === id ? { ...lead, status: newStatus } : lead
    );
    setLeads(updatedLeads);
    localStorage.setItem('leads', JSON.stringify(updatedLeads));
  };

  const deleteLead = (id: number) => {
    if(window.confirm('Are you sure you want to delete this lead?')) {
        const updatedLeads = leads.filter(lead => lead.id !== id);
        setLeads(updatedLeads);
        localStorage.setItem('leads', JSON.stringify(updatedLeads));
    }
  };

  const filteredLeads = leads.filter(lead => {
    const matchesFilter = filter === 'All' || lead.status === filter;
    const matchesSearch = 
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.interest.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusColor = (status: LeadStatus) => {
    switch(status) {
      case 'New': return 'bg-blue-100 text-blue-800';
      case 'Active': return 'bg-yellow-100 text-yellow-800';
      case 'Closed Won': return 'bg-green-100 text-green-800';
      case 'Lost': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (!isAuthenticated) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center bg-slate-50">
          <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 max-w-md w-full">
            <h1 className="text-2xl font-bold text-slate-900 mb-6 text-center">Admin Access</h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Password</label>
                <input 
                  type="password" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                />
              </div>
              <Button fullWidth type="submit">Login</Button>
            </form>
            <p className="mt-4 text-xs text-center text-gray-400">Hint: admin123</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-slate-50 min-h-screen py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900">Lead Management</h1>
              <p className="text-slate-500 font-medium">Manage and track your incoming inquiries.</p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-4">
               <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
                  <span className="text-sm font-bold text-slate-500">Total Leads:</span>
                  <span className="ml-2 text-xl font-extrabold text-brand">{leads.length}</span>
               </div>
               <button onClick={handleLogout} className="text-sm font-bold text-slate-500 hover:text-red-600 transition-colors">
                 Logout
               </button>
            </div>
          </div>

          {/* Controls */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search by name, email, or interest..." 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
               <Filter size={20} className="text-gray-400 mr-2" />
               {(['All', 'New', 'Active', 'Closed Won', 'Lost'] as const).map((status) => (
                 <button
                   key={status}
                   onClick={() => setFilter(status)}
                   className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${
                     filter === status 
                       ? 'bg-brand text-white' 
                       : 'bg-gray-100 text-slate-600 hover:bg-gray-200'
                   }`}
                 >
                   {status}
                 </button>
               ))}
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
             <div className="overflow-x-auto">
               <table className="w-full text-left border-collapse">
                 <thead className="bg-gray-50 border-b border-gray-200">
                   <tr>
                     <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                     <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Contact Name</th>
                     <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Interest</th>
                     <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Date</th>
                     <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Message</th>
                     <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-gray-100">
                   {filteredLeads.length > 0 ? (
                     filteredLeads.map((lead) => (
                       <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                         <td className="px-6 py-4 whitespace-nowrap">
                           <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(lead.status)}`}>
                             {lead.status}
                           </span>
                         </td>
                         <td className="px-6 py-4">
                           <div className="text-sm font-bold text-slate-900">{lead.name}</div>
                           <div className="text-sm text-gray-500">{lead.email}</div>
                           <div className="text-sm text-gray-500">{lead.phone}</div>
                         </td>
                         <td className="px-6 py-4">
                            <div className="text-sm font-medium text-slate-700">{lead.interest}</div>
                         </td>
                         <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{new Date(lead.date).toLocaleDateString()}</div>
                         </td>
                         <td className="px-6 py-4">
                           <div className="text-sm text-gray-600 max-w-xs truncate" title={lead.message}>
                             {lead.message}
                           </div>
                         </td>
                         <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="flex items-center justify-end gap-2">
                               {lead.status !== 'Closed Won' && (
                                 <button onClick={() => updateStatus(lead.id, 'Closed Won')} title="Mark Won" className="text-green-600 hover:text-green-800 p-1">
                                   <CheckCircle size={18} />
                                 </button>
                               )}
                               {lead.status !== 'Lost' && (
                                 <button onClick={() => updateStatus(lead.id, 'Lost')} title="Mark Lost" className="text-red-600 hover:text-red-800 p-1">
                                   <XCircle size={18} />
                                 </button>
                               )}
                               {lead.status !== 'Active' && (
                                  <button onClick={() => updateStatus(lead.id, 'Active')} title="Mark Active" className="text-yellow-600 hover:text-yellow-800 p-1">
                                    <Clock size={18} />
                                  </button>
                               )}
                               <button onClick={() => deleteLead(lead.id)} title="Delete Lead" className="text-gray-400 hover:text-red-600 p-1 ml-2">
                                  <Trash2 size={18} />
                               </button>
                            </div>
                         </td>
                       </tr>
                     ))
                   ) : (
                     <tr>
                       <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                         <AlertCircle className="mx-auto h-10 w-10 text-gray-300 mb-3" />
                         <p className="font-medium">No leads found matching your criteria.</p>
                       </td>
                     </tr>
                   )}
                 </tbody>
               </table>
             </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default Admin;