import React from 'react';
import TripCard from './TripCard';
//import style from './JournalListStyles.modules.css';

const TripList = ({trips}) => {
  const myTrips = trips.map(trip =>(
    <TripCard
      key={trip._id}
      id={trip._id}
      title={trip.title}
      startDate={trip.start_date}
      endDate={trip.end_date}
      description={trip.description}
      locations={trip.locations}
    />    
  ));
  
  return(
    <div >
      {(trips.length === 0) ? (
        <div>Currently No Trips</div>
      ):(
        <div>
          {myTrips}
        </div>
      )}
    </div>
  );
};

export default TripList