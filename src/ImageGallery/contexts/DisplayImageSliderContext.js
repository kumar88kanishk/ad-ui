
/*
Maintaing the Displa Image Slider Context, classless function accessible through out
*/

import React, { createContext, useState, useEffect, useContext } from 'react';
import { ImageGalleryContext } from "./ImageGalleryContext";

export const DisplayImageSliderContext = createContext();

const DisplayImageSliderContextProvider = (props) => {
	const {  displayImageSlider } = useContext(ImageGalleryContext);
	const [DIsliderChecked, setDIsliderChecked] = useState(displayImageSlider);

	const intitalDirection = "right";
	const [DIsliderDirection, setDIsliderDirection] = useState(intitalDirection);

	
	const updateDIsliderChecked = (state) => {
		setDIsliderChecked(state)
	};

	const updateDIsliderDirection = (state) => {
		setDIsliderDirection(state)
	};

	useEffect(() => {
		updateDIsliderChecked(displayImageSlider);
	}, [displayImageSlider]);

	return (
		<DisplayImageSliderContext.Provider value={{ DIsliderChecked, updateDIsliderChecked, DIsliderDirection, updateDIsliderDirection }}>
			{props.children}
		</DisplayImageSliderContext.Provider>
	)
}

export default DisplayImageSliderContextProvider;