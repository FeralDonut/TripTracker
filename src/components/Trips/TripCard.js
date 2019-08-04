import React from 'react';
import {
    Alert,
    Card,
    CardText,
    CardBody,
    CardHeader,
} from 'reactstrap';
import moment from 'moment';
import style from './TripCardStyle.module.css';

const TripCard = props => {
	const {
		key,
		id,
		title,
		startDate,
		endDate,
		description,
	} = props

	return (
		<Card className='trip-card' key="trip.tripid">
			<CardHeader className={style.card_header}>
				<Alert color={''}>
					{title}
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
						<label>{moment(startDate).format("MMM Do YYYY")}</label>
						{'Start Date'}
					</span>
					<span>
						<label>{moment(endDate).format("MMM Do YYYY")}</label>
						{'End Date'}
					</span>
				</span>
				</CardText>
			</CardBody>
		</Card>
	)
}

export default TripCard;
