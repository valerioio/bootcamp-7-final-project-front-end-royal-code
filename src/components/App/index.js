//import { useState, useEffect } from "react";
import LoginPage from "../LoginPage";
import CSS from "./App.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { NameData } from "../../data";
import { JourneyData, energisers } from "../../data";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Timeline from "../Timeline";
import Home from "../Home";

function App() {
  const { user } = useAuth0();

  // Plan: Create a fetch to the backend on page initialisation to get data for lists
  // Wrap in useEffect, [] dependency
  // async function, await fetch to endpoints
  // res.json returned data
  // call function
  /*
  useEffect(() => {
    async function getAllData() {
      const energiserResponse = await fetch(
        "https://xsfe9i5ech.execute-api.eu-west-1.amazonaws.com/dev/energisers"
      );
      const bootcamperResponse = await fetch(
        "https://xsfe9i5ech.execute-api.eu-west-1.amazonaws.com/dev/bootcampers"
      );
      const resourceResponse = await fetch(
        "https://xsfe9i5ech.execute-api.eu-west-1.amazonaws.com/dev/resources"
      );
      const energiserData = await energiserResponse.json();
      const bootcamperData = await bootcamperResponse.json();
      const resourceData = await resourceResponse.json();
      console.log(energiserData, bootcamperData, resourceData);
      return [energiserData, bootcamperData, resourceData];
    }
    const allData = getAllData();
    console.log(allData);
    return allData;
  }, []);
*/

  return (
    <div className={CSS.App}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home
              user={user}
              NameData={NameData}
              JourneyData={JourneyData}
              energisers={energisers}
            />
          </Route>
          <Route path="/journey">
            <Timeline data={JourneyData} />
          </Route>
          <Route path="/">
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
