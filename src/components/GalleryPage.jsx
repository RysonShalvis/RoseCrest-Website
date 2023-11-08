import "../scss/_gallery-page.scss";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "/src/media/facility images/IMG0001.jpg",
    thumbnail: "/src/media/facility images/IMG0001.jpg",
  },
  {
    original: "/src/media/facility images/IMG0002.jpg",
    thumbnail: "/src/media/facility images/IMG0002.jpg",
  },
  {
    original: "/src/media/facility images/IMG0003.jpg",
    thumbnail: "/src/media/facility images/IMG0003.jpg",
  },
  {
    original: "/src/media/facility images/IMG0004.jpg",
    thumbnail: "/src/media/facility images/IMG0004.jpg",
  },
  {
    original: "/src/media/facility images/IMG0005.jpg",
    thumbnail: "/src/media/facility images/IMG0005.jpg",
  },
  {
    original: "/src/media/facility images/IMG0007.jpg",
    thumbnail: "/src/media/facility images/IMG0007.jpg",
  },
  {
    original: "/src/media/facility images/IMG0008.jpg",
    thumbnail: "/src/media/facility images/IMG0008.jpg",
  },
  {
    original: "/src/media/facility images/IMG0009.jpg",
    thumbnail: "/src/media/facility images/IMG0009.jpg",
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
