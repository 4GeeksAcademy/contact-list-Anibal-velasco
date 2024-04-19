import React, { useState, useEffect, useContext } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate()
	const params = useParams()
	const [contact, setContact] = useState({
		name: store.editContact ? store.editContact.name : "",
		address: store.editContact ? store.editContact.address : "",
		phone: store.editContact ? store.editContact.phone : "",
		email: store.editContact ? store.editContact.email : ""
	})

	const submmit = async (event) => {
		event.preventDefault()
		if (params.id) {
			const result = await actions.editarContacto(contact, params.id)
			if (result) {
				navigate("/")
				actions.infContact();
			}
		} else {
			actions.addContact(contact)
		}
		setContact({
			"name": "",
			"email": "",
			"agenda_slug": "my_super_agenda",
			"address": "",
			"phone": ""
		})

	}




	useEffect(() => {
		if (params.id) {
			const currentContact = store.contacts.find(contact => contact.id == params.id)
			setContact(currentContact)
		}
	}, [params.id])



	return <>

		<div style={{ textAlign: "center" }}>
			<h1>{params.id ? `Editando el contacto ${params.id}` : `Add a New Contact`}</h1>

			<form onSubmit={submmit}>
				<div className="container">
					<div class="row d-block">
						<label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Full Name</label>
						<div class="col-sm-10">
							<input value={contact.name} type="text" onChange={(event) => setContact({ ...contact, name: event.target.value })} class="form-control form-control-lg colorStyle" style={{ width: "1235px" }} id="colFormLabelLg" placeholder="Enter Full name" />
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
