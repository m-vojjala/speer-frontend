
import { Gallery, GalleryImage } from "react-gesture-gallery";
import Button from './Button'
import { useState} from "react";
import ImageText from "./ImageText";
import Red from "./Red";
import Footer from "./Footer";



export default function Slider() {
  const [index, setIndex] = useState(0);

  const images = [
    {
      src:
        "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
    },
    {
      src:
        "https://images.unsplash.com/photo-1506026616759-d6c55fc036ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
    },
    {
      src:
        "https://images.unsplash.com/photo-1598387845687-b0a3b65d8048?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80"
    }
  ];
  // Rotate images as slide shoe iwth interval 4 seconds
  // useEffect(() => {
  //     const next = (index + 1) % images.length;
  //     const id = setTimeout(() => setIndex(next), 4000);
  //     return () => clearTimeout(id);
  //   });
  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      backgroundColor: "#0a0a0a", cursor: 'default'
    }} >
      <Gallery
        index={index}
        onRequestChange={i => {
          setIndex(i);
        }}
      >
        {/* Mapping through the images array and function called for every element of the array */}
        {images.map(image => (
          <div>
            <ImageText />
            <Button />
            <GalleryImage objectFit="contain" key={image} src={image.src} />
          </div>
        ))}
      </Gallery>
      <Red />
      <Footer />
    </div>
  );
}