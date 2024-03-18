import React from "react";
import {Link} from "react-router-dom";

class PhoneNavigation extends React.Component{
	render(){
		return (
			<>
				<nav className="phone-nav">
					<img src="/src/assets/hamburger.png" alt="" id="hamburger"/>
					<img src="/src/assets/shopping-cart.png" alt="" id="cart"/>
					<Link to="/" id="phone-logo"><img src="/src/assets/images/logo.png" alt=""/></Link>
					<input type="text" placeholder="SÖK..." id="phone-search"/>
					<button type="submit" id="search-logo">
						<img src="/src/assets/search.png" alt=""/>
					</button>
					<ul className="phone-menu">
						<li>
							<Link to="/">HEM</Link>
						</li>
						<li>
							<Link to="/pages/Skor">SKOR</Link>
						</li>
						<li>
							<Link to="/pages/Accessoarer">ACCESSOARER</Link>
						</li>
						<li>
							<Link to="/pages/OmOss">OM OSS</Link>
						</li>
						<li>
							<Link to="/pages/Hjälp">KONTAKT</Link>
						</li>
						<li>
							<Link to="/pages/Villkor">VILLKOR</Link>
						</li>
					</ul>
				</nav>
				<div className="cta-phone">
					<p className="text">FRI FRAKT PÅ BESTÄLLNINGAR ÖVER 1000:-</p>
				</div>
			</>
		)
	}
}

export default PhoneNavigation;