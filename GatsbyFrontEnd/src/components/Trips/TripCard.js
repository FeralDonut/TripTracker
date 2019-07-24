import React from 'react';
import {
    Alert,
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardHeader,
} from 'reactstrap';
import style from './TripCardStyle.module.css';

const TripCard = props => {
	return (
		<Card className='trip-card' key="trip.tripid">
			<CardHeader className={style.card_header}>
				<Alert color={''}>
					TripName
				</Alert>
			</CardHeader>
			<CardBody>
				<CardText>
					<span className={style.date_container}>
					<span>
						<label>Trip.Start.Date</label>
						{'Start Date'}
					</span>
					<span>
						<label>Trip.End.Date</label>
						{'End Date'}
					</span>
				</span>
				</CardText>
				<CardText>
					<span className="nextokrs-individualteam-teammembers" >
						<label>Location.city</label>
						{"City"}
					</span>
					<span>
						<label>Location.Country</label>
						{'Country'}
					</span>
				</CardText>
			</CardBody>
		</Card>
	)
}

export default TripCard;
