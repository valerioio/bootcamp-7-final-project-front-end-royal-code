import React from "react";
import css from "./Timeline.module.css";

/* plan
import react 
import css 
export default Timeline 
props for timeline = jouneryData = week number, topic, resource 
return = ul with jouneryData.map that will give us a contain (divs,h2, p)

*/

export default function Timeline({ data }) {
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
        {
          /* begin week block */
        }
        <section id="timeline-wrapper">
          <div class="container-fluid">
            <div class="row">
              <div class="timeline-top">
                <div class="top-year">Week {i + 1}</div>
                <div class="timeline-block">
                  <div class="timeline-events">
                    <br />
                    {topic.map((item, j) => {
                      {
                        /* begin info and resources */
                      }
                      <div
                        className={`${css.eventContainer} ${css.rEventContainer}`}
                      >
                        <span className={css.smallCircle}></span>
                        <div className={css.container}>
                          <div className={css.eventContent}>
                            <h5 className={`${css.topicText} ${css.textLeft}`}>
                              {item}
                            </h5>
                            <br />
                            <br />
                            <blockquote
                              className={`${css.mainText} ${css.textLeft}`}
                            >
                              {resources[i + 1][j]}
                              <br />
                            </blockquote>
                          </div>
                        </div>
                      </div>;
                      {
                        /* end info and resources */
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>;
        {
          /* end week block */
        }
      })}
    </>
  );
}
