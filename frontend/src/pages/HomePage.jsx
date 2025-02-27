import React, { useEffect } from "react";
import { Container, VStack, Text, SimpleGrid, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
	const { fetchProducts, products } = useProductStore();

	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);

	console.log("products:", products);

	return (
		<Container maxW="xl" py={12}>
			<VStack gap={8} display="flex" align="center" justify="center">
				<Text
					fontSize={30}
					fontWeight="bold"
					bgGradient="to-r"
					gradientFrom={"cyan.400"}
					gradientTo={"blue.500"}
					bgClip="text"
				>
					Current Products 🚀
				</Text>

				<Box display="flex" justifyContent="center" width="100%">
					<SimpleGrid
						columns={{ base: 1, md: 2, lg: 3 }}
						columnGap={{ base: 2, md: 10, lg: 40 }}
						rowGap={8}
						width="auto"
						justifyContent="center"
						alignItems="center"
						placeItems="center"
					>
						{products.map((product) => (
							<ProductCard key={product._id} product={product} />
						))}
					</SimpleGrid>
				</Box>

				{products.length === 0 && (
					<Text
						fontSize="xl"
						textAlign="center"
						fontWeight="bold"
						color="gray.400"
					>
						No products found 😢{" "}
						<Link to="/create">
							<Text
								as="span"
								color="blue.400"
								_hover={{ textDecoration: "underline" }}
							>
								Create a product
							</Text>
						</Link>
					</Text>
				)}
			</VStack>
		</Container>
	);
};

export default HomePage;
