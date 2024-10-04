import {
	createBrowserRouter,
	// createRoutesFromElements,
	// Route,
	RouterProvider,
	// Routes,
} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";

// const routeDefinations = createRoutesFromElements(
// 	<Routes>
// 		<Route path="/" element={<HomePage />} />
// 		<Route path="/products" element={<ProductsPage />} />
// 	</Routes>
// );

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ path: "/", element: <HomePage /> },
			{ path: "/products", element: <ProductsPage /> },
		],
	},
]);

// const router = createBrowserRouter(routeDefinations);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
