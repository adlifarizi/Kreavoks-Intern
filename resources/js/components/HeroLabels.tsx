import { ChartPieIcon, MousePointer2 } from 'lucide-react';
import { FC } from 'react';

const HeroLabels: FC = () => {
    return (
        <>
            {/* 🔴 100% TERPERCAYA */}
            <div className="absolute hidden lg:block bottom-16 right-20 animate-bounce rotate-6">
                <div className="flex items-center">
                    <MousePointer2 size={28} fill='#EB524A' className="text-[#EB524A] rotate-[-40deg]" />
                    <span className="bg-[#EB524A] text-white text-xl font-bold px-3 py-1 rounded-full shadow-md">
                        100% TERPERCAYA
                    </span>
                </div>
            </div>

            {/* Discount */}
            <div className="absolute hidden lg:block -top-10 left-10 bg-white rounded-xl border border-blue-400 p-4 shadow-md w-fit text-left animate-float">
                {/* Garis hias atas kiri */}
                <div className="flex items-center gap-1 mb-2">
                    <span className="w-4 h-[2px] bg-blue-500 rounded"></span>
                    <span className="w-2 h-[2px] bg-blue-500 rounded"></span>
                </div>

                {/* Teks promo */}
                <div className="text-blue-500 font-extrabold text-lg leading-tight">
                    Gak Percaya?? <br />Pesan sekarang
                </div>

                <div className="text-blue-400 text-sm mt-1">mumpung ada dics s.d</div>

                {/* Angka diskon */}
                <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-[28px] font-extrabold text-[#FEF747] drop-shadow-sm leading-none bg-blue-500 px-2 py-0.5 rounded-md">
                        15%
                    </span>
                    <span className="text-blue-400 text-sm">s&amp;k berlaku</span>
                </div>
            </div>


            {/* 🔵 Solusi DIGITAL */}
            <div className="absolute hidden lg:block -top-20 right-30 animate-float -rotate-[20deg]">
                <div className="flex items-center">
                    <span className="bg-blue-500 text-white text-xl font-semibold px-3 py-1 rounded-full shadow-md">
                        Solusi DIGITAL
                    </span>
                    <MousePointer2 size={26} fill='#4082E6' className="text-blue-500 rotate-[135deg]" />
                </div>
            </div>

            {/* 🟡 Pasti Murahh... (Diam) */}
            {/* <div className="absolute bottom-20 left-1/4 animate-pulse-float">
                <div className="flex items-center justify-between gap-2 px-3 py-1 border bg-white/20 border-[#FEF747] rounded-md backdrop-blur-md shadow">
                    <ChartPieIcon size={28} className="text-[#FEF747]" />
                    <span className="text-[#FEF747] text-sm font-semibold">
                        Pasti Murahh, tapi<br></br> berkualitas
                    </span>
                </div>
            </div> */}
        </>
    );
};

export default HeroLabels;
