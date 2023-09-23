import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { StarGray, StarPurple, StarWhite } from "../general/Stars";

const Timeline = () => {
  const events = [
    {
      title: "Hackathon Announcement",
      desc: "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
      date: "November 18, 2023",
    },
    {
      title: "Teams Registration begins",
      desc: "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
      date: "November 18, 2023",
    },
    {
      title: "Teams Registration ends",
      desc: "Interested Participants are no longer Allowed to register",
      date: "November 18, 2023",
    },
    {
      title: "Announcement of the accepted teams and ideas",
      desc: "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
      date: "November 18, 2023",
    },
    {
      title: "Getlinked Hackathon 1.0 Offically Begins",
      desc: "Accepted teams can now proceed to build their ground breaking skill driven solutions",
      date: "November 18, 2023",
    },
    {
      title: "Demo Day",
      desc: "Teams get the opportunity to pitch their projects to judges.The winner of the hackathon will also be announced on this day",
      date: "November 18, 2023",
    },
  ];

  return (
    <div id="timeline" className="relative py-10 md:py-20">
      <StarPurple positions="left-56 top-56" />

      <div className="universal_x">
        <h2 className="second_font text-center font-bold text-2xl md:text-4xl">
          Timeline
        </h2>
        <p className="mt-3 mx-auto max-w-lg text-center">
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>

        <div className="relative mt-10 md:mt-16">
          <StarWhite positions="right-0 top-96" />
          <StarGray positions="left-0 bottom-0" />

          <VerticalTimeline className="custom-line">
            {
              //render events
              events.map((event, index) => (
                <VerticalTimelineElement
                  key={index}
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: "transparent" }}
                  contentArrowStyle={{
                    display: "none",
                  }}
                  //   @ts-ignore
                  date={
                    <span className="text-primaryPurple font-semibold md:text-xl">
                      {event.date}
                    </span>
                  }
                  iconStyle={{
                    background: "linear-gradient(to right, #d434fe, #9437ff)",
                    color: "#fff",
                    border: "none",
                  }}
                  icon={
                    <>
                      <div className="text-base md:text-2xl font-bold w-full h-full flex items-center justify-center">
                        {index + 1}
                      </div>
                    </>
                  }
                >
                  <h3 className="vertical-timeline-element-title font-semibold text-primaryPurple text-sm md:text-2xl">
                    {event.title}
                  </h3>
                  <p className="!font-normal">{event.desc}</p>
                </VerticalTimelineElement>
              ))
            }
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
