import React from "react";
import css from "./Timeline.module.css";
import { Timeline, TimelineItem, TimelineDot, TimelineConnector, TimelineContent,TimelineSeparator} from '@material-ui/lab';

/* plan
import react 
import css 
export default Timeline 
props for timeline = jouneryData = week number, topic, resource 
return = ul with jouneryData.map that will give us a contain (divs,h2, p)

*/

export default function Journey({ data }) {
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
      {/* {topics.slice(1).map((topic, i) => { */}
        
                      {/* {topic.map((item, j) => { */}
                      <Timeline position="alternate">
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot color="secondary" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Secondary</TimelineContent>
  </TimelineItem>
  
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot color="success" />
    </TimelineSeparator>
    <TimelineContent>Success</TimelineContent>
  </TimelineItem>
</Timeline>           
   
    
    </>
  );
}
