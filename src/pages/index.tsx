import { useState } from "react";

const baseUrl = "https://picsum.photos/300/200?image=";
function Slideshow() {
  const [img, setImg] = useState(1);
  const imgUrl = baseUrl + img.toString();

  function goToStart() {
    setImg(0);
  }

  function goToPrevImg() {}

  function goToNextImg() {}

  function goToEnd() {}

  return (
    <div className="Slideshow">
      <h2>Image {img}</h2>
      <button onClick={() => goToStart()}>start</button>
      <button onClick={() => goToPrevImg()}>prev</button>
      <img src={imgUrl} alt="slideshow" />
      <button onClick={() => goToNextImg()}>next</button>
      <button onClick={() => goToEnd()}>end</button>
    </div>
  );
}
export default Slideshow;
