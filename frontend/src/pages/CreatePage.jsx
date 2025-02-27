import {
	Box,
	Container,
	Heading,
	VStack,
	Input,
	Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useColorModeValue } from "../components/ui/color-mode";

const CreatePage = () => {
	const [newProduct, setNewProduct] = useState({
		name: "",
		price: "",
		image: "",
	});

	function handleAddProduct() {
		console.log(newProduct);
	}
	return (
		<Container maxW={"xl"}>
			<VStack spaceX={8}>
				<Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
					Create a new product
				</Heading>
				<Box
					w={"full"}
					bg={useColorModeValue("white", "gray.800")}
					p={6}
					rounded={"lg"}
					shadow={"md"}
				>
					<VStack spacing={4}>
						<Input
							placeholder={"Product name"}
							name="name"
							value={newProduct.name}
							onChange={(e) =>
								setNewProduct({ ...newProduct, name: e.target.value })
							}
						/>
						<Input
							placeholder={"Product price"}
							name="price"
							value={newProduct.price}
							onChange={(e) =>
								setNewProduct({ ...newProduct, price: e.target.value })
							}
						/>
						<Input
							placeholder={"Product image"}
							name="image"
							value={newProduct.image}
							onChange={(e) =>
								setNewProduct({ ...newProduct, image: e.target.value })
							}
						/>

						<Button colorScheme="blue" onClick={handleAddProduct} w={"full"}>
							Add product
						</Button>
					</VStack>
				</Box>
			</VStack>
		</Container>
	);
};

export default CreatePage;
