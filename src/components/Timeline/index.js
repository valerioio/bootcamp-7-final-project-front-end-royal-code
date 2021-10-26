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
  const weeks = data
    .reduce((weeks, { week, topic }) => {
      weeks[week] ? weeks[week].push(topic) : (weeks[week] = [topic]);
      return weeks;
    }, [])
    .sort((a, b) => a - b);
  return (
    <>
      {weeks.map()}
      {/* begin week block */}
      <section id="timeline-wrapper">
        <div class="container-fluid">
          <div class="row">
            <div class="timeline-top">
              <div class="top-year">2018</div>
              <div class="timeline-block">
                <div class="timeline-events">
                  <br />
                  {/* begin info and resources */}
                  <div
                    className={`${css.eventContainer} ${css.rEventContainer}`}
                  >
                    <span className={css.smallCircle}></span>
                    <div className={css.container}>
                      <div className={css.eventContent}>
                        <h5 className={`${css.topicText} ${css.textLeft}`}>
                          TOPIC
                        </h5>
                        <br />
                        <br />
                        <blockquote
                          className={`${css.mainText} ${css.textLeft}`}
                        >
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Quaerat ipsum voluptates sapiente beatae non
                          praesentium vitae dolorum qui, reprehenderit harum{" "}
                          <br />
                        </blockquote>
                      </div>
                    </div>
                  </div>
                  {/* end info and resources */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end week block */}
    </>
  );
}
