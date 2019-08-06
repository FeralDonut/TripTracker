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
		id,
		title,
		startDate,
		endDate,
		description,
		locations,
	} = props

return (
		<Card className='trip-card' key={id}>
			<CardHeader className={style.card_header}>
				<Alert color={''}>
					{title}
				</Alert>
			</CardHeader>
			<CardBody>
			<CardText className={style.location_container}>
					<span className={style.location}>
						<label>{(locations[0]) ? locations[0].address.city : null}</label>
						{"City"}
					</span>
					<span className={style.date}>
						{'Start Date'}
						<label>{moment(startDate).format("MMM Do YYYY")}</label>
					</span>
				</CardText>
				<CardText>
					<span className={style.date_container}>
					<span className={style.location}>
						<label>{(locations[0]) ? locations[0].address.country : null}</label>
						{'Country'}
					</span>
					<span className={style.date}>
						{'End Date'}
						<label>{moment(endDate).format("MMM Do YYYY")}</label>
					</span>
				</span>
				</CardText>
			</CardBody>
		</Card>
	)
}

export default TripCard;
