
/*
Maintaing the Displa Image Slider Context, classless function accessible through out
*/

import React, { createContext, useState, useEffect } from 'react';

export const DisplayImageSliderContext = createContext();

const DisplayImageSliderContextProvider = (props) => {
	const initialChecked = [true];
	const intitalDirection = "right";

	const [DIsliderChecked, setDIsliderChecked] = useState(initialChecked);
	const [DIsliderDirection, setDIsliderDirection] = useState(intitalDirection);

	const updateDIsliderChecked = (state) => {
		setDIsliderChecked(state)
	};

	const updateDIsliderDirection = (state) => {
		setDIsliderDirection(state)
	};

	useEffect(() => {
		return () => {
			updateDIsliderChecked(initialChecked);
			updateDIsliderDirection(intitalDirection)
		}
	}, []);

	return (
		<DisplayImageSliderContext.Provider value={{ DIsliderChecked, updateDIsliderChecked, DIsliderDirection, updateDIsliderDirection }}>
			{props.children}
		</DisplayImageSliderContext.Provider>
	)
}

export default DisplayImageSliderContextProvider;