//import { energisers } from "../../data";
import css from "./EnergisersPage.module.css";
import React, { useState, useEffect } from "react";
import changeOpacity from "../../helpers/colors";

const EnergisersPage = () => {
  const [energisers, setEnergisers] = useState([]);

  useEffect(() => {
    async function getEnergiserData() {
      const res = await fetch(
        "https://d27b2o3all.execute-api.eu-west-1.amazonaws.com/dev/energisers"
      );
      const data = await res.json();
      setEnergisers(data);
      return data;
    }
    getEnergiserData();
  }, []);

  return (
    <>
      <h1 className={css.mainTitle}>Energisers</h1>
      <div className={css.main}>
        {energisers.map((energiser, i) => {
          return (
            <div
              key={`${i}54`}
              className={css.energiser}
              style={{
                borderColor: energiser.color,
                backgroundColor: changeOpacity(energiser.color, 0.1),
              }}
            >
              <a
                href={`energisers/${energiser.name
                  .toLowerCase()
                  .replaceAll(" ", "-")}`}
              >
                <img
                  src={energiser.logo}
                  alt={energiser.name + " logo"}
                  className={css.image}
                />
              </a>
              <a
                className={css.link}
                style={{
                  borderColor: energiser.color,
                }}
                href={`energisers/${energiser.name.toLowerCase()}`}
              >
                {energiser.name}
              </a>
              <br />
              <br />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default EnergisersPage;
