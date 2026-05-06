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
    <div className="bg-[#0B3C5D] py-4 relative z-20 shadow-xl border-y border-white/10 -mt-8">
      <div className="max-w-7xl mx-auto px-2">
        <div className="grid grid-cols-2 md:grid-cols-7 gap-6 items-center">
          {features.map((feature, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
                <div className="bg-white p-3 rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <span className="text-white font-medium text-sm md:text-base leading-tight">
                  {feature.label}
                </span>
              </div>
              {index < features.length - 1 && (
                <div className="hidden md:flex justify-center">
                  <div className="w-[1.5px] h-10 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesRow;
