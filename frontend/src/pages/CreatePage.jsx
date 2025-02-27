import {
	Box,
	Container,
	Heading,
	VStack,
	Input,
	Button,
} from "@chakra-ui/react";
import { Toaster, toaster } from "../components/ui/toaster";
import React, { useState } from "react";
import { useColorModeValue } from "../components/ui/color-mode";
import { useProductStore } from "../store/product";

const CreatePage = () => {
	const [newProduct, setNewProduct] = useState({
		name: "",
		price: "",
		image: "",
	});

	const { createProduct } = useProductStore();

	const handleAddProduct = async () => {
		const { success, message } = await createProduct(newProduct);

		toaster.create({
			title: success ? "Success" : "Error",
			description: message,
			status: success ? "success" : "error",
			duration: 3000,
			type: success ? "success" : "error",
		});

		setNewProduct({ name: "", price: "", image: "" });
	};

	return (
		<Container maxW={"xl"}>
			<VStack spaceX={8}>
				<Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
					Create a new product
				</Heading>
				<Box
					w={"full"}
					bg={useColorModeValue("white", "gray.900")}
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

						<Button
							bg={"#91ccf3"}
							onClick={handleAddProduct}
							w={"full"}
							_hover={{ bg: "blue.500" }}
						>
							Add product
						</Button>
					</VStack>
				</Box>
			</VStack>
			<Toaster></Toaster>
		</Container>
	);
};

export default CreatePage;
