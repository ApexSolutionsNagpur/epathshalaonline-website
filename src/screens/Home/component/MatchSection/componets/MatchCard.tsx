import Image from "next/image";
import { FaMapMarkerAlt, FaTrophy } from "react-icons/fa";

export default function MatchCard({
    homeTeam,
    homeLogo,
    awayTeam,
    awayLogo,
    score,
    stadium,
    tournament,
}: {
    homeTeam: string;
    homeLogo: string;
    awayTeam: string;
    awayLogo: string;
    score: string;
    stadium: string;
    tournament: string;
}) {
    return (
        <div className="bg-[#f3f3f3] p-6">

            {/* Teams Row */}
            <div className="flex items-center justify-between text-center">

                {/* Home */}
                <div className="flex items-center gap-3">
                    <span className="text-2xl font-extrabold text-[#0f172a]">
                        {homeTeam}
                    </span>
                    <Image
                        src={homeLogo}
                        alt={homeTeam}
                        width={45}
                        height={45}
                    />
                </div>

                {/* Score */}
                <span className="text-3xl font-extrabold text-[#0f172a]">
                    {score}
                </span>

                {/* Away */}
                <div className="flex items-center gap-3">
                    <Image
                        src={awayLogo}
                        alt={awayTeam}
                        width={45}
                        height={45}
                    />
                    <span className="text-2xl font-extrabold text-[#0f172a]">
                        {awayTeam}
                    </span>
                </div>
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-gray-300 my-6"></div>

            {/* Bottom Info */}
            <div className="flex justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-blue-600 text-xs" />
                    {stadium}
                </div>

                <div className="flex items-center gap-2">
                    <FaTrophy className="text-blue-600 text-xs" />
                    {tournament}
                </div>
            </div>
        </div>
    );
}
