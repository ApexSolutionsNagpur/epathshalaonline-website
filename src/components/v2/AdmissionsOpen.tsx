import React from 'react';

const AdmissionsOpen = () => {
    return (
        <div className="w-full">
            {/* Top White Strip */}
            <div className="h-1 md:h-1.5 bg-white w-full"></div>

            {/* Main Orange Banner */}
            <div className="bg-[#0B3C5D] py-4 md:py-6 px-4 text-center">
                <div className="max-w-7xl mx-auto space-y-1">
                    <h2 className="text-white font-heading text-2xl md:text-4xl font-extrabold tracking-tight uppercase">
                        ADMISSIONS OPEN FOR 2026-27
                    </h2>
                    <p className="text-white font-body text-xs md:text-sm font-medium tracking-wide">
                        Seats Available In All Grades From Nursery To 8
                    </p>
                </div>
            </div>

        </div>
    );
};

export default AdmissionsOpen;
