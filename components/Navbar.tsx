
import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, MessageCircle } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    
    // 현재 페이지가 메인 페이지가 아니면 메인으로 이동 후 스크롤
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
    setIsOpen(false);
  };

  const navLinks = [
    { name: '소개', href: '#about' },
    { name: '프로그램', href: '#services' },
    { name: '갤러리', href: '#gallery' },
    { name: '예약하기', href: '#reservation' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <span className="text-2xl font-bold tracking-widest text-white">JOY STORY</span>
            <div className="h-4 w-px bg-purple-500 hidden sm:block"></div>
            <span className="text-xs text-gray-400 hidden sm:block tracking-tighter uppercase font-light">Permanent Makeup</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors uppercase tracking-widest cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 border-l border-gray-800 pl-8">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl absolute top-full left-0 w-full border-t border-gray-900 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-4 pt-4 pb-12 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block text-xl font-light text-gray-200 hover:text-purple-500 transition-colors py-2 border-b border-gray-800"
              >
                {link.name}
              </a>
            ))}
            <div className="flex space-x-6 pt-4">
              <Instagram className="text-purple-500" />
              <MessageCircle className="text-purple-500" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
