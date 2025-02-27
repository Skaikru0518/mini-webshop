import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";
import React from "react";
import { Link } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";

const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Container maxW={"1140px"} px={4}>
			<Flex
				h={16}
				alignItems={"center"}
				justifyContent={"space-between"}
				flexDirection={{ base: "column", sm: "row" }}
			>
				<Text
					fontSize={{ base: "22px", sm: "28px" }}
					fontWeight="bold"
					textAlign="center"
					textTransform="uppercase"
					bgGradient="to-r"
					gradientFrom={"cyan.400"}
					gradientTo={"blue.500"}
					bgClip="text"
				>
					<Link to="/">Product Store 🛒</Link>
				</Text>
				<HStack spacing={2} alignItems={"center"}>
					<Link to={"/create"}>
						<Button bg={colorMode === "light" ? "blue.500" : "gray.500"}>
							<CiCirclePlus size={24} />
						</Button>
					</Link>
					<Button
						onClick={toggleColorMode}
						bg={colorMode === "light" ? "blue.500" : "gray.500"}
					>
						{colorMode === "light" ? <IoMoonOutline /> : <IoSunnyOutline />}
					</Button>
				</HStack>
			</Flex>
		</Container>
	);
};

export default Navbar;
