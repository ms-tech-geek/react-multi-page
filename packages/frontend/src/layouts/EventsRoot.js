import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

const EventsRootLayout = () => {
	return (
		<>
			<EventsNavigation />
			<main className="content">
				<Outlet />
			</main>
		</>
	);
};

export default EventsRootLayout;
