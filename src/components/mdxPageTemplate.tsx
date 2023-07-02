import * as React from "react";
import NavBar from "./navbar";
import { Container } from "@mui/material";
import Footer from "./footer";

// Define a custom type so TypeScript understands what is being passed to the function
// Without a type, the "any" type is implicitly set.
// With a defined type, we can get autocomplete and whatnot from our IDE as well.
type MdxPageTemplatePropTypes = {
	children: React.JSX.Element[];
};

const MdxPageTemplate = ({ children }: MdxPageTemplatePropTypes) => {
	return (
		<>
			<NavBar />
			<br />
			<Container>{children}</Container>
			<Footer />
		</>
	);
};

export default MdxPageTemplate;
