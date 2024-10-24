import {
	Await,
	defer,
	json,
	redirect,
	useRouteLoaderData,
} from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

const EventsDetailsPage = () => {
	const { event, events } = useRouteLoaderData("event-detail");

	return (
		<>
			<Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
				<Await resolve={event}>
					{(loadedEvent) => <EventItem event={loadedEvent} />}
				</Await>
			</Suspense>
			<Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
				<Await resolve={events}>
					{(loadedEvents) => <EventsList events={loadedEvents} />}
				</Await>
			</Suspense>
		</>
	);
};

export default EventsDetailsPage;

const loadEvent = async (eventId) => {
	const response = await fetch(`http://localhost:8080/events/${eventId}`);
	if (!response.ok) {
		throw json(
			{ message: "Could not fetch details for selected event." },
			{ status: 500 }
		);
	} else {
		const resData = await response.json();
		return resData.event;
	}
};

const loadEvents = async () => {
	const response = await fetch("http://localhost:8080/events");
	if (!response.ok) {
		throw json({ message: "Could not fetch events." }, { status: 500 });
	} else {
		const resData = await response.json();
		return resData.events;
	}
};

export const loader = async ({ request, params }) => {
	const eventId = params.eventId;

	return defer({
		event: await loadEvent(eventId),
		events: loadEvents(),
	});
};

export const action = async ({ request, params }) => {
	const eventId = params.eventId;
	const response = await fetch(`http://localhost:8080/events/${eventId}`, {
		method: request.method,
	});
	if (!response.ok) {
		throw json({ message: "Could not delete event." }, { status: 500 });
	} else {
		return redirect("/events");
	}
};
