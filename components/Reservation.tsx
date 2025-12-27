
import React from 'react';
import { Calendar, User, Phone, MessageSquare, ChevronRight } from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../lib/data';

const Reservation: React.FC = () => {
  return (
    <section id="reservation" className="py-24 bg-gradient-to-b from-[#111111] to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1a1a1a] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          
          {/* Info Side */}
          <div className="w-full md:w-2/5 p-8 md:p-12 bg-purple-900/10 border-b md:border-b-0 md:border-r border-gray-800 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-bold mb-6 italic">RESERVE<br />YOUR STORY</h2>
              <p className="text-gray-400 mb-12">
                모든 시술은 100% 예약제로 운영됩니다.<br />
                아래 폼을 작성해주시면 확인 후 개별 연락드립니다.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">전화문의</p>
                    <p className="font-bold">{COMPANY_INFO.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">카카오톡</p>
                    <p className="font-bold">{COMPANY_INFO.kakaoId}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-black/40 rounded-2xl border border-gray-800 hidden md:block">
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                "시술 전후 주의사항은 예약 확정 시 개별적으로 안내해 드립니다. 시술 당일 무리한 일정을 피해주세요."
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full md:w-3/5 p-8 md:p-12">
            <form 
              action="https://formspree.io/f/mnjqpgrv" 
              method="POST"
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">이름</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                    <input 
                      type="text" 
                      name="이름"
                      placeholder="성함을 입력하세요"
                      required
                      className="w-full bg-black/50 border border-gray-800 rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">연락처</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                    <input 
                      type="tel" 
                      name="연락처"
                      placeholder="010-0000-0000"
                      required
                      className="w-full bg-black/50 border border-gray-800 rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">희망 시술 선택</label>
                <select 
                  name="희망시술"
                  required
                  className="w-full bg-black/50 border border-gray-800 rounded-xl py-4 px-4 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all appearance-none text-gray-400"
                >
                  <option value="">시술을 선택해주세요</option>
                  {SERVICES.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">희망 예약 날짜</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                    <input 
                      type="date" 
                      name="예약날짜"
                      required
                      className="w-full bg-black/50 border border-gray-800 rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-gray-400"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">희망 시간대</label>
                  <select 
                    name="희망시간"
                    required
                    className="w-full bg-black/50 border border-gray-800 rounded-xl py-4 px-4 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all appearance-none text-gray-400"
                  >
                    <option value="">시간 선택</option>
                    <option value="10:00">10:00</option>
                    <option value="12:00">12:00</option>
                    <option value="14:00">14:00</option>
                    <option value="16:00">16:00</option>
                    <option value="18:00">18:00</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">문의 사항</label>
                <textarea 
                  name="문의사항"
                  rows={4}
                  placeholder="추가적으로 궁금하신 점을 작성해주세요"
                  className="w-full bg-black/50 border border-gray-800 rounded-xl py-4 px-4 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-gray-200"
                ></textarea>
              </div>

              <input type="hidden" name="_subject" value="조이스토리 새로운 예약 문의" />

              <button 
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 group transition-all"
              >
                예약 문의 전송
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
