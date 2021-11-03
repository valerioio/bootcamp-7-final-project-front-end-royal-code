import { energisers } from "../../data";
import { v4 as uuidv4 } from "uuid";
import css from "./EnergisersPage.module.css";

const EnergisersPage = () => {
  return (
    <>
      <h1 className={css.mainTitle}>Energisers</h1>
      <div className={css.main}>
        {energisers.map((energiser, i) => {
          return (
            <div key={`${i}54`}>
              <img src={energiser.logo} alt={energiser.name + " logo"} />
              <h2>{energiser.name}</h2> <br />
              <br />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default EnergisersPage;
