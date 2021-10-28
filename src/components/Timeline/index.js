import React from "react";
import css from "./Timeline.module.css";
import Layout from "../Layout";
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

/* plan
import react 
import css 
export default Timeline 
props for timeline = jouneryData = week number, topic, resource 
return = ul with jouneryData.map that will give us a contain (divs,h2, p)

*/

export default function Journey({ data, navbarLinks, name }) {
  const topics = data.reduce((topics, { week, topic }) => {
    topics[week] ? topics[week].push(topic) : (topics[week] = [topic]);
    return topics;
  }, []);

  const resources = data.reduce((resources, { week, topic }) => {
    resources[week] ? resources[week].push(topic) : (resources[week] = [topic]);
    return resources;
  }, []);

  return (
    <>
      {topics.slice(1).map((topic, i) => {
        return (
          <Timeline key={uuidv4()} align="alternate">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary" className={`dots`}>
                  {i + 1}
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent></TimelineContent>
            </TimelineItem>

            {topic.map((item, j) => {
              return (
                <TimelineItem key={uuidv4()}>
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot variant="outlined" color="secondary" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <div className={`smallContainer`}>
                    <TimelineContent className={`timeContent`}>
                      {resources[i + 1][j]}
                    </TimelineContent>
                  </div>
                </TimelineItem>
              );
            })}
          </Timeline>
        );
      })}
    </>
  );
}
