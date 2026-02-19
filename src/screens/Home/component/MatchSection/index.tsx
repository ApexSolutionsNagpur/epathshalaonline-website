import MatchCard from "./componets/MatchCard";

export default function LatestMatchSection() {
    const matches = [
        {
            homeTeam: "PFC",
            homeLogo: "/images/team1.png",
            awayTeam: "VCA",
            awayLogo: "/images/team2.png",
            score: "2-0",
            stadium: "Wira Stadium",
            tournament: "Youth Cup",
        },
        {
            homeTeam: "VFC",
            homeLogo: "/images/team3.png",
            awayTeam: "PFC",
            awayLogo: "/images/team1.png",
            score: "0-0",
            stadium: "Soris Arena",
            tournament: "Nova League",
        },
        {
            homeTeam: "PFC",
            homeLogo: "/images/team1.png",
            awayTeam: "AFC",
            awayLogo: "/images/team4.png",
            score: "3-0",
            stadium: "Wira Stadium",
            tournament: "Youth Cup",
        },
        {
            homeTeam: "SFC",
            homeLogo: "/images/team5.png",
            awayTeam: "PFC",
            awayLogo: "/images/team1.png",
            score: "1-4",
            stadium: "Lumi Arena",
            tournament: "Nova League",
        },
        {
            homeTeam: "SFC",
            homeLogo: "/images/team6.png",
            awayTeam: "PFC",
            awayLogo: "/images/team1.png",
            score: "2-3",
            stadium: "Grand Field",
            tournament: "Youth Cup",
        },
        {
            homeTeam: "PFC",
            homeLogo: "/images/team1.png",
            awayTeam: "VFC",
            awayLogo: "/images/team3.png",
            score: "2-1",
            stadium: "Wira Stadium",
            tournament: "Friendly",
        },
    ];

    return (
        <section >

            <div className="grid md:grid-cols-2 items-end gap-10 my-14">

                <div>
                    <p className="text-blue-600 uppercase tracking-widest text-sm font-semibold mb-4">
                        Latest Match
                    </p>

                    <h2 className="text-4xl md:text-[38px] font-extrabold text-[#0f172a] leading-tight uppercase">
                        Latest Updates From Our <br />
                        Recent Matches
                    </h2>
                </div>

                <div>
                    <p className="text-gray-600 leading-7">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit, dictumst
                        taciti congue sociosqu mollis pulvinar in, senectus tristique
                        porta nam dictum enim.
                    </p>
                </div>
            </div>

            {/* Matches Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {matches.map((match, index) => (
                    <MatchCard key={index} {...match} />
                ))}
            </div>

        </section >
    );
}
