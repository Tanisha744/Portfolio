import StatCard from "./StatCard";

const Stats = () => {
  return (
    <div className="mt-16 grid gap-6 md:grid-cols-3">
      <StatCard
        number="11+"
        title="Months Experience"
      />

      <StatCard
        number="15+"
        title="Projects Built"
      />

      <StatCard
        number="1st"
        title="Hackathon Winner"
      />
    </div>
  );
};

export default Stats;