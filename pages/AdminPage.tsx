
import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, CalendarCheck, FileText, Settings, LogOut, ChevronRight } from 'lucide-react';
import BookingManager from '../components/Admin/BookingManager';
import ContentManager from '../components/Admin/ContentManager';
import DashboardOverview from '../components/Admin/DashboardOverview';

const AdminPage: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    { name: '대시보드', icon: LayoutDashboard, path: '/admin' },
    { name: '예약 관리', icon: CalendarCheck, path: '/admin/bookings' },
    { name: '컨텐츠 수정', icon: FileText, path: '/admin/content' },
    { name: '설정', icon: Settings, path: '/admin/settings' },
  ];

  return (
    <div className="flex min-h-screen bg-[#050505]">
      {/* Admin Sidebar */}
      <aside className="w-64 bg-[#0a0a0a] border-r border-gray-800 flex flex-col sticky top-0 h-screen">
        <div className="p-8 border-b border-gray-800">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center font-bold">JS</div>
            <span className="font-bold tracking-widest">JOY ADMIN</span>
          </div>
          <p className="text-[10px] text-gray-500 uppercase tracking-tighter">Content Management System</p>
        </div>

        <nav className="flex-grow py-8 px-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center justify-between w-full p-3 rounded-xl transition-all ${
                (location.pathname === item.path || (item.path === '/admin' && location.pathname === '/admin/'))
                  ? 'bg-purple-600/10 text-purple-400 border border-purple-600/20'
                  : 'text-gray-400 hover:bg-gray-900 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon size={20} />
                <span className="text-sm font-medium">{item.name}</span>
              </div>
              <ChevronRight size={14} className="opacity-40" />
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-800">
          <Link 
            to="/" 
            className="flex items-center gap-3 w-full p-3 rounded-xl text-gray-500 hover:text-red-400 transition-all hover:bg-red-400/5"
          >
            <LogOut size={20} />
            <span className="text-sm font-medium">관리자 로그아웃</span>
          </Link>
        </div>
      </aside>

      {/* Admin Content Area */}
      <main className="flex-grow p-8">
        <div className="max-w-6xl mx-auto">
          <header className="mb-12 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">환영합니다, 관리자님</h1>
              <p className="text-gray-500 mt-1">Joy Story의 실시간 현황을 확인하세요.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-bold">운영자</p>
                <p className="text-xs text-gray-500">Last login: 2 hours ago</p>
              </div>
              <div className="w-12 h-12 bg-gray-800 rounded-full border border-gray-700 overflow-hidden">
                <img src="https://picsum.photos/id/64/100/100" alt="Avatar" />
              </div>
            </div>
          </header>

          <div className="animate-in fade-in duration-500">
            <Routes>
              <Route path="/" element={<DashboardOverview />} />
              <Route path="/bookings" element={<BookingManager />} />
              <Route path="/content" element={<ContentManager />} />
              <Route path="/settings" element={<div className="p-12 text-center text-gray-500 border-2 border-dashed border-gray-800 rounded-3xl">설정 기능 준비 중</div>} />
            </Routes>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPage;
