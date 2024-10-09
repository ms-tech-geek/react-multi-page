import { Link, useParams } from "react-router-dom";

const ProductDetailPage = () => {
	const params = useParams();

	const productId = params.productId;

	return (
		<>
			<h1>Product Details!</h1>
			<p>{productId}</p>
			<p><Link to=".." >Back</Link></p>
		</>
	);
};

export default ProductDetailPage;
