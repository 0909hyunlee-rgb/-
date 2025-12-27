
import React from 'react';
import { SERVICES } from '../lib/data';
import { Clock, Tag } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">시술 프로그램</h2>
          <p className="text-gray-400">조이스토리만의 정교한 맞춤 시술 프로그램을 소개합니다.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group bg-[#1a1a1a] rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={service.imageUrl} 
                  alt={service.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                <p className="text-gray-500 text-sm mb-6 flex-grow">{service.description}</p>
                
                <div className="space-y-3 pt-6 border-t border-gray-800">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-gray-500">
                      <Clock size={16} /> 시술시간
                    </span>
                    <span className="font-medium text-gray-300">{service.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-gray-500 text-sm">
                      <Tag size={16} /> 가격
                    </span>
                    <span className="text-purple-400 font-bold text-lg">{service.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
