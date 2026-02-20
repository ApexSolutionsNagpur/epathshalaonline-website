import TeamSection from "./component/TeamSection";

export default function OurCoachSection() {
  return (
    <>
      <div className="text-center mb-9">
        <p className="uppercase text-blue-600 text-center text-sm font-medium">
          Our Coach
        </p>
        <h2 className="text-4xl  font-extrabold text-center text-gray-900 leading-tight">
          Meet the Brilliant Minds Behind the Team
        </h2>
      </div>
      <TeamSection />
    </>
  );
}
