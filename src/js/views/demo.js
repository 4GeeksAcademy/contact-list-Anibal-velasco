import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {

	const [contact, setContact] = useState()

	const apisubmmit = async () => {
		try {
			const api = await fetch("https://playground.4geeks.com/apis/fake/contact/")
			const data = await api.json();
			console.log(data)
			setContact(data)

		} catch (error) {
			console.log(error)
		}


	}

	return <div>

		<div style={{ textAlign: "center" }}>
			<h1>Add a New Contact</h1>

			<div className="container">
				<div class="row">
					<label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Full Name</label>
					<div class="col-sm-10">
						<input type="email" class="form-control form-control-lg" id="colFormLabelLg" placeholder="Enter Full name" />
					</div>
				</div>
				<div class="row">
					<label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
					<div class="col-sm-10">
						<input type="email" class="form-control form-control-lg" id="colFormLabelLg" placeholder="Enter Email" />
					</div>
				</div>
				<div class="row">
					<label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Phone</label>
					<div class="col-sm-10">
						<input type="email" class="form-control form-control-lg" id="colFormLabelLg" placeholder="Enter phone" />
					</div>
				</div>
				<div class="row">
					<label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Address</label>
					<div class="col-sm-10">
						<input type="email" class="form-control form-control-lg" id="colFormLabelLg" placeholder="Enter addrees" />
					</div>
				</div>

				<button style={{ width: "95%" }} type="button" class="btn btn-primary">Save</button>
			</div>


			<Link to="/" >
				<button style={{ margin: "10px" }} className="btn btn-primary">Back home</button>
			</Link>
		</div>
	</div>;
};
