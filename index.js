// Draggable Function
function makeDraggable(element) {
    let offsetX, offsetY, isDragging = false;

    element.addEventListener('mousedown', (e) => {
        if (e.target.tagName === 'BUTTON' || e.target.tagName === 'IMG') return; // Prevent dragging if the target is a button or image

        isDragging = true;
        offsetX = e.clientX - element.getBoundingClientRect().left;
        offsetY = e.clientY - element.getBoundingClientRect().top;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', () => {
            isDragging = false;
            document.removeEventListener('mousemove', onMouseMove);
        }, { once: true });
        console.log(`Dragging started for ${element.className}`);
    });

    function onMouseMove(e) {
        if (isDragging) {
            element.style.position = 'absolute';
            element.style.left = `${e.clientX - offsetX}px`;
            element.style.top = `${e.clientY - offsetY}px`;
            console.log(`Dragging ${element.className} to (${e.clientX - offsetX}px, ${e.clientY - offsetY}px)`);
        }
    }
}

// Initialize Draggable Elements and Other Functionality
document.addEventListener('DOMContentLoaded', () => {
    // Ensure .flower img is not draggable
    const flowerImgs = document.querySelectorAll('.flower img');
    flowerImgs.forEach(img => {
        img.addEventListener('mousedown', (e) => e.stopPropagation());
    });

    // Initialize Draggable Elements
    const draggableElements = document.querySelectorAll('.intro, .flower, .music, .overview2, .overview, .location, .stars, .statement');
    draggableElements.forEach(el => {
        console.log(`Initializing drag for ${el.className}`);
        makeDraggable(el);
    });

    // Initialize Close Buttons
    const closeButtons = document.querySelectorAll('.close-btn');
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const parentBox = button.closest('.intro, .flower, .music, .overview, .overview2, .location, .stars, .statement');
            if (parentBox) {
                parentBox.remove();
                console.log(`Removed ${parentBox.className}`);
            }
        });
    });

    // Initialize Resize Functionality for .flower
    const flowerDivs = document.querySelectorAll('.flower');
    flowerDivs.forEach(flower => {
        const resizer = document.createElement('div');
        resizer.className = 'resizer';
        flower.appendChild(resizer);

        let startX, startY, startWidth, startHeight;

        resizer.addEventListener('mousedown', (e) => {
            e.preventDefault();
            startX = e.clientX;
            startY = e.clientY;
            startWidth = parseFloat(getComputedStyle(flower, null).width.replace('px', ''));
            startHeight = parseFloat(getComputedStyle(flower, null).height.replace('px', ''));

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp, { once: true });
        });

        function onMouseMove(e) {
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            
            // Calculate the new width and height
            const newWidth = Math.max(startWidth + dx, 50); // Minimum width
            const newHeight = Math.max(startHeight + dy, 50); // Minimum height
            
            // Maintain aspect ratio
            const aspectRatio = startWidth / startHeight;
            if (aspectRatio > 1) {
                // Width is greater than height
                flower.style.width = `${newWidth}px`;
                flower.style.height = `${newWidth / aspectRatio}px`; // Adjust height based on width
            } else {
                // Height is greater than width
                flower.style.height = `${newHeight}px`;
                flower.style.width = `${newHeight * aspectRatio}px`; // Adjust width based on height
            }
        }
        
        function onMouseUp() {
            document.removeEventListener('mousemove', onMouseMove);
        }
    });
});

// Toggle Dropdown Menu
function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdown-content");
    dropdownContent.classList.toggle("show");
}

// Close Dropdown Menu if clicking outside
window.addEventListener('click', (event) => {
    if (!event.target.matches('.dropdown button')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
});

// Sparkle Effect (keep as is)
var colour = "#1b1b1b";
var sparkles = 50;
var x = ox = 400;
var y = oy = 300;
var swide = 800;
var shigh = 600;
var sleft = sdown = 0;
var tiny = [];
var star = [];
var starv = [];
var starx = [];
var stary = [];
var tinyx = [];
var tinyy = [];
var tinyv = [];

window.onload = function() {
    if (document.getElementById) {
        for (var i = 0; i < sparkles; i++) {
            var rats = createDiv(3, 3);
            rats.style.visibility = "hidden";
            rats.style.zIndex = "999";
            document.body.appendChild(tiny[i] = rats);
            starv[i] = 0;
            tinyv[i] = 0;
            var rats = createDiv(5, 5);
            rats.style.backgroundColor = "transparent";
            rats.style.visibility = "hidden";
            rats.style.zIndex = "999";
            var rlef = createDiv(1, 5);
            var rdow = createDiv(5, 1);
            rats.appendChild(rlef);
            rats.appendChild(rdow);
            rlef.style.top = "2px";
            rlef.style.left = "0px";
            rdow.style.top = "0px";
            rdow.style.left = "2px";
            document.body.appendChild(star[i] = rats);
        }
        set_width();
        sparkle();
    }
}

// Other functions related to sparkle effect (keep as is)

// Disable text selection (keep as is)
var omitformtags = ["input", "textarea", "select"];
omitformtags = omitformtags.join("|");

function disableselect(e) {
    if (omitformtags.indexOf(e.target.tagName.toLowerCase()) == -1)
        return false;
}

function reEnable() {
    return true;
}

if (typeof document.onselectstart != "undefined")
    document.onselectstart = new Function("return false");
else {
    document.onmousedown = disableselect;
    document.onmouseup = reEnable;
}

document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audioPlayer');
    const playPauseButton = document.getElementById('playPauseButton');
    const stopButton = document.getElementById('stopButton');
    const skipButton = document.getElementById('skipButton');
    const previousButton = document.getElementById('previousButton');
    const playlist = document.getElementById('playlist');
    let currentTrackIndex = 0;

    function loadTrack(index) {
        const tracks = playlist.getElementsByTagName('li');
        if (index >= 0 && index < tracks.length) {
            audioPlayer.src = tracks[index].getAttribute('data-src');
            audioPlayer.play();
            currentTrackIndex = index;
            updateTrackInfo();
        }
    }

    function updateTrackInfo() {
        const tracks = playlist.getElementsByTagName('li');
        const trackInfo = document.getElementById('trackInfo');
        trackInfo.textContent = tracks[currentTrackIndex] ? tracks[currentTrackIndex].textContent : 'No track';
    }

    playPauseButton.addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseButton.textContent = '⏸'; // Change to pause symbol
        } else {
            audioPlayer.pause();
            playPauseButton.textContent = '⏯'; // Change to play symbol
        }
    });

    stopButton.addEventListener('click', () => {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        playPauseButton.textContent = '⏯'; // Change to play symbol
    });

    skipButton.addEventListener('click', () => {
        if (currentTrackIndex < playlist.getElementsByTagName('li').length - 1) {
            loadTrack(currentTrackIndex + 1);
        }
    });

    previousButton.addEventListener('click', () => {
        if (currentTrackIndex > 0) {
            loadTrack(currentTrackIndex - 1);
        }
    });

    playlist.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            const index = Array.from(playlist.getElementsByTagName('li')).indexOf(event.target);
            loadTrack(index);
        }
    });

    // Initialize with the first track
    loadTrack(currentTrackIndex);
});
