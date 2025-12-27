
import React from 'react';
import { Instagram, MessageCircle, MapPin, Clock, Phone } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { COMPANY_INFO } from '../lib/data';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black py-16 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold tracking-widest mb-6">JOY STORY</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              인위적이지 않은 자연스러움을 추구하는<br />반영구 메이크업 전문 브랜드입니다.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-900 rounded-full text-gray-400 hover:text-purple-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-900 rounded-full text-gray-400 hover:text-purple-500 transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-purple-500 mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="hover:text-white transition-colors cursor-pointer">소개</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="hover:text-white transition-colors cursor-pointer">시술 프로그램</a></li>
              <li><a href="#gallery" onClick={(e) => scrollToSection(e, '#gallery')} className="hover:text-white transition-colors cursor-pointer">갤러리</a></li>
              <li><a href="#reservation" onClick={(e) => scrollToSection(e, '#reservation')} className="hover:text-white transition-colors cursor-pointer">예약하기</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-widest text-purple-500 mb-6">Information</h4>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <MapPin className="text-gray-600 shrink-0" size={18} />
                <p className="text-sm text-gray-400">{COMPANY_INFO.address}</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-gray-600 shrink-0" size={18} />
                <p className="text-sm text-gray-400">{COMPANY_INFO.phone}</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="text-gray-600 shrink-0" size={18} />
                <p className="text-sm text-gray-400">{COMPANY_INFO.businessHours}</p>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle className="text-gray-600 shrink-0" size={18} />
                <p className="text-sm text-gray-400">카톡: {COMPANY_INFO.kakaoId}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-600 uppercase tracking-widest">
          <p>© 2024 JOY STORY SEMI-PERMANENT MAKEUP. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
            <Link to="/admin" className="hover:text-purple-400 font-bold transition-colors">Admin Access</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
