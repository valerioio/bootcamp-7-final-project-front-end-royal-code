import React from "react";
import CoachDashboard from "../CoachDashboard";
import BootcamperDashboard from "../BootcamperDashboard";

export default function Home({ user, NameData, JourneyData, energisers, recordings }) {
  return (
    <div>
      {user?.email === "coach@schoolofcode.co.uk" ? (
        <CoachDashboard
          bootcampers={NameData}
          name={user.name}
          energisers={energisers}
        />
      ) : null}
      {user?.email === "bootcamper@schoolofcode.co.uk" ? (
        <BootcamperDashboard
          Listings={JourneyData}
          bootcampers={NameData}
          name={user.name}
          recordings= {recordings}
        />
      ) : null}
    </div>
  );
}
