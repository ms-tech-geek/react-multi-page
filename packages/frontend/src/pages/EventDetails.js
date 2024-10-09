import { useParams } from "react-router-dom";

const EventsDetailsPage = () => {
	const params = useParams();
	return (
		<>
			<h1>Events Details Page</h1>
			<p>Event ID : {params.eventId}</p>
		</>
	);
};

export default EventsDetailsPage;
