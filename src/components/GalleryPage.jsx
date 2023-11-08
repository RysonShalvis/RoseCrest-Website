import "../scss/_gallery-page.scss";
import ImageGallery from "react-image-gallery";
import imageOne from "../media/facility images/IMG0001.jpg";
import imageTwo from "../media/facility images/IMG0002.jpg";
import imageThree from "../media/facility images/IMG0003.jpg";
import imageFour from "../media/facility images/IMG0004.jpg";
import imageFive from "../media/facility images/IMG0005.jpg";
import imageSeven from "../media/facility images/IMG0007.jpg";
import imageEight from "../media/facility images/IMG0008.jpg";
import imageNine from "../media/facility images/IMG0009.jpg";

const images = [
  {
    original: imageOne,
    thumbnail: imageOne,
  },
  {
    original: imageTwo,
    thumbnail: imageTwo,
  },
  {
    original: imageThree,
    thumbnail: imageThree,
  },
  {
    original: imageFour,
    thumbnail: imageFour,
  },

  {
    original: imageFive,
    thumbnail: imageFive,
  },
  {
    original: imageSeven,
    thumbnail: imageSeven,
  },
  {
    original: imageEight,
    thumbnail: imageEight,
  },
  {
    original: imageNine,
    thumbnail: imageNine,
  },
];

const GalleryPage = () => {
  return (
    <div className="gallery-page">
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        items={images}
      />
    </div>
  );
};

export default GalleryPage;
