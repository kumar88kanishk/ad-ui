import React, { useState, setState } from 'react';
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';

const slideContent = (slides) => slides.map((slide) => <Slide> {slide} </Slide>)
const Caraousel = (props) => {
	const { slides } = props;
	
	return (
		<React.Fragment>
			<AutoRotatingCarousel
				open={true}
				onClose={() => setState({ open: false })}
				onStart={() => setState({ open: false })}
				style={{ position: 'absolute' }}
			>
				{slideContent(slides)}
			</AutoRotatingCarousel>
		</React.Fragment>
	)
}

export default Caraousel;