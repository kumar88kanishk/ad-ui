
/*
Maintaing the Slider Context, classless function accessible through out
*/

import React, { createContext, useState, useEffect, useContext } from 'react';
import { GalleryTabContext } from "./GalleryTabContext";
import { ImageGalleryContext } from "./ImageGalleryContext";
import { populateFalseArray } from "../utils";

export const ImageBarSliderContext = createContext();

const ImageBarSliderContextProvider = (props) => {
	const { activeTab } = useContext(GalleryTabContext)
	const { images, imageChunks } = useContext(ImageGalleryContext)
	const intitalDirection = "right";
	const [IBsliderChecked, setIBsliderChecked] = useState([]);
	const [IBsliderDirection, setIBsliderDirection] = useState(intitalDirection);

	const updateIBsliderChecked = (state) => {
		setIBsliderChecked(state)
	};

	const updateIBsliderDirection = (state) => {
		setIBsliderDirection(state)
	};
	useEffect(() => {
		updateIBsliderChecked([true, ...populateFalseArray(imageChunks.length - 1)])
	}, [images, imageChunks, activeTab])
	return (
		<ImageBarSliderContext.Provider value={{ IBsliderChecked, updateIBsliderChecked, IBsliderDirection, updateIBsliderDirection }}>
			{props.children}
		</ImageBarSliderContext.Provider>
	)
}


export default ImageBarSliderContextProvider;