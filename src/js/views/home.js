import React, { useState, useEffect } from "react";
import "../../styles/home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

export const Home = () => {

	const [contact, setContact] = useState()

	const contactsInf = async () => {
		try {
			const contactsApi = await fetch("https://playground.4geeks.com/apis/fake/contact/")
			const resp = await contactsApi.json()
			console.log(resp);
			setContact(resp)
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		contactsInf()
	}, [])


	return (
		<div className="fatherCard container">
			< div className="cardHome">
				<div style={{ margin: "15px" }} >
					<img className="cardImg" src="https://estaticos.elcolombiano.com/binrepository/780x565/0c0/780d565/none/11101/NFGU/cristiano-ronaldo-ig-personal_43991124_20231215212229.jpg" alt="cristiano" />
				</div>
				<div className="cardInf">
					{/* <h1>{contact.full_name}</h1> */}
					<p>ubicacion</p>
					<p>numero</p>
					<p>corro</p>
				</div>
				<div className="cardButton">
					<button className="btnCard" ><FontAwesomeIcon icon={faPen} size="lg" style={{ color: "#000000", }} /></button>
					<button className="btnCard" ><FontAwesomeIcon icon={faTrash} size="lg" style={{ color: "#000000", }} /></button>
				</div>
			</div >
		</div>
	)

};
