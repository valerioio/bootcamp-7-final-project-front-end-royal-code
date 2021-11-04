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
import { v4 as uuidv4 } from "uuid";
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
    (resources, { week, topic, topicIcon, description ,color}) => {
      resources[week] = { topic, description, topicIcon,color };
      return resources;
    },
    []
  );
  return (
    <>
      <h1 className={css.mainTitle}>Journey</h1>
      {resources.slice(1).map(({ topic, description, topicIcon, color}, i) => {
        return (
          <>
            <Timeline key={`${i}21`} className={`timeLine`}>
              <TimelineItem>
                <TimelineOppositeContent
                  style={{
                    maxWidth: "1px",
                    paddingLeft: "30px",
                    paddingRight: "30px",
                  }}
                />
                <TimelineSeparator className={`seperator`}>
                  <TimelineDot color="primary" className={`dots`}>
                    {i + 1}
                  </TimelineDot>
                </TimelineSeparator>
                <TimelineSeparator className={`seperator`}>
                  <TimelineConnector />
                  <TimelineDot variant="outlined" color="secondary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <div className={`smallContainer ${css.sContainer}`}style={{borderColor:color}}>
                    <h2 className={css.topicTitle}>{topic}</h2>

                    <span className={css.list}>
                      <ul >
                        {description.map((subTopic) => {
                          return <li>{subTopic}</li>;
                        })}
                      </ul>
                    </span>
                    <img
                      style={{ float: "right" }}
                      src={topicIcon}
                      alt={topic}
                      className={css.image}
                    ></img>
                  </div>
                </TimelineContent>

                <TimelineContent></TimelineContent>
              </TimelineItem>

              {/* {topic.map((item, j) => {
                return (
                  <TimelineItem key={`${i}23`}>
                    <TimelineOppositeContent
                      style={{
                        maxWidth: "1px",
                        paddingLeft: "30px",
                        paddingRight: "30px",
                      }}
                    />
                    <TimelineSeparator className={`seperator`}>
                      <TimelineConnector />
                      <TimelineDot variant="outlined" color="secondary" />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <div className={`smallContainer`}>
                        {resources[i + 1][j]}
                      </div>
                    </TimelineContent>
                  </TimelineItem>
                );
              })} */}
            </Timeline>
          </>
        );
      })}
    </>
  );
}
