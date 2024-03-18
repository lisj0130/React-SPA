import React from "react";

class HeaderHjälp extends React.Component{
	render(){
		return (
			<header className="header">
				<h1 className="serif" id="phone-title">HJÄLP OCH KONTAKT</h1>
				<h5 id="phone-subtitle">All information som behövs för att få hjälp och kontakt med oss på <br/> Pigga Peggy antingen på hemsidan eller i butiken finner du nedan. </h5>

				<div className="hjälp-header">
					<div id="adress">
						<h2 className="serif">BUTIKSADRESS</h2>
						<p>BANKGATAN 2 <br/>
							223 52 LUND <br/>
							SVERIGE</p>
					</div>
					<div id="telefon">
						<h2 className="serif">TELEFONKONTAKT</h2>
						<p>073 - 303 49 50</p>
					</div>
					<div id="öppet">
						<h2 className="serif">ÖPPETTIDER</h2>
						<p>MÅNDAG - TORSDAG 11-17 <br/>
							FREDAG 11- 15</p>
					</div>
				</div>
			</header>
		)
	}
}

export default HeaderHjälp;