import { useState, useEffect } from 'react';

const ProgressiveImage = ({ placeholderSrc, src, ...props }) => {
  const [imageSource, setImageSource] = useState(placeholderSrc || src);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSource(src);
    };
  }, [src]);

  const imageClass = placeholderSrc && imageSource === placeholderSrc
    ? "blur-md"
    : "transition ease-out duration-1000"

  return (
    <img 
      {...{ src: imageSource, ...props}}
      alt={props.alt || ""}
      className={`${imageClass}`}
    />
  );
}

export default ProgressiveImage;
