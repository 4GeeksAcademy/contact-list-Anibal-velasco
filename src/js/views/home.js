import React, { useState, useEffect } from "react";
import "../../styles/home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen, faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Home = () => {

	const [contacts, setContacts] = useState([])

	const contactsInf = async () => {
		try {
			const contactsApi = await fetch("https://playground.4geeks.com/contact/agendas/anibal")
			const resp = await contactsApi.json()
			console.log(resp);
			setContacts(resp.contacts)
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		contactsInf()
	}, [])


	return (
		<>
			{
				contacts && contacts.map((contact, id) => {
					return (
						<div key={contact.id} className="fatherCard container">
							< div className="cardHome">
								<div style={{ margin: "15px" }} >
									<img className="cardImg" src="https://www.mundodeportivo.com/files/image_449_465/uploads/2023/09/17/6506eaa6a517a.jpeg" alt="cristiano" />
								</div>
								<div className="cardInf">
									<h1 style={{ marginTop: "10px" }}>{contact.name}</h1>
									<p> <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: "8px" }} />000 YouLove_street lt-14</p>
									<p> <FontAwesomeIcon icon={faPhone} style={{ marginRight: "8px" }} />501-000-102</p>
									<p><FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "8px" }} />TestUsuario#1@test.com</p>
								</div>
								<div className="cardButton">
									<button className="btnCard" ><FontAwesomeIcon icon={faPen} size="lg" style={{ color: "#000000", }} /></button>
									<button className="btnCard" ><FontAwesomeIcon icon={faTrash} size="lg" style={{ color: "#000000", }} /></button>
								</div>
							</div >
						</div>
					)
				})
			}
		</>
	)

};
