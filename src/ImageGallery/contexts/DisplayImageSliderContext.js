
/*
Maintaing the Displa Image Slider Context, classless function accessible through out
*/

import React, { createContext, useEffect, useState, useContext } from 'react';
import { GalleryTabContext } from "./GalleryTabContext";
import { ImageGalleryContext } from "./ImageGalleryContext";
import { populateFalseArray } from "../utils";
export const DisplayImageSliderContext = createContext();

const DisplayImageSliderContextProvider = (props) => {
	const { activeTab } = useContext(GalleryTabContext)
	const { images } = useContext(ImageGalleryContext)

	const [DIsliderChecked, setDIsliderChecked] = useState([]);
	const intitalDirection = "right";
	const [DIsliderDirection, setDIsliderDirection] = useState(intitalDirection);


	const updateDIsliderChecked = (state) => {
		setDIsliderChecked(state)
	};

	const updateDIsliderDirection = (state) => {
		setDIsliderDirection(state)
	};

	useEffect(() => {
		updateDIsliderChecked([true, ...populateFalseArray(images[activeTab].length - 1)])

	}, [images,activeTab])
	return (
		<DisplayImageSliderContext.Provider value={{ DIsliderChecked, updateDIsliderChecked, DIsliderDirection, updateDIsliderDirection }}>
			{props.children}
		</DisplayImageSliderContext.Provider>
	)
}

export default DisplayImageSliderContextProvider;