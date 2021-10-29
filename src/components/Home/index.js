import React from "react";
import CoachDashboard from "../CoachDashboard";
import BootcamperDashboard from "../BootcamperDashboard";

export default function Home({ user, nameData, journeyData, energisers, recordings }) {
  return (
    <div>
      {user?.email === "coach@schoolofcode.co.uk" ? (
        <CoachDashboard
          bootcampers={nameData}
          name={user.name}
          energisers={energisers}
        />
      ) : null}
      {user?.email === "bootcamper@schoolofcode.co.uk" ? (
        <BootcamperDashboard
          Listings={journeyData}
          bootcampers={nameData}
          name={user.name}
          recordings= {recordings}
        />
      ) : null}
    </div>
  );
}
