import React from "react";
import {Link} from "react-router-dom";

class ComputerNavigation extends React.Component{
	render(){
		return(
			<>
				<div id="cta">
					<p className="text">FRI FRAKT PÅ BESTÄLLNINGAR ÖVER 1000:-</p>
				</div>
				<nav className="computer-nav">
					<div id="search-bar">
						<input type="text" placeholder="SÖK..." className="search"/>
						<button type="submit" className="search-button">
							<img src="/src/assets/search.png" alt=""/>
						</button>
					</div>
					<Link to="/" className="logo">
						<img src="/src/assets/images/logo.png" alt="logo" className="logo-img"/>
					</Link>
					<div className="logos">
						<img src="/src/assets/mail.png" alt="" id="mail-icon"/>
						<img src="/src/assets/heart.png" alt="" id="heart-icon"/>
						<img src="/src/assets/shopping-cart.png" alt="" id="cart-icon"/>
					</div>
					<ul className="menu">
						<li id="li1">
							<Link to="/">HEM</Link>
						</li>
						<li id="li2">
							<Link to ="/pages/Skor">SKOR</Link>
						</li>
						<li id="li3">
							<Link to="/pages/Accessoarer">ACCESSOARER</Link>
						</li>
						<li id="li4">
							<Link to="/pages/OmOss">OM OSS</Link>
						</li>
						<li id="li5">
							<Link to="/pages/Hjälp">KONTAKT</Link>
						</li>
						<li id="li6">
							<Link to="/pages/Villkor">VILLKOR</Link>
						</li>
					</ul>
				</nav>
			</>
		)
	}
}

export default ComputerNavigation;