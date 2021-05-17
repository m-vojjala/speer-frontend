
import { Gallery, GalleryImage } from "react-gesture-gallery";
import Button from './Button'
import { useState,useEffect } from "react";
import ImageText from "./ImageText";


export default function Slider() {
  const [index, setIndex] = useState(0);
  
 
  const images = [
    {
      src:
        "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
    },
    {
      src:
        "https://images.unsplash.com/photo-1619229665876-f54b2276b7bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
    },
    {
      src:
        "https://images.unsplash.com/photo-1598387845687-b0a3b65d8048?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80"
    }
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      if (index === images.length - 1) {
        setIndex(0);
      } else {
        setIndex(prevVal => prevVal + 1);
      }
    }, 4000);

    return () => clearInterval(interval);
  });
  return (
    <div  style={{
      height: "80vh",
      width: "100vw",
      backgroundColor: "#0a0a0a"}} >
      <Gallery
        index={index}
        onRequestChange={i => {
          setIndex(i);
        }}
      >
      {images.map(image => (
  <div>
    <ImageText />
     <Button/>
    <GalleryImage objectFit="contain" key={image} src={image.src} />
   
  </div>
))}
      </Gallery>
    </div>
  );
}