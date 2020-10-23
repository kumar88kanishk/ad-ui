import React from 'react';
import ImageGalleryContextProvider from './ImageGallery/contexts/ImageGalleryContext';
import GalleryTabContextProvider from './ImageGallery/contexts/GalleryTabContext';
import ImageBarSliderContext from './ImageGallery/contexts/ImageBarSliderContext';
import DisplayImageSliderContextProvider from './ImageGallery/contexts/DisplayImageSliderContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import StyleGuide from './style-guide';
import ImageGallery from './ImageGallery';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/style-guide">Style Guide</Link>
            </li>
            <li>
              <Link to="/photo-gallery">Photo Gallery</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/style-guide">
            <StyleGuide />
          </Route>
          <Route path="/photo-gallery">
            <GalleryTabContextProvider>
              <ImageGalleryContextProvider>
                <ImageBarSliderContext >
                  <DisplayImageSliderContextProvider>
                    <ImageGallery imagesList={{
                      exterior: [
                        {
                          url: "/images/1.jpg",
                          alt: "1.jpg",
                        },
                        {
                          url: "/images/2.jpg",
                          alt: "2.jpg",
                        },
                        {
                          url: "/images/3.jpg",
                          alt: "3.jpg",
                        },
                      ],
                      interior: [
                        {
                          url: "/images/4.jpg",
                          alt: "4.jpg",
                        },
                        {
                          url: "/images/5.jpg",
                          alt: "5.jpg",
                        },
                        {
                          url: "/images/6.jpg",
                          alt: "6.jpg",
                        },
                      ],
                    }} tabs={["exterior", "interior"]} defaultTab={"exterior"} chunkSize={2} />
                  </DisplayImageSliderContextProvider>
                </ImageBarSliderContext>
              </ImageGalleryContextProvider>
            </GalleryTabContextProvider>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch >
      </div >
    </Router >
  );
}

function Home() {
  return <h2>Home</h2>;
}
