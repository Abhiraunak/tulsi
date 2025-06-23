// components/BackgroundVideo.tsx
const BackgroundVideo = () => {
  return (
    <video
      className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src="/Background-video.mp4" type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;
