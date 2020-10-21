
/*
Maintaing the Slider Context, classless function accessible through out
*/

import React, { createContext, useState, useEffect, useContext } from 'react';
import { ImageGalleryContext } from "./ImageGalleryContext";

export const ImageBarSliderContext = createContext();

const ImageBarSliderContextProvider = (props) => {
	const { imageBarSlider } = useContext(ImageGalleryContext);
	const intitalDirection = "right";
	const [IBsliderChecked, setIBsliderChecked] = useState(imageBarSlider);
	const [IBsliderDirection, setIBsliderDirection] = useState(intitalDirection);

	const updateIBsliderChecked = (state) => {
		setIBsliderChecked(state)
	};

	const updateIBsliderDirection = (state) => {
		setIBsliderDirection(state)
	};

	useEffect(() => {
		updateIBsliderChecked(imageBarSlider);
	}, [imageBarSlider])

	return (
		<ImageBarSliderContext.Provider value={{ IBsliderChecked, updateIBsliderChecked, IBsliderDirection, updateIBsliderDirection }}>
			{props.children}
		</ImageBarSliderContext.Provider>
	)
}


export default ImageBarSliderContextProvider;