import React from 'react';
import {
    Alert,
    Card,
    CardText,
    CardBody,
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
			<CardText className={style.location_container}>
					<span className={style.city}>
						<label>Location.city</label>
						{"City"}
					</span>
					<span className={style.country}>
						<label>Location.Country</label>
						{'Country'}
					</span>
				</CardText>
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
			</CardBody>
		</Card>
	)
}

export default TripCard;
