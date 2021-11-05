import { energisers } from "../../data";
import css from "./EnergisersPage.module.css";

const EnergisersPage = () => {
  return (
    <>
      <h1 className={css.mainTitle}>Energisers</h1>
      <div className={css.main}>
        {energisers.map((energiser, i) => {
          return (
            <div key={`${i}54`} className={css.energiser}>
              <a href={`energisers/${energiser.name.toLowerCase()}`}>
                <img
                  src={energiser.logo}
                  alt={energiser.name + " logo"}
                  className={css.image}
                />
              </a>
              <a
                className={css.link}
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
