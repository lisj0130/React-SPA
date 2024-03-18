import React from "react";

class Skor extends React.Component{
	render(){
		return (
			<main>
				<h2 className="serif">KATEGORIER</h2>
				<div className="carousel">
					<div className="slider">
						<div className="image" id="skor-1">
							<button type="submit">SNÖRSKOR</button>
						</div>
						<div className="image" id="skor-2">
							<button type="submit">SNEAKERS</button>
						</div>
						<div className="image" id="skor-3">
							<button type="submit">TRÄNINGSSKO</button>
						</div>
						<div className="image phone-car" id="skor-4">
							<button type="submit">KLACKAR</button>
						</div>
					</div>
				</div>
				<h2 className="serif">ALLA SKOR</h2>
				<div className="table">
					<table>
						<tbody>
							<tr>
								<td>
									<img src="/src/assets/images/skor/sko1.jpg" alt=""/>
									<h4>BOOTS</h4>
									<h6>Axelda</h6>
								</td>
								<td>
									<img src="/src/assets/images/skor/sko2.jpg" alt=""/>
									<h4>KLACKAR</h4>
									<h6>Ten Points</h6>
								</td>
								<td>
									<img src="/src/assets/images/skor/sko3.jpg" alt=""/>
									<h4>KÄNGOR</h4>
									<h6>Charlotte of Sweden</h6>
								</td>
								<td className="phone-table">
									<img src="/src/assets/images/skor/sko4.jpg" alt=""/>
									<h4>KLACKAR</h4>
									<h6>Nordic ShoePeople</h6>
								</td>
							</tr>
							<tr>
								<td>
									<img src="/src/assets/images/skor/sko5.jpg" alt=""/>
									<h4>SNÖRSKOR</h4>
									<h6>Ella H</h6>
								</td>
								<td>
									<img src="/src/assets/images/skor/sko6.jpg" alt=""/>
									<h4>BOOTS</h4>
									<h6>Green Comfort</h6>
								</td>
								<td>
									<img src="/src/assets/images/skor/sko7.jpg" alt=""/>
									<h4>KÄNGOR</h4>
									<h6>Brako</h6>
								</td>
								<td className="phone-table">
									<img src="/src/assets/images/skor/sko8.jpg" alt=""/>
									<h4>SNÖRSKOR</h4>
									<h6>Charlotte of Sweden</h6>
								</td>
							</tr>
							<tr>
								<td>
									<img src="/src/assets/images/skor/sko9.jpg" alt=""/>
									<h4>SNÖRSKOR</h4>
									<h6>Cinnamon</h6>
								</td>
								<td>
									<img src="/src/assets/images/skor/sko10.jpg" alt=""/>
									<h4>SANDALER</h4>
									<h6>El Naturalista</h6>
								</td>
								<td>
									<img src="/src/assets/images/skor/sko11.jpg" alt=""/>
									<h4>SNÖRSKOR</h4>
									<h6>Rosa Negra</h6>
								</td>
								<td className="phone-table">
									<img src="/src/assets/images/skor/sko12.jpg" alt=""/>
									<h4>KILKLACK</h4>
									<h6>Xti</h6>
								</td>
							</tr>
						</tbody>
					</table>
					<button type="submit" className="button">VISA FLER</button>
				</div>
			</main>
		)
	}
}

export default Skor;