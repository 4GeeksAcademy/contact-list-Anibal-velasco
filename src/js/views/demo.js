import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {

	const [contact, setContact] = useState({
		"full_name": "",
		"email": "",
		"agenda_slug": "my_super_agenda",
		"address": "",
		"phone": ""
	})

	const apisubmmit = async (event) => {
		event.preventDefault()
		try {
			const api = await fetch("https://playground.4geeks.com/apis/fake/contact", {
				method: "POST",
				body: JSON.stringify(contact),
				headers: {
					"Content-Type": "application/json"
				}
			})
			const data = await api.json();
			console.log(data)
			setContact({
				"full_name": "",
				"email": "",
				"agenda_slug": "my_super_agenda",
				"address": "",
				"phone": ""
			})

		} catch (error) {
			console.log(error)
		}
	}



	useEffect(() => {
		console.log(contact)
	}, [contact])



	return <>

		<div style={{ textAlign: "center" }}>
			<h1>Add a New Contact</h1>

			<form onSubmit={apisubmmit}>
				<div className="container">
					<div class="row d-block">
						<label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Full Name</label>
						<div class="col-sm-10">
							<input value={contact.full_name} type="text" onChange={(event) => setContact({ ...contact, full_name: event.target.value })} class="form-control form-control-lg colorStyle" style={{ width: "1235px" }} id="colFormLabelLg" placeholder="Enter Full name" />
						</div>
					</div>
					<div class="row d-block">
						<label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
						<div class="col-sm-10">
							<input value={contact.email} type="email" onChange={(event) => setContact({ ...contact, email: event.target.value })} class="form-control form-control-lg colorStyle" style={{ width: "1235px" }} id="colFormLabelLg" placeholder="Enter Email" />
						</div>
					</div>
					<div class="row d-block">
						<label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Phone</label>
						<div class="col-sm-10">
							<input value={contact.phone} type="text" onChange={(event) => setContact({ ...contact, phone: event.target.value })} class="form-control form-control-lg colorStyle" style={{ width: "1235px" }} id="colFormLabelLg" placeholder="Enter phone" />
						</div>
					</div>
					<div class="row d-block">
						<label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Address</label>
						<div class="col-sm-10">
							<input value={contact.address} type="text" onChange={(event) => setContact({ ...contact, address: event.target.value })} class="form-control form-control-lg colorStyle" style={{ width: "1235px" }} id="colFormLabelLg" placeholder="Enter addrees" />
						</div>
					</div>

					<button style={{ width: "95%", background: "lightslategray" }} type="submit" class="btn transition">Save</button>
				</div>

			</form>
			<Link to="/" >
				<button style={{ margin: "10px", background: "lightslategray" }} className="btn transition">Back home</button>
			</Link>
		</div>

	</>
};
