import React from "react";
import {Link} from "react-router-dom";

class Footer extends React.Component{
	render(){
		return(
			<footer className="computer-footer">
				<div className="menu-footer">
					<div id="phone-social-media">
						<Link to="https://www.instagram.com/piggapeggyskor/?next=%2Fshoppies00%2F&hl=sv#" target="_blank">
							<img src="/src/assets/instagram.png" alt="" />
						</Link>
						<Link to="https://www.facebook.com/piggapeggyskor" target="_blank">
							<img src="/src/assets/facebook.png" alt="" />
						</Link>
					</div>
					<div className="store-info">
						<h4>BUTIKSINFORMATION</h4>
						<Link to="/pages/Hjälp" className="pdf-none">HJÄLP & KONTAKT</Link>
			
						<p className="margin-top">Bankgatan 2</p>
						<p>223 52 Lund</p>
						<p className="margin-bottom">Sverige</p>
			
						<p>Måndag - Torsdag 11-17</p>
						<p>Fredag 11-15</p>
					</div>
					<div className="help">
						<h4>KUNDTJÄNST</h4>
						<div className="links pdf-none">
							<Link to="/pages/Hjälp">HJÄLP & KONTAKT</Link>
							<Link to="/pages/Villkor">VILLKOR</Link>
						</div>
						
						<p className="only-pdf margin-top margin-bottom">annika@piggapeggy.com</p>
						<p className="margin-top margin-bottom">073 - 303 49 50</p>
						<div id="social-media" className="pdf-none">
							<Link to="https://www.instagram.com/piggapeggyskor/?next=%2Fshoppies00%2F&hl=sv#" target="_blank">
								<img src="/src/assets/instagram.png" alt="" />
							</Link>
							<Link to="https://www.facebook.com/piggapeggyskor" target="_blank">
								<img src="/src/assets/facebook.png" alt="" />
							</Link>
						</div>
					</div>
					<p className="copyright">© Pigga Peggy, 2024</p>
				</div>
				<div className="pay-logos">
					<img src="/src/assets/images/dhlsvg.svg" alt=""/>
					<img src="/src/assets/images/postnord.webp" alt=""/>
					<img src="/src/assets/images/klarna.svg" alt=""/>
					<img src="/src/assets/images/swish.svg" alt=""/>
					<img src="/src/assets/images/visa.png" alt=""/>

				</div>
			</footer>

		);
	}
}

export default Footer;