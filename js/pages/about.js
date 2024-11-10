// js/pages/about.js

document.addEventListener('DOMContentLoaded', function() {
    // Initialize video player
    initVideoPlayer();
    
    // Initialize audio player
    initAudioPlayer();
    
    // Initialize timeline animations
    initTimelineAnimations();
    
    // Initialize team member cards
    initTeamCards();
});

function initVideoPlayer() {
    const video = document.querySelector('video');
    if (video) {
        // Add custom video controls if needed
        video.addEventListener('play', function() {
            console.log('Video started playing');
        });

        video.addEventListener('pause', function() {
            console.log('Video paused');
        });
    }
}

function initAudioPlayer() {
    const audio = document.querySelector('audio');
    if (audio) {
        // Add custom audio controls if needed
        audio.addEventListener('play', function() {
            console.log('Audio started playing');
        });

        audio.addEventListener('pause', function() {
            console.log('Audio paused');
        });
    }
}

function initTimelineAnimations() {
    // Add scroll animation for timeline nodes
    const timelineNodes = document.querySelectorAll('.timeline-nodes');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeIn');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    timelineNodes.forEach(node => {
        observer.observe(node);
    });
}

function initTeamCards() {
    // Add hover effects for team member cards
    const teamCards = document.querySelectorAll('.team-card');
    
    teamCards.forEach(card => {
        card.addEventListener('mouseover', function() {
            this.querySelector('.team-social')?.classList.add('show');
        });

        card.addEventListener('mouseout', function() {
            this.querySelector('.team-social')?.classList.remove('show');
        });
    });
}

// Function to play/pause background music
function toggleBackgroundMusic() {
    const audio = document.querySelector('audio');
    if (audio) {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }
}

// Function to handle video playback
function handleVideoPlayback(action) {
    const video = document.querySelector('video');
    if (video) {
        switch(action) {
            case 'play':
                video.play();
                break;
            case 'pause':
                video.pause();
                break;
            case 'restart':
                video.currentTime = 0;
                video.play();
                break;
        }
    }
}