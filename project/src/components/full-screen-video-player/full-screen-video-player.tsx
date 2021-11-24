import {useEffect, useRef, useState} from 'react';
import {useParams} from 'react-router';
import {AppRoute} from '../../const';
import NotFound from '../not-found/not-found';
import FullScreenPlayButton from '../full-screen-video-player/full-screen-play-button';
import {Link} from 'react-router-dom';
import {getRemainingTime} from '../../utils';
import {useSelector} from 'react-redux';
import {getFilm} from '../../store/films-data/selectors';
import LoadingScreen from '../loading-screen/loading-screen';

const GHOST_PERCENTAGE = 100;
const LOADING_TIME = '00:00';


function FullScreenVideoPlayer(): JSX.Element {
  const id = parseInt(useParams<{id: string}>().id, 10);
  const selectedMovie = useSelector(getFilm);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const {current: videoElement} = videoRef;
  const progressBarRef = useRef<HTMLProgressElement>(null);
  const {current: progressBarElement} = progressBarRef;

  const [isReady, setReady] = useState(false);
  const [isPlay, setPlay] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [{duration, remainingTime}, setDuration] = useState({duration: 0, remainingTime: 0});

  useEffect(() => {
    if (!isReady || !videoElement) {
      return;
    }

    const videoDuration = Math.round(videoElement.duration);
    setDuration((state) => ({
      ...state, duration: videoDuration, remainingTime: videoDuration,
    }));
  }, [isReady, videoElement]);

  useEffect(() => {
    const play = async (video: HTMLVideoElement) => {
      try {
        await video.play();
      } catch {
        setPlay(false);
      }
    };

    if (!videoElement) {
      return;
    }

    if (isPlay) {
      play(videoElement);
      return;
    }

    videoElement.pause();
  }, [isPlay, videoElement]);

  const remainingMovieTime  = isReady ? getRemainingTime(remainingTime) : LOADING_TIME;

  const handlePlayButtonClick = () => {
    setPlay((prevState) => !prevState);
  };

  const handleDataLoaded = () => {
    setReady(true);
  };

  const handleTimeUpdate = () => {
    if (!videoElement || !progressBarElement) {
      return;
    }

    const currentVideoTime = videoElement.currentTime;
    const currentPercentage = currentVideoTime / duration * GHOST_PERCENTAGE;
    const currentRemainingTime = Math.round(duration * (GHOST_PERCENTAGE - currentPercentage) / GHOST_PERCENTAGE);

    setDuration((state) => ({
      ...state, remainingTime: currentRemainingTime,
    }));
    setCurrentTime(currentPercentage);
    progressBarElement.value = currentVideoTime;
  };

  const handleFullScreenClick = () => {
    if (videoElement) {
      videoElement.requestFullscreen();
    }
  };

  if (!selectedMovie) {
    return <NotFound />;
  }

  return (
    <div className="player">

      {!isReady && <LoadingScreen />}

      <video
        className="player__video"
        ref={videoRef}
        src={selectedMovie.videoLink}
        poster={selectedMovie.previewImage}
        onTimeUpdate={handleTimeUpdate}
        onLoadedData={handleDataLoaded}
      />

      <Link
        className="player__exit"
        to={AppRoute.Film.replace(':id', id.toString())}
      >
        Exit
      </Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" max={duration} ref={progressBarRef}/>
            <div className="player__toggler" style={{left: `${currentTime}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{remainingMovieTime }</div>
        </div>

        <div className="player__controls-row">
          <FullScreenPlayButton
            isPlay={isPlay}
            isReady={isReady}
            onPlayButtonClick={handlePlayButtonClick}
          />

          <button
            type="button"
            className="player__full-screen"
            disabled={!isReady}
            onClick={handleFullScreenClick}
          >

            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"/>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FullScreenVideoPlayer;
