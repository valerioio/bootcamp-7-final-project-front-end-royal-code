import React from "react";
import CoachDashboard from "../CoachDashboard";
import BootcamperDashboard from "../BootcamperDashboard";

export default function Home({
  user,
  handleDelete,
  NameData,
  JourneyData,
  addListing,
  energisers,
}) {
  return (
    <div>
      {user?.email === "coach@schoolofcode.co.uk" ? (
        <CoachDashboard
          handleDelete={handleDelete}
          bootcampers={NameData}
          name={user.name}
          energisers={energisers}
        />
      ) : null}
      {user?.email === "bootcamper@schoolofcode.co.uk" ? (
        <BootcamperDashboard
          handleDelete={handleDelete}
          addListing={addListing}
          Listings={JourneyData}
          bootcampers={NameData}
          name={user.name}
        />
      ) : null}
    </div>
  );
}
