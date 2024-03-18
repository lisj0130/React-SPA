import React from "react";

class OmOss extends React.Component{
	render(){
		return (
			<main className="omoss-main">
				<iframe src="https://www.youtube.com/embed/6stlCkUDG_s" allowFullScreen></iframe>
				<audio controls>
					<source src="/src/assets/audio/ljud.mp3" type="audio/mp3"/>
					Your browser does not support the audio tag.
				</audio>
			</main>
		)
	}
}

export default OmOss;