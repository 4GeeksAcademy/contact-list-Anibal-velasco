import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light  mb-3" style={{ background: "#e1d6ab61rgb(225 214 171 / 0%)" }}>
			<Link to="/">
				<span className="navbar-brand mb-0 h1"></span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn m-4" style={{ background: "lightslategray", color: "white" }}>Add New Contact</button>
				</Link>
			</div>
		</nav>
	);
};
