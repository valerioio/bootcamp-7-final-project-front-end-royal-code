import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineSeparator,
  TimelineOppositeContent,
} from "@material-ui/lab";
import css from "./Timeline.module.css";

/* plan
import react 
import css 
export default Timeline 
props for timeline = jouneryData = week number, topic, resource 
return = ul with jouneryData.map that will give us a contain (divs,h2, p)

*/

export default function Journey({ data, navbarLinks, name }) {
  /* const topics = data.reduce((topics, { week, topic }) => {
    topics[week] ? topics[week].push(topic) : (topics[week] = [topic]);
    return topics;
  }, []);

  const resources = data.reduce((resources, { week, topic }) => {
    resources[week] ? resources[week].push(topic) : (resources[week] = [topic]);
    return resources;
  }, []);*/

  const resources = data.reduce(
    (resources, { week, topic, topicIcon, description, color }) => {
      resources[week] = { topic, description, topicIcon, color };
      return resources;
    },
    []
  );
  return (
    <>
      <h1 className={css.mainTitle}>Journey</h1>
      <Timeline className={`timeLine`}>
        {resources
          .slice(1)
          .map(({ topic, description, topicIcon, color }, i) => {
            return (
              <TimelineItem>
                <TimelineOppositeContent
                  style={{
                    maxWidth: "0",
                  }}
                />
                <TimelineSeparator className={`seperator`}>
                  <TimelineDot color="primary" className={`dots`}>
                    {i + 1}
                  </TimelineDot>
                  <TimelineConnector style={{ maxHeight: "1.5em" }} />
                  <TimelineDot
                    className={css.littleDot}
                    variant="outlined"
                    color="secondary"
                  />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <div
                    className={`smallContainer ${css.sContainer}`}
                    style={{
                      borderColor: color,
                    }}
                  >
                    <h2 className={css.topicTitle}>{topic}</h2>

                    <span className={css.list}>
                      <ul>
                        {description.map((subTopic) => {
                          return <li>{subTopic}</li>;
                        })}
                      </ul>
                    </span>
                    <img
                      src={topicIcon}
                      alt={topic}
                      className={css.image}
                    ></img>
                  </div>
                </TimelineContent>
              </TimelineItem>
            );
          })}
      </Timeline>
    </>
  );
}
