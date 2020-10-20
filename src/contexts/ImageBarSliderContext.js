
/*
Maintaing the Slider Context, classless function accessible through out
*/

import React, { createContext, useState, useEffect } from 'react';

export const ImageBarSliderContext = createContext();

const ImageBarSliderContextProvider = (props) => {
	const initialChecked = [true];
	const intitalDirection = "right";

	const [IBsliderChecked, setIBsliderChecked] = useState(initialChecked);
	const [IBsliderDirection, setIBsliderDirection] = useState(intitalDirection);

	const updateIBsliderChecked = (state) => {
		setIBsliderChecked(state)
	};

	const updateIBsliderDirection = (state) => {
		setIBsliderDirection(state)
	};

	useEffect(() => {
		return () => {
			updateIBsliderChecked(initialChecked);
			updateIBsliderDirection(intitalDirection)
		}
	}, []);

	return (
		<ImageBarSliderContext.Provider value={{ IBsliderChecked, updateIBsliderChecked, IBsliderDirection, updateIBsliderDirection }}>
			{props.children}
		</ImageBarSliderContext.Provider>
	)
}

export default ImageBarSliderContextProvider;