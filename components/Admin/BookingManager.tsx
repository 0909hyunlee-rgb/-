
import React from 'react';
import { MOCK_BOOKINGS, SERVICES } from '../../lib/data';
import { MoreHorizontal, Search, Filter } from 'lucide-react';

const BookingManager: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a] border border-gray-800 rounded-3xl overflow-hidden">
      <div className="p-8 border-b border-gray-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h3 className="text-xl font-bold">예약 신청 내역</h3>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" size={16} />
            <input 
              type="text" 
              placeholder="고객명 검색..." 
              className="bg-black border border-gray-800 rounded-xl py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-purple-500 outline-none w-64"
            />
          </div>
          <button className="p-2 bg-gray-900 rounded-xl text-gray-400 border border-gray-800">
            <Filter size={18} />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-900/50 text-gray-500 text-xs uppercase tracking-widest font-bold">
              <th className="px-8 py-4">고객 정보</th>
              <th className="px-8 py-4">신청 서비스</th>
              <th className="px-8 py-4">예약 일시</th>
              <th className="px-8 py-4">상태</th>
              <th className="px-8 py-4 text-right">관리</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {MOCK_BOOKINGS.map((booking) => {
              const service = SERVICES.find(s => s.id === booking.serviceId);
              return (
                <tr key={booking.id} className="hover:bg-gray-900/30 transition-colors">
                  <td className="px-8 py-6">
                    <p className="font-bold text-gray-200">{booking.customerName}</p>
                    <p className="text-xs text-gray-500">{booking.phone}</p>
                  </td>
                  <td className="px-8 py-6 text-sm text-gray-400">
                    {service?.name || '알 수 없는 서비스'}
                  </td>
                  <td className="px-8 py-6 text-sm text-gray-400">
                    {booking.date} {booking.time}
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                      booking.status === 'confirmed' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 
                      booking.status === 'pending' ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' : 
                      'bg-red-500/10 text-red-500 border border-red-500/20'
                    }`}>
                      {booking.status === 'confirmed' ? '확정됨' : booking.status === 'pending' ? '대기중' : '취소됨'}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="text-gray-600 hover:text-white transition-colors">
                      <MoreHorizontal size={20} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      <div className="p-6 border-t border-gray-800 flex justify-center">
        <nav className="flex items-center gap-2">
          <button className="px-3 py-1 bg-gray-900 border border-gray-800 rounded-md text-xs text-gray-500">이전</button>
          <button className="px-3 py-1 bg-purple-600 border border-purple-500 rounded-md text-xs text-white">1</button>
          <button className="px-3 py-1 bg-gray-900 border border-gray-800 rounded-md text-xs text-gray-500">2</button>
          <button className="px-3 py-1 bg-gray-900 border border-gray-800 rounded-md text-xs text-gray-500">다음</button>
        </nav>
      </div>
    </div>
  );
};

export default BookingManager;
