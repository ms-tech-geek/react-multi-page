import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
	const params = useParams();

	const productId = params.productId;

	return (
		<>
			<h1>Product Details!</h1>
			<p>{productId}</p>
		</>
	);
};

export default ProductDetailPage;
