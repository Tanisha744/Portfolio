import TimelineItem from "./TimelineItem";
import { experienceData } from "./experienceData";

const Timeline = () => {
  return (
    <div className="mx-auto mt-20 max-w-5xl">
      {experienceData.map((item, index) => (
        <TimelineItem
          key={index}
          item={item}
          last={index === experienceData.length - 1}
        />
      ))}
    </div>
  );
};

export default Timeline;