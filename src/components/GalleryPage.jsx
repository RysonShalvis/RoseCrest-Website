import "../scss/_gallery-page.scss";
import ImageGallery from "react-image-gallery";

const images = import.meta.glob("/src/media/rosecrest-gallery/*.jpg");
const imageList = Object.keys(images); //.map((image) => images(image));

const objectArray = imageList.map((image) => {
  let array = image.split("");
  array.splice(11, 17, "image-gallery-thumbnails");
  array.splice(array.length - 4, 0, "-min");
  let string = array.join("");
  
  return {
    original: image,
    thumbnail: string,
  };
});

const GalleryPage = () => {
  return (
    <div className="gallery-page">
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        items={objectArray}
      />
    </div>
  );
};

export default GalleryPage;
