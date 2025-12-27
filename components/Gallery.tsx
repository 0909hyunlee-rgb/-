
import React, { useState } from 'react';
import { GALLERY } from '../lib/data';

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('전체');
  const categories = ['전체', '눈썹', '입술', '아이라인'];
  
  const filteredGallery = activeCategory === '전체' 
    ? GALLERY 
    : GALLERY.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <h2 className="text-4xl font-bold mb-4">시술 갤러리</h2>
            <p className="text-gray-400">조이스토리의 정교한 작업물을 전/후 사진으로 직접 비교해 보세요.</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat ? 'bg-purple-600 text-white' : 'bg-[#1a1a1a] text-gray-400 hover:bg-gray-800'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredGallery.map((item) => (
            <div key={item.id} className="bg-[#111111] rounded-3xl p-6 border border-gray-900 shadow-xl overflow-hidden group">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-[10px] uppercase font-bold text-purple-400">
                  {item.category}
                </span>
                <span className="text-[10px] text-gray-600 tracking-widest uppercase">Result Comparison</span>
              </div>
              
              <div className="grid grid-cols-2 gap-2 rounded-2xl overflow-hidden">
                <div className="relative group overflow-hidden">
                  <img src={item.beforeUrl} alt="Before" className="w-full h-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                  <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold text-gray-400">BEFORE</div>
                </div>
                <div className="relative group overflow-hidden">
                  <img src={item.afterUrl} alt="After" className="w-full h-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                  <div className="absolute bottom-3 right-3 bg-purple-600 px-2 py-1 rounded text-[10px] font-bold text-white shadow-lg">AFTER</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
