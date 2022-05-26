import React, { useEffect, useRef, useState, Fragment } from "react";

import "./VideoPlayer.scss";

const VOLUME_STATE = {
  LOW: "low",
  HIGH: "high",
  MUTE: "mute",
};

const SKIP = 5;

export const VideoPlayer = ({ url, posterUrl }) => {
  const videoContainer = useRef();

  const video = useRef();

  const volumeRef = useRef();

  const previewRef = useRef();

  const [currentTime, setCurrentTime] = useState();

  const [totalDuration, setTotalDuration] = useState();

  const [isFullScreen, setIsFullScreen] = useState(false);

  const [volumeState, setVolumeState] = useState(VOLUME_STATE.HIGH);

  const [isPause, setIsPause] = useState(true);

  const [isMiniPlayer, setIsMiniPlayer] = useState(false);

  const [progress, setProgress] = useState(0);

  const [isPreview, setIsPreview] = useState(false);

  const [previewTime, setPreviewTime] = useState();

  useEffect(() => {
    // console.dir(video.current);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("fullscreenchange", handleFullScreenChange);
    document.addEventListener(
      "leavepictureinpicture",
      handleLeavePictureInPicture
    );
    return () => {
      document.addEventListener("keydown", handleKeyDown);
      document.removeEventListener("keypress", handleFullScreenChange);
      document.removeEventListener(
        "leavepictureinpicture",
        handleLeavePictureInPicture
      );
    };
  }, []);

  const handleKeyDown = ({ keyCode }) => {
    // Right Arrow
    if (keyCode === 39) {
      let newTime = video.current.currentTime + SKIP;
      let totalTime = video.current.duration;
      if (newTime > totalDuration) {
        video.current.currentTime = totalTime;
      } else {
        video.current.currentTime = newTime;
      }
    }

    // Left Arrow
    if (keyCode === 37) {
      let newTime = video.current.currentTime - SKIP;
      if (newTime < 0) {
        video.current.currentTime = 0;
      } else {
        video.current.currentTime = newTime;
      }
    }

    // Space Bar
    if (keyCode === 32) {
      if (video.current.paused) {
        togglePlay();
      } else {
        togglePause();
      }
    }
  };

  const handleFullScreenChange = (e) => {
    if (document.fullscreenElement) return;
    setIsFullScreen(false);
  };

  const handleLeavePictureInPicture = () => {
    setIsMiniPlayer(false);
  };

  const handleMetaData = ({ target: { duration } }) => {
    setTotalDuration(formatTime(duration, true));
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat("en-IN", { minimumIntegerDigits: 2 }).format(
      num
    );
  };

  const formatTime = (duration, isCurrentTime = false) => {
    let hours = Math.floor(duration / 3600);
    let minutes = Math.floor((duration - hours * 3600) / 60);
    let seconds = Math.floor(duration - hours * 3600 - minutes * 60);
    isCurrentTime && setCurrentTime(`${hours > 0 ? `00:` : ""}00:00`);
    return `${hours > 0 ? `${formatNumber(hours)}:` : ""}${formatNumber(
      minutes
    )}:${formatNumber(seconds)}`;
  };

  const handleUpdateTimer = ({ target: { currentTime: time, duration } }) => {
    let percent = (time / duration) * 100;
    setCurrentTime(formatTime(time));
    if (isPreview) return;
    setProgress(percent);
  };

  const handleVolumeSlider = ({ target: { valueAsNumber } }) => {
    if (valueAsNumber === 0) {
      video.current.muted = true;
      setVolumeState(VOLUME_STATE.MUTE);
    }
    if (valueAsNumber > 0.7) setVolumeState(VOLUME_STATE.HIGH);

    if (valueAsNumber < 0.7 && valueAsNumber !== 0)
      setVolumeState(VOLUME_STATE.LOW);

    video.current.volume = valueAsNumber;
  };

  const togglePlay = () => {
    video.current.play();
    setIsPause(false);
  };

  const togglePause = () => {
    video.current.pause();
    setIsPause(true);
  };

  const handleMute = () => {
    video.current.muted = true;
    setVolumeState(VOLUME_STATE.MUTE);
  };

  const handleUnMute = () => {
    const { volume } = video.current;

    if (volume === 0) {
      setVolumeState(VOLUME_STATE.LOW);
      volumeRef.current.valueAsNumber = 0.1;
      video.current.volume = 0.1;
    }
    if (volume > 0.7) setVolumeState(VOLUME_STATE.HIGH);

    if (volume < 0.7) setVolumeState(VOLUME_STATE.LOW);

    video.current.muted = false;
  };

  const toggleFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      setIsFullScreen(false);
    } else {
      if (document.fullscreenEnabled) {
        videoContainer.current.requestFullscreen();
        setIsFullScreen(true);
      }
    }
  };
  const togglePictureInPicture = () => {
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture();
      setIsMiniPlayer(false);
    } else {
      if (document.pictureInPictureEnabled) {
        video.current.requestPictureInPicture();
        setIsMiniPlayer(true);
      }
    }
  };

  const toggleProgessBar = ({
    nativeEvent: { offsetX },
    target: { clientWidth },
  }) => {
    const percent = (offsetX / clientWidth) * 100;
    const newCurrentTime = (video.current.duration * percent) / 100;
    video.current.currentTime = newCurrentTime;
  };

  const handleVideoEnd = () => {
    video.current.currentTime = 0;
    setIsPause(true);
    setProgress("00:00");
    setCurrentTime();
  };

  const preventPointer = (e) => {
    e.stopPropagation();
  };

  const hoverProgressBar = ({ nativeEvent: { x } }) => {
    const progressBar = videoContainer.current
      .querySelector(".rc-video-progress")
      .getBoundingClientRect();
    const percent = ((x - progressBar.x) / progressBar.width) * 100;
    if (percent < 0) return;
    const time = (video.current.duration * percent) / 100;
    const tooltip = videoContainer.current.querySelector(
      ".rc-video-timer-tooltip"
    );

    tooltip.classList.add("show");
    tooltip.style.setProperty(
      "--tooltip-left",
      `${x - progressBar.x - tooltip.clientWidth / 2}px`
    );
    if (isPreview) {
      setProgress(percent);
    }
    setPreviewTime(time);
  };

  const leaveProgressBar = () => {
    const tooltip = videoContainer.current.querySelector(
      ".rc-video-timer-tooltip"
    );

    tooltip.classList.remove("show");
  };

  const mouseDownOnPointer = () => {
    setIsPreview(true);
  };

  const mouseUpOnPointer = ({ nativeEvent: { x } }) => {
    const progressBar = videoContainer.current
      .querySelector(".rc-video-progress")
      .getBoundingClientRect();
    const percent = ((x - progressBar.x) / progressBar.width) * 100;
    console.log(percent);
    const newCurrentTime = (video.current.duration * percent) / 100;
    video.current.currentTime = newCurrentTime;
    setIsPreview(false);
  };

  return (
    <div
      ref={videoContainer}
      className={`rc-video-player ${isFullScreen ? "fullscreen" : ""} ${
        isPreview ? "preview" : ""
      }`}
    >
      <video
        ref={video}
        onLoadedMetadata={handleMetaData}
        onTimeUpdate={handleUpdateTimer}
        onEnded={handleVideoEnd}
        poster={posterUrl}
      >
        <source src={url} type="video/mp4" />
      </video>
      <div className="rc-video-controls">
        <div
          className="rc-video-progress"
          style={{ "--progress-width": `${progress}%` }}
          onClick={toggleProgessBar}
          onMouseMove={hoverProgressBar}
          onMouseLeave={leaveProgressBar}
        >
          <div className="rc-video-timer-tooltip">
            <span>{formatTime(previewTime)}</span>
          </div>
          <div
            className="rc-progress-pointer"
            onClick={preventPointer}
            onMouseDown={mouseDownOnPointer}
            onMouseUp={mouseUpOnPointer}
          ></div>
        </div>
        <div className="rc-video-actions">
          <div className="left-actions">
            <div>
              {isPause ? (
                <button onClick={togglePlay}>
                  <svg viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M8,5.14V19.14L19,12.14L8,5.14Z"
                    />
                  </svg>
                </button>
              ) : (
                <button onClick={togglePause}>
                  <svg viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M14,19H18V5H14M6,19H10V5H6V19Z"
                    />
                  </svg>
                </button>
              )}
            </div>
            <div className="volume-controls">
              {volumeState == "high" && (
                <button onClick={handleMute}>
                  <svg viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"
                    />
                  </svg>
                </button>
              )}
              {volumeState == "low" && (
                <button onClick={handleMute}>
                  <svg viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M5,9V15H9L14,20V4L9,9M18.5,12C18.5,10.23 17.5,8.71 16,7.97V16C17.5,15.29 18.5,13.76 18.5,12Z"
                    />
                  </svg>
                </button>
              )}
              {volumeState == "mute" && (
                <button onClick={handleUnMute}>
                  <svg viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z"
                    />
                  </svg>
                </button>
              )}
              <input
                ref={volumeRef}
                type="range"
                min={0}
                max={1}
                defaultValue={1}
                step={0.1}
                onChange={handleVolumeSlider}
              />
            </div>
            <div className="video-duration">
              <span>{currentTime}</span>
              <span>/</span>
              <span>{totalDuration}</span>
            </div>
          </div>
          <div className="right-actions">
            {!isFullScreen && (
              <Fragment>
                {isMiniPlayer ? (
                  <button onClick={togglePictureInPicture}>
                    <svg viewBox="0 0 24 24">
                      <g
                        fill="none"
                        fillRule="evenodd"
                        stroke="none"
                        strokeWidth="1"
                      >
                        <g transform="translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) ">
                          <path
                            d="M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z"
                            fill="currentColor"
                            fillRule="nonzero"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </button>
                ) : (
                  <button onClick={togglePictureInPicture}>
                    <svg viewBox="0 0 36 36">
                      <path
                        fill="currentColor"
                        d="M25,17 L17,17 L17,23 L25,23 L25,17 L25,17 Z M29,25 L29,10.98 C29,9.88 28.1,9 27,9 L9,9 C7.9,9 7,9.88 7,10.98 L7,25 C7,26.1 7.9,27 9,27 L27,27 C28.1,27 29,26.1 29,25 L29,25 Z M27,25.02 L9,25.02 L9,10.97 L27,10.97 L27,25.02 L27,25.02 Z"
                      ></path>
                    </svg>
                  </button>
                )}
              </Fragment>
            )}
            {!isMiniPlayer && (
              <Fragment>
                {isFullScreen ? (
                  <button onClick={toggleFullScreen}>
                    <svg viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"
                      />
                    </svg>
                  </button>
                ) : (
                  <button onClick={toggleFullScreen}>
                    <svg viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
                      />
                    </svg>
                  </button>
                )}
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
