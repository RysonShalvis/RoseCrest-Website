import backgroundVideo from "../media/filler-landing-video.mp4"

const LandingPage = () => {
  return (
    <div className="landing-page">
        <div className="background-video">
            <video autoPlay muted loop src={backgroundVideo}></video>
        </div>
    </div>
  )
}

export default LandingPage