(function () {
    // Checks for ads and manipulates the video or uses skip button if present
    function handleVideoAd() {
        const video = document.querySelector('video');
        const adElement = document.querySelector('.video-ads.ytp-ad-module');
        const popup = document.querySelector('.ytd-popup-container');
        // Support for Hulu
        const adVideo = document.querySelector('#ad-video-player');
        if (video && adElement && adElement.children.length > 0) {
            muteAndSpeedUp(video, 16.0)
        }
        if (popup) {
            popup.style.display = 'none';
        }
        // Skip button seems to be acessible at initialization, if its ever present
        const skipButton = document.querySelector('.ytp-ad-skip-button, .ytp-ad-skip-button-modern .ytp-skip-ad-button');
        if (skipButton) {
            skipButton.click();
            console.log('Used Button to Skip Ad');
        }
        if (adVideo) {
            muteAndSpeedUp(adVideo, 15.0);
        }
    }

    function muteAndSpeedUp(videoElement, playbackRate) {
        videoElement.muted = true;
        videoElement.playbackRate = playbackRate;
    }

    function initializeAdHandling() {
        handleVideoAd();

        const observer = new MutationObserver(handleVideoAd);
        observer.observe(document.body, { childList: true, subtree: true });
    }
    // Delay before executing the script
    setTimeout(initializeAdHandling, 500);
})();