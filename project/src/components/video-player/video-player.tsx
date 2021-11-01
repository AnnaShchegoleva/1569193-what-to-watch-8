import {useEffect, useRef} from 'react';

type VideoPlayerProps = {
  poster: string,
  isPlaying: boolean;
  src: string;
}

const PREVIEW_DELAY = 1000;

function VideoPlayer(props: VideoPlayerProps): JSX.Element {
  const {poster, isPlaying, src} = props;

  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    if (videoRef.current && isPlaying) {
      timeoutId = setTimeout(() => {
        videoRef.current?.play();
      }, PREVIEW_DELAY);
    }

    if (videoRef.current && !isPlaying) {
      videoRef.current.load();
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isPlaying, videoRef]);

  return (
    <video
      ref={videoRef}
      poster={poster}
      src={src}
      width="280"
      height="175"
      muted
    />
  );
}

export default VideoPlayer;
