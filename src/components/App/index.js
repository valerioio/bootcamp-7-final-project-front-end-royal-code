//import { useState, useEffect } from "react";
import LoginPage from "../../Pages/LoginPage";
import CSS from "./App.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { journeyData, energisers, nameData, recordings } from "../../data";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Journey from "../../Pages/Timeline";
import Home from "../../Pages/Home";
import EnergisersPage from "../../Pages/EnergisersPage";
import Layout from "../Layout";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import GarticPage from "../../Pages/GarticPage";
import ReadingListPage from "../../Pages/ReadingListPage";
import LectureRecordingsPage from "../../Pages/LectureRecordingsPage";

const theme = createTheme({
  palette: {
    primary: {
      light: "#1976d2",
      main: "#1976d2",
      dark: "#1976d2",
      contrastText: "#fff",
    },
    secondary: {
      light: "#4ebaaa",
      main: "#4ebaaa",
      dark: "#4ebaaa",
      contrastText: "#000",
    },
  },
});

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
    <MuiThemeProvider theme={theme}>
      <div className={CSS.App}>
        <Router>
          <Switch>
            <Route path="/home">
              <Layout user={user} currentPage={"/home"}>
                <Home
                  user={user}
                  nameData={nameData}
                  journeyData={journeyData}
                  energisers={energisers}
                  recordings={recordings}
                />
              </Layout>
            </Route>
            <Route path="/journey">
              <Layout user={user} currentPage={"/journey"}>
                <Journey data={journeyData} />
              </Layout>
            </Route>
            <Route exact path="/energisers">
              <Layout user={user} currentPage={"/energisers"}>
                <EnergisersPage />
              </Layout>
            </Route>
            <Route exact path="/">
              <LoginPage />
            </Route>
            <Route exact path="/energisers/gartic">
              <Layout user={user}>
                <GarticPage />
              </Layout>
            </Route>
            <Route exact path="/reading-list">
              <Layout user={user}>
                <ReadingListPage />
              </Layout>
            </Route>
            <Route exact path="/lecture-recordings">
              <Layout user={user}>
                <LectureRecordingsPage />
              </Layout>
            </Route>
          </Switch>
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
