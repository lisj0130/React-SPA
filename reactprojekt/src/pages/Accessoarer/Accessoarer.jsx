import React from "react";

class Accessoarer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {showMore: false};
  	}

	// Funktion för att hantera klick på "Visa fler" -knappen
	handleShowMore = () => {
		this.setState(prevState => ({showMore: !prevState.showMore}));
	};

        render() {
		return (
			<main>
				<div className="categorys">
					<div className="bags">
						<h4 className="serif">VÄSKOR</h4>
					</div>
					<div className="jewelry">
						<h4 className="serif">SMYCKEN</h4>
					</div>
				</div>
				<h2 className="serif">ALLA ACCESSOARER</h2>
				<div className="table">
					<table>
						<tbody>
							<tr>
								<td>
									<img src="/src/assets/images/väska/väska1.jpg" alt="" />
									<h4>VÄSKA</h4>
									<h6>Mywalit</h6>
								</td>
								<td>
									<img src="/src/assets/images/smycken/smycke1.jpg" alt="" />
									<h4>HALSBAND</h4>
									<h6>Okänt</h6>
								</td>
								<td>
									<img src="/src/assets/images/väska/väska2.jpg" alt="" />
									<h4>HANDVÄSKA</h4>
									<h6>Prada</h6>
								</td>
								<td className="phone-table">
									<img src="/src/assets/images/väska/väska3.jpg" alt="" />
									<h4>VÄSKA</h4>
									<h6>ROKA</h6>
								</td>
							</tr>
							<tr>
								<td>
									<img src="/src/assets/images/smycken/smycke2.jpg" alt="" />
									<h4>ÖRHÄNGEN</h4>
									<h6>Vera Pelle</h6>
								</td>
								<td>
									<img src="/src/assets/images/väska/väska4.jpg" alt="" />
									<h4>RYGGSÄCK</h4>
									<h6>Beck Söndergaard</h6>
								</td>
								<td>
									<img src="/src/assets/images/väska/väska5.jpg" alt="" />
									<h4>BAG</h4>
									<h6>Vera Pelle</h6>
								</td>
								<td className="phone-table">
									<img src="/src/assets/images/smycken/smycke3.jpg" alt="" />
									<h4>HALSBAND</h4>
									<h6>Okänt</h6>
								</td>
							</tr>
							<tr>
								<td>
									<img src="/src/assets/images/smycken/smycke4.jpg" alt="" />
									<h4>RING</h4>
									<h6>Okänt</h6>
								</td>
								<td>
									<img src="/src/assets/images/väska/väska6.jpg" alt="" />
									<h4>SKINNVÄSKA</h4>
									<h6>Vera Pelle</h6>
								</td>
								<td>
									<img src="/src/assets/images/smycken/smycke5.jpg" alt="" />
									<h4>RINGAR</h4>
									<h6>Volker Lang</h6>
								</td>
								<td className="phone-table">
									<img src="/src/assets/images/väska/väska7.jpg" alt="" />
									<h4>SKINNVÄSKA</h4>
									<h6>Sticks and Stones</h6>
								</td>
							</tr>
						</tbody>
						{this.state.showMore && (
							<tbody>
								<tr>
									<td>
										<img src="/src/assets/images/smycken/smycke2.jpg" alt="" />
										<h4>ÖRHÄNGEN</h4>
										<h6>Vera Pelle</h6>
									</td>
									<td>
										<img src="/src/assets/images/väska/väska4.jpg" alt="" />
										<h4>RYGGSÄCK</h4>
										<h6>Beck Söndergaard</h6>
									</td>
									<td>
										<img src="/src/assets/images/väska/väska5.jpg" alt="" />
										<h4>BAG</h4>
										<h6>Vera Pelle</h6>
									</td>
									<td className="phone-table">
										<img src="/src/assets/images/smycken/smycke3.jpg" alt="" />
										<h4>HALSBAND</h4>
										<h6>Okänt</h6>
									</td>
								</tr>
								<tr>
									<td>
										<img src="/src/assets/images/smycken/smycke4.jpg" alt="" />
										<h4>RING</h4>
										<h6>Okänt</h6>
									</td>
									<td>
										<img src="/src/assets/images/väska/väska6.jpg" alt="" />
										<h4>SKINNVÄSKA</h4>
										<h6>Vera Pelle</h6>
									</td>
									<td>
										<img src="/src/assets/images/smycken/smycke5.jpg" alt="" />
										<h4>RINGAR</h4>
										<h6>Volker Lang</h6>
									</td>
									<td className="phone-table">
										<img src="/src/assets/images/väska/väska7.jpg" alt="" />
										<h4>SKINNVÄSKA</h4>
										<h6>Sticks and Stones</h6>
									</td>
								</tr>
							</tbody>
						)}
					</table>
					<button type="submit" className="button" onClick={this.handleShowMore}>
						{this.state.showMore ? "Visa färre" : "Visa fler"}
					</button>
				</div>
			</main>
    		);
  	}
}

export default Accessoarer;
