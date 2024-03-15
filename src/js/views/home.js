import React from "react";
import "../../styles/home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

export const Home = () => {




	return (
		/* <div className="">
			  <Card className="cardHome">
					<div>
						<Card.Img className="cardImg" variant="top" src="https://estaticos.elcolombiano.com/binrepository/780x565/0c0/780d565/none/11101/NFGU/cristiano-ronaldo-ig-personal_43991124_20231215212229.jpg" />
					</div>
					<Card.Body>
						<div className="cardInf">
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up the
								bulk of the card's content.
							</Card.Text>
						</div>
						<div>
							<Button ><FontAwesomeIcon icon={faPen} /></Button>
							<Button ><FontAwesomeIcon icon={faTrash} /></Button>
						</div>
					</Card.Body>
			  </Card>
		 </div> */
		<div className="fatherCard container">
			< div className="cardHome">
				<div style={{ margin: "15px" }} >
					<img className="cardImg" src="https://estaticos.elcolombiano.com/binrepository/780x565/0c0/780d565/none/11101/NFGU/cristiano-ronaldo-ig-personal_43991124_20231215212229.jpg" alt="cristiano" />
				</div>
				<div className="cardInf">
					<h1>name</h1>
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
