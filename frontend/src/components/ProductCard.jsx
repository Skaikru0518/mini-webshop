import React, { useState, useEffect } from "react";
import {
	Box,
	Image,
	Heading,
	Text,
	HStack,
	IconButton,
	VStack,
	Input,
	Button,
} from "@chakra-ui/react";
import {
	DialogBody,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogRoot,
	DialogTitle,
	DialogTrigger,
	DialogCloseTrigger,
} from "../components/ui/dialog";
import {
	MdOutlineModeEditOutline,
	MdOutlineDeleteOutline,
} from "react-icons/md";
import { useColorModeValue } from "../components/ui/color-mode";
import { useProductStore } from "../store/product";
import { Toaster, toaster } from "../components/ui/toaster";

const ProductCard = ({ product }) => {
	const textColor = useColorModeValue("gray.600", "gray.200");
	const bg = useColorModeValue("white", "gray.800");

	const { deleteProduct, updateProduct } = useProductStore();
	const [isMounted, setIsMounted] = useState(false);
	const [updatedProduct, setUpdatedProduct] = useState(product);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const handleDeleteProduct = async (pid) => {
		const { success, message } = await deleteProduct(pid);
		toaster.create({
			title: success ? "Success" : "Error",
			description: message,
			status: success ? "success" : "error",
			duration: 3000,
			type: success ? "success" : "error",
		});
	};

	const handleUpdateProduct = async (pid, updatedProduct) => {
		const { success, message } = await updateProduct(pid, updatedProduct);
		updateProduct(pid, updatedProduct);
		toaster.create({
			title: success ? "Success" : "Error",
			description: success
				? "Product updated succesfully!😊"
				: "Failed to update product!😢",
			status: success ? "success" : "error",
			duration: 3000,
			type: success ? "success" : "error",
		});
	};

	return (
		<Box
			shadow={"lg"}
			rounded={"lg"}
			overflow={"hidden"}
			transition={"all 0.3s"}
			_hover={{ transform: "translateY(-5px)", shadow: "xl" }}
			bg={bg}
			minW={"200px"}
		>
			<Image
				src={product.image}
				alt={product.name}
				minH={"1/3"}
				maxH={"2/3"}
				w={"full"}
				objectFit={"cover"}
			/>
			<Box p={4} display={"flex"} flexDirection={"column"}>
				<Heading as="h3" size={"md"} mb={2}>
					{product.name}
				</Heading>
				<Text fontWeight={"bold"} fontSize={"xl"} color={textColor} mb={4}>
					$ {product.price}
				</Text>
				<HStack>
					{isMounted && (
						<DialogRoot>
							<DialogTrigger asChild>
								<IconButton aria-label="Edit product" colorPalette="blue">
									<MdOutlineModeEditOutline />
								</IconButton>
							</DialogTrigger>

							<DialogContent>
								<DialogHeader>
									<DialogTitle>Update Product</DialogTitle>
								</DialogHeader>
								<DialogBody>
									<VStack gap={4}>
										<Input
											placeholder="Product Name"
											name="name"
											defaultValue={updatedProduct.name}
											onChange={(e) =>
												setUpdatedProduct({
													...updatedProduct,
													name: e.target.value,
												})
											}
										/>
										<Input
											placeholder="Product Price"
											name="price"
											type="number"
											defaultValue={updatedProduct.price}
											onChange={(e) =>
												setUpdatedProduct({
													...updatedProduct,
													price: e.target.value,
												})
											}
										/>
										<Input
											placeholder="Product Image URL"
											name="image"
											defaultValue={updatedProduct.image}
											onChange={(e) =>
												setUpdatedProduct({
													...updatedProduct,
													image: e.target.value,
												})
											}
										/>
									</VStack>
								</DialogBody>
								<DialogFooter>
									<Button
										colorPalette={"blue"}
										onClick={() =>
											handleUpdateProduct(product._id, updatedProduct)
										}
									>
										Update
									</Button>
									<DialogCloseTrigger
										asChild
										color={"red.600"}
										bg={"red.200"}
										_hover={{ bg: "red.400" }}
									>
										X
									</DialogCloseTrigger>
								</DialogFooter>
							</DialogContent>
						</DialogRoot>
					)}

					<IconButton
						aria-label="Delete product"
						colorPalette="red"
						onClick={() => handleDeleteProduct(product._id)}
					>
						<MdOutlineDeleteOutline />
					</IconButton>
				</HStack>
			</Box>

			<Toaster />
		</Box>
	);
};

export default ProductCard;
