import { energisers } from "../../data";
import css from "./EnergisersPage.module.css";

const EnergisersPage = () => {
  return (
    <>
      <h1 className={css.mainTitle}>Energisers</h1>
      <div className={css.main}>
        {energisers.map((energiser, i) => {
          return (
            <div className={`${css.energiser} container`} key={`${i}85`}>
              <h1 className={css.title}>{energiser.name}</h1>
              <p>{energiser.description}</p>
              <br />
              <a href={energiser.link} style={{ color: "blue" }}>
                {energiser.link}
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default EnergisersPage;
