
import React from 'react';
import { Edit2, Image as ImageIcon, Plus } from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../../lib/data';

const ContentManager: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Basic Info Editor */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold">기본 정보 설정</h3>
          <button className="px-4 py-2 bg-purple-600 rounded-xl text-sm font-bold">저장하기</button>
        </div>
        <div className="bg-[#0a0a0a] border border-gray-800 rounded-3xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">업체명</label>
            <input type="text" defaultValue={COMPANY_INFO.name} className="w-full bg-black border border-gray-800 rounded-xl p-4 focus:ring-1 focus:ring-purple-500 outline-none" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">메인 카피</label>
            <input type="text" defaultValue={COMPANY_INFO.tagline} className="w-full bg-black border border-gray-800 rounded-xl p-4 focus:ring-1 focus:ring-purple-500 outline-none" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">전화번호</label>
            <input type="text" defaultValue={COMPANY_INFO.phone} className="w-full bg-black border border-gray-800 rounded-xl p-4 focus:ring-1 focus:ring-purple-500 outline-none" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">인스타그램</label>
            <input type="text" defaultValue={COMPANY_INFO.instagram} className="w-full bg-black border border-gray-800 rounded-xl p-4 focus:ring-1 focus:ring-purple-500 outline-none" />
          </div>
        </div>
      </section>

      {/* Services Editor */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold">시술 프로그램 관리</h3>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 border border-gray-800 rounded-xl text-sm font-bold">
            <Plus size={16} /> 프로그램 추가
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-[#0a0a0a] border border-gray-800 rounded-3xl p-6 flex items-start gap-6">
              <div className="w-24 h-24 rounded-2xl bg-gray-900 border border-gray-800 overflow-hidden relative group shrink-0">
                <img src={service.imageUrl} alt={service.name} className="w-full h-full object-cover" />
                <button className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ImageIcon size={20} />
                </button>
              </div>
              <div className="flex-grow">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-gray-200">{service.name}</h4>
                    <p className="text-purple-400 text-sm font-bold">{service.price}</p>
                  </div>
                  <button className="text-gray-600 hover:text-purple-400 transition-colors">
                    <Edit2 size={18} />
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2 line-clamp-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContentManager;
