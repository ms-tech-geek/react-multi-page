import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/Root";
import EventsRootLayout from "./layouts/EventsRoot";
import HomePage from "./pages/Home";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import EventDetailPage, {
	loader as eventDetailLoader,
} from "./pages/EventDetails";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <HomePage /> },
			{
				path: "events",
				element: <EventsRootLayout />,
				children: [
					{
						index: true,
						element: <EventsPage />,
						loader: eventsLoader,
					},
					{
						path: ":eventId",
						element: <EventDetailPage />,
						loader: eventDetailLoader,
					},
					{ path: "new", element: <NewEventPage /> },
					{ path: ":eventId/edit", element: <EditEventPage /> },
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
