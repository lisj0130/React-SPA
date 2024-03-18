import React from "react";

class Hjälp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isSent: false};
		this.handleSend = this.handleSend.bind(this);
	}

	handleSend() {
		this.setState({ isSent: true });
	}

	render() {
		const { isSent } = this.state;
		return (
			<main id="hjälp-main">
				<h2 className="serif">KONTAKTA OSS</h2>
				<div className="form-cont">
				<form>
					<label htmlFor="flname">NAMN</label><br />
					<input type="text" id="flname" name="flname" disabled={isSent} /><br />

					<label htmlFor="mail">EPOST-ADRESS</label><br />
					<input type="text" id="mail" name="mail" disabled={isSent} /><br />

					<label htmlFor="number">TELEFON-NUMMER</label><br />
					<input type="text" id="number" name="number" disabled={isSent} /><br />

					<label htmlFor="errand">ÄRENDE</label><br />
					<input type="text" id="errand" name="errand" disabled={isSent} /><br />

					<label htmlFor="message">MEDDELANDE</label><br />
					<input type="text" id="message" name="message" disabled={isSent} /><br />
				</form>
				<input
				type="button"
				value={isSent ? "SKICKAT!" : "SKICKA"}
				className="button"
				style={isSent ? { pointerEvents: "none" } : null} // Inaktivera hover-effekten om meddelandet redan har skickats
				disabled={isSent} // Inaktivera knappen om meddelandet redan har skickats
				onClick={this.handleSend} // Använd handleSend-metoden för att markera att meddelandet har skickats när knappen klickas på
				/>
				</div>
			</main>
		);
	}
}

export default Hjälp;


