import React from "react";
import TripCard from "./TripCard";
import { Link } from "gatsby";
import style from "./TripCardStyle.module.css";

const TripList = ({ trips, setIndividualTrip }) => {
  const handleClick = trip => {
    setIndividualTrip(trip);
  };

  const myTrips = trips.map(trip => (
    <TripCard
      key={trip._id}
      id={trip._id}
      title={trip.title}
      startDate={trip.start_date}
      endDate={trip.end_date}
      description={trip.description}
      locations={trip.location}
      onclick={() => handleClick(trip)}
    />
  ));

  return (
    <div>
      {trips.length === 0 ? (
        <div>Currently No Trips</div>
      ) : (
        <div>
          <Link
            to="/individualTrip"
            style={{ textDecoration: "none", color: "black" }}
          >
            {myTrips}
          </Link>
        </div>
      )}
    </div>
  );
};

export default TripList;
