import { energisers } from "../../data";
import Layout from "../Layout";
import { v4 as uuidv4 } from "uuid";
import css from "./EnergisersPage.module.css";

const EnergisersPage = () => {
  const navbarLinks = [
    { linkText: "Dashboard", href: "/home" },
    { linkText: "Energisers", href: "/energisers" },
  ];
  return (
    <Layout navbarLinks={navbarLinks} name="Coach">
      <div className={css.main}>
        {energisers.map((energiser) => {
          return (
            <div className={`${css.energiser} container`} key={uuidv4()}>
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
    </Layout>
  );
};

export default EnergisersPage;
