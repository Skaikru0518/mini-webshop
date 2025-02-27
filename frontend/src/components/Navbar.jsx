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
					bgGradient="linear(to-r, cyan.400, blue.500)"
					bgClip="text"
					color={colorMode === "light" ? "gray.800" : "cyan.300"}
				>
					<Link to="/">Product Store</Link>
				</Text>
				<HStack spacing={2} alignItems={"center"}>
					<Link to={"/create"}>
						<Button>
							<CiCirclePlus size={24} />
						</Button>
					</Link>
					<Button onClick={toggleColorMode}>
						{colorMode === "light" ? <IoMoonOutline /> : <IoSunnyOutline />}
					</Button>
				</HStack>
			</Flex>
		</Container>
	);
};

export default Navbar;
