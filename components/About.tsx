
import React from 'react';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-purple-500/20 rounded-2xl blur-2xl group-hover:bg-purple-500/30 transition-all"></div>
            <img 
              src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=2670" 
              alt="Professional Artist" 
              className="relative rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          
          <div>
            <span className="text-purple-500 font-bold tracking-widest uppercase text-sm">Professionalism</span>
            <h2 className="text-4xl font-bold mt-4 mb-8">차별화된 기술력으로<br /><span className="text-purple-500">당신만의 고유한 미</span>를 찾습니다.</h2>
            
            <p className="text-gray-400 leading-relaxed mb-8">
              조이스토리는 단순한 반영구 시술이 아닌, 개인의 얼굴 골격, 피부 톤, 눈썹 결을 면밀히 분석하여 가장 조화롭고 자연스러운 아름다움을 선사합니다. 1:1 맞춤 상담부터 철저한 위생 관리까지 프리미엄 서비스를 경험하세요.
            </p>

            <ul className="space-y-4">
              {[
                "1회용 니들 사용 및 철저한 멸균 시스템",
                "식약처 인증 안전한 천연 색소 사용",
                "다년간의 노하우를 가진 전문 아티스트",
                "자연스러운 결과물과 높은 유지력"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="text-purple-500 shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
