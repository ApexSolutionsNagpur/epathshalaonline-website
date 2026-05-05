import React from 'react';

const TypographyDemo = () => {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto space-y-12 bg-white">
      <div className="space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600 font-body">Typography System</h2>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
          Modern Education for Every Student
        </h1>
        <p className="font-body text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
          Empowering learners through innovative technology and expert instruction. Our typography system ensures readability and professionalism.
        </p>
      </div>

      <div className="grid gap-8">
        <div className="space-y-2">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-slate-800">Heading 2 (Poppins)</h2>
          <p className="font-body text-base text-slate-600">
            This is a normal body text (Inter, 16px). It is clean, modern, and easy to read on all devices.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-slate-800">Heading 3 (Poppins)</h3>
          <p className="font-body text-sm text-slate-500">
            This is a small body text (Inter, 14px). Often used for captions or secondary information.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 pt-4">
        <button className="font-body font-semibold py-3 px-8 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors">
          Get Started
        </button>
        <button className="font-body font-medium py-3 px-8 bg-white border-2 border-slate-200 text-slate-700 rounded-full hover:bg-slate-50 transition-colors">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default TypographyDemo;
