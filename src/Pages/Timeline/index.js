import React, { useState, useEffect } from "react";
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
import { Switch } from "@chakra-ui/react";
import changeOpacity from "../../helpers/colors";

/* plan
import react 
import css 
export default Timeline 
props for timeline = jouneryData = week number, topic, resource 
return = ul with jouneryData.map that will give us a contain (divs,h2, p)

*/

export default function Journey({ navbarLinks, name }) {
  /* const topics = data.reduce((topics, { week, topic }) => {
    topics[week] ? topics[week].push(topic) : (topics[week] = [topic]);
    return topics;
  }, []);

  const resources = data.reduce((resources, { week, topic }) => {
    resources[week] ? resources[week].push(topic) : (resources[week] = [topic]);
    return resources;
  }, []);*/
  const [detail, setDetail] = useState(true);
  const [data, setData] = useState([
    {
      week: "1",
      topic: "loading",
      link: "",
      thumbnail: "",
      description: [""],
    },
  ]);

  useEffect(() => {
    async function getResourceData() {
      const res = await fetch(
        "https://d27b2o3all.execute-api.eu-west-1.amazonaws.com/dev/resources"
      );
      const data = await res.json();
      const sortedData = data.sort(function (a, b) {
        return a.week - b.week;
      });
      setData(sortedData);
      return data;
    }
    getResourceData();
  }, []);

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
      <div className={css.toggle}>
        <Switch
          isChecked={detail}
          onChange={() => setDetail(!detail)}
          className={css.switch}
        />
        <p>
          <span className={detail ? css.graydOut : css.highlighted}>
            Minimum
          </span>{" "}
          |{" "}
          <span className={detail ? css.highlighted : css.graydOut}>
            Detail
          </span>
        </p>
      </div>
      <Timeline className={css.timeLine}>
        {resources
          .slice(1)
          .map(({ topic, description, topicIcon, color }, i) => {
            return (
              <TimelineItem key={i + "468"}>
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
                    className={css.smallContainer}
                    style={{
                      borderColor: color,
                      backgroundColor: changeOpacity(color, 0.1),
                    }}
                  >
                    <div
                      className={css.imageBox}
                      style={{
                        borderRight: `1px solid ${color}`,
                      }}
                    >
                      <img src={topicIcon} alt={topic} className={css.image} />
                    </div>
                    <div className={css.textBox}>
                      <h4 className={css.topic}>{topic}</h4>
                      {detail ? (
                        <ul className={css.topicList}>
                          {description.map((subTopic, j) => {
                            return <li key={j + "965" + i}>{subTopic}</li>;
                          })}
                        </ul>
                      ) : null}
                    </div>
                  </div>
                </TimelineContent>
              </TimelineItem>
            );
          })}
      </Timeline>
    </>
  );
}
