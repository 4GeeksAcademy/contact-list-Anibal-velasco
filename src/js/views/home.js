import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen, faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Demo } from "./demo.js";
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate()


	return (
		<>
			{
				store.contacts && store.contacts.map((contact) => {
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
									<button onClick={() => { navigate(`/edit/${contact.id}`) }} className="btnCard" ><FontAwesomeIcon icon={faPen} size="lg" style={{ color: "#000000", }} /></button>
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
