"use client"
import { useState } from "react";
import TableShow from "./TableShow";

const InvoiceDetails = () => (
  <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md animate-fade-in">
    <h2 className="text-2xl font-bold mb-4">Invoice History</h2>
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3">Invoice #</th>
            <th className="p-3">Customer</th>
            <th className="p-3">Amount</th>
            <th className="p-3">Due Date</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
        
        </tbody>
      </table>
    </div>
  </div>
);

export default function Page() {
     const [activeView, setActiveView] = useState('booking');
    return (
        <>
            <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 mt-[4rem]">

                {/* Sidebar Navigation */}
                <aside className="bg-gray-800 text-white w-full md:w-64 p-4 flex-shrink-0">
                    <nav className="flex md:flex-col gap-4">
                        <button
                            onClick={() => setActiveView('booking')}
                            className={`w-full text-left font-semibold py-3 px-4 rounded-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-indigo-400 ${activeView === 'booking'
                                ? 'bg-indigo-600 text-white shadow-lg'
                                : 'bg-gray-700 hover:bg-gray-600'
                                }`}
                        >
                            Booking
                        </button>
                        <button
                            onClick={() => setActiveView('invoice')}
                            className={`w-full text-left font-semibold py-3 px-4 rounded-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-indigo-400 ${activeView === 'invoice'
                                ? 'bg-indigo-600 text-white shadow-lg'
                                : 'bg-gray-700 hover:bg-gray-600'
                                }`}
                        >
                            Invoice
                        </button>
                    </nav>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 flex flex-col">
                    <div className="p-4 bg-gray-700 text-white font-bold capitalize shadow-inner">
                        Recent {activeView}s
                    </div>
                    <div className="flex-1 p-4 md:p-6 lg:p-8">
                        {/* Conditional Rendering based on activeView state */}
                        {activeView === 'booking' && <TableShow />}
                        {activeView === 'invoice' && <InvoiceDetails />}
                    </div>
                </main>
            </div>
        </>
    )
}