import React from 'react';

class Home extends React.Component{
	render () {
		return (
		<main className="computer-main">
			<h2 className="serif pdf-none">KATEGORIER</h2>
			<div className="carousel">
				<div className="slider">
					<div className="image" id="index-1">
						<button type="submit">SNÖRSKOR</button>
					</div>
					<div className="image" id="index-2">
						<button type="submit">SNEAKERS</button>
					</div>
					<div className="image" id="index-3">
						<button type="submit">TRÄNINGSSKO</button>
					</div>
					<div className="image phone-car" id="index-4">
						<button type="submit">KLACKAR</button>
					</div>
				</div>
			</div>
			<button type="button" className="button" id="phone-button">VISA FLER</button>
			<h2 className="serif padding-pdf" id="computer-title">PIGGA PEGGYS FAVORITER</h2>
			<div className="table computer-table">
				<table>
					<tbody>
						<tr>
							<td>
								<img src="/src/assets/images/skor/sko1.jpg" alt=""/>
								<h4>KLACKAR</h4>
								<h6>Ten Points</h6>
							</td>
							<td>
								<img src="/src/assets/images/smycken/smycke1.jpg" alt=""/>
								<h4>HALSBAND</h4>
								<h6>Okänt</h6>
							</td>
							<td>
								<img src="/src/assets/images/väska/väska1.jpg" alt=""/>
								<h4>SADELVÄSKA</h4>
								<h6>ROKA</h6>
							</td>
							<td>
								<img src="/src/assets/images/skor/sko2.jpg" alt=""/>
								<h4>FINSKOR</h4>
								<h6>Andrea Conti</h6>
							</td>
						</tr>
						<tr>
							<td>
								<img src="/src/assets/images/väska/väska2.jpg" alt=""/>
								<h4>VÄSKA</h4>
								<h6>Vera Pelle</h6>
							</td>
							<td>
								<img src="/src/assets/images/skor/sko3.jpg" alt=""/>
								<h4>SNÖRSKO</h4>
								<h6>Green Comfort</h6>
							</td>
							<td>
								<img src="/src/assets/images/smycken/smycke2.jpg" alt=""/>
								<h4>ÖRHÄNGEN</h4>
								<h6>Okänt</h6>
							</td>
							<td>
								<img src="/src/assets/images/väska/väska3.jpg" alt=""/>
								<h4>VÄSKA</h4>
								<h6>Vera Pelle</h6>
							</td>
						</tr>
						<tr>
							<td>
								<img src="/src/assets/images/skor/sko4.jpg" alt=""/>
								<h4>KLACKAR</h4>
								<h6>Ella H</h6>
							</td>
							<td>
								<img src="/src/assets/images/väska/väska4.jpg" alt=""/>
								<h4>SKINNVÄSKA</h4>
								<h6>Vera Pelle</h6>
							</td>
							<td>
								<img src="/src/assets/images/skor/sko5.jpg" alt=""/>
								<h4>SANDALER</h4>
								<h6>Birkenstock</h6>
							</td>
							<td>
								<img src="/src/assets/images/smycken/smycke3.jpg" alt=""/>
								<h4>HALSBAND</h4>
								<h6>Okänt</h6>
							</td>
						</tr>
					</tbody>
				</table>
				<button type="button" className="button">VISA FLER</button>
			</div>
			<div className="information">
				<img src="/src/assets/images/person.jpg" alt="bild" id="bild1" className="proportions"/>

				<div className="text-box proportions" id="text1">
					<p>Jag som driver Pigga Peggy heter Annika Wilander och är 54 år gammal. Innan jag öppnade upp butiken jobbade jag som tandtekniker.
						Syftet med uppstarten av butiken var att jag alltid tyckt om udda skor med bekvämlighet, men däremot alltid känt avsaknad av just detta utbud i Sverige.
						2014 startade jag Pigga Peggy AB och kan sedan dess erbjuda fotvänliga, 
						bekväma och högt kvalitativa skor, som samtidigt är vackra och färgglada.</p>
				</div>

				<div className="text-box proportions" id="text2">
					<p>Min vision med Pigga Peggys utbud är att det ska finnas bra skor som funkar för alla typer av fotproblem, men att skorna ändå är
						fina med ett utbud för alla typer av smaker. Utöver detta är jag väldigt noga med att all produktion ska vara inom EU och därefter följa EUs regelrätt.
						Jag försöker även välja märken som satsar på hållbarhet och produktion av giftfritt återvunnet
						gummi samt vegetabiliskt garvat skinn utan krom. </p>
				</div>

				<img src="/src/assets/images/läder.jpg" alt="bild" id="bild2" className="proportions"/>
			</div>
		</main>
		);
	}
}

export default Home;