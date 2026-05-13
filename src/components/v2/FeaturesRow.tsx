import React from 'react';
import { Calendar, FileText, CheckSquare, MessageCircle } from 'lucide-react';

const FeaturesRow = () => {
  const features = [
    { icon: <Calendar className="w-8 h-8 text-[#1E5AA8]" />, label: 'Daily Class Schedule' },
    { icon: <FileText className="w-8 h-8 text-[#00A8A8]" />, label: 'Assignment Calendar' },
    { icon: <CheckSquare className="w-8 h-8 text-[#1E5AA8]" />, label: 'Assessment Schedule' },
    { icon: <MessageCircle className="w-8 h-8 text-[#00A8A8]" />, label: 'Regular Feedback' },
  ];

  return (
    <div className="bg-[#0B3C5D] py-4 relative z-20 shadow-xl border-y border-white/10 -mt-8 md:mt-0 max-md:rounded-4xl">
      <div className="px-4 md:px-32">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative flex items-center gap-3 p-4 md:p-6 transition-colors cursor-pointer group
                ${index % 2 === 0 ? 'border-r' : ''} 
                ${index < 2 ? 'border-b' : ''} 
                md:border-none border-white/10`}
            >
              <div className="flex items-center gap-3 w-full">
                <div className="bg-white/10 p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 border border-white/10 backdrop-blur-sm">
                  <div className="text-white">
                    {React.cloneElement(feature.icon as React.ReactElement, {
                      className: "w-6 h-6 md:w-8 md:h-8 text-white"
                    })}
                  </div>
                </div>
                <span className="text-white font-bold text-[10px] md:text-sm leading-tight uppercase tracking-wide">
                  {feature.label}
                </span>
              </div>

              {/* Desktop Divider */}
              {index < features.length - 1 && (
                <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2">
                  <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesRow;
