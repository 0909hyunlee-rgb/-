
import React from 'react';
import { Users, Calendar, TrendingUp, DollarSign } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '월', bookings: 4 },
  { name: '화', bookings: 7 },
  { name: '수', bookings: 5 },
  { name: '목', bookings: 8 },
  { name: '금', bookings: 12 },
  { name: '토', bookings: 15 },
  { name: '일', bookings: 2 },
];

const DashboardOverview: React.FC = () => {
  const stats = [
    { name: '총 예약건수', value: '1,284', icon: Calendar, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { name: '이번달 방문객', value: '42', icon: Users, color: 'text-purple-500', bg: 'bg-purple-500/10' },
    { name: '매출 성장률', value: '+12.5%', icon: TrendingUp, color: 'text-green-500', bg: 'bg-green-500/10' },
    { name: '예상 수익', value: '₩12,450k', icon: DollarSign, color: 'text-amber-500', bg: 'bg-amber-500/10' },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-[#0a0a0a] border border-gray-800 p-6 rounded-3xl shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <span className="text-xs font-bold text-green-500">+4.5%</span>
            </div>
            <p className="text-gray-500 text-sm mb-1">{stat.name}</p>
            <p className="text-3xl font-black">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="bg-[#0a0a0a] border border-gray-800 p-8 rounded-3xl">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-bold">주간 예약 추이</h3>
          <select className="bg-black border border-gray-800 rounded-lg text-xs px-3 py-2 outline-none">
            <option>이번 주</option>
            <option>지난 주</option>
          </select>
        </div>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1a1a1a" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#4b5563', fontSize: 12}} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#4b5563', fontSize: 12}} />
              <Tooltip 
                cursor={{fill: '#1a1a1a'}}
                contentStyle={{backgroundColor: '#0a0a0a', border: '1px solid #333', borderRadius: '12px'}}
              />
              <Bar dataKey="bookings" fill="#9333ea" radius={[6, 6, 0, 0]} barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
