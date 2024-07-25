// Draggable Function
function makeDraggable(element) {
    let offsetX, offsetY, isDragging = false;

    element.addEventListener('mousedown', (e) => {
        if (e.target.tagName === 'IMG') return; // Prevent dragging if the target is an image

        isDragging = true;
        offsetX = e.clientX - element.getBoundingClientRect().left;
        offsetY = e.clientY - element.getBoundingClientRect().top;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', () => {
            isDragging = false;
            document.removeEventListener('mousemove', onMouseMove);
        }, { once: true });
    });

    function onMouseMove(e) {
        if (isDragging) {
            element.style.position = 'absolute';
            element.style.left = `${e.clientX - offsetX}px`;
            element.style.top = `${e.clientY - offsetY}px`;
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
    const draggableElements = document.querySelectorAll('.intro, .flower, .music, .overview2, .overview');
    draggableElements.forEach(el => makeDraggable(el));

    // Initialize Close Buttons
    const closeButtons = document.querySelectorAll('.close-btn');
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const parentBox = button.closest('.intro, .flower, .music, .overview, .overview2'); // Update this as needed
            if (parentBox) {
                parentBox.remove();
            }
        });
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

// Initialize resize functionality for .flower (keep as is)
document.addEventListener('DOMContentLoaded', () => {
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

// Draggable Function
function makeDraggable(element) {
    let offsetX, offsetY, isDragging = false;

    element.addEventListener('mousedown', (e) => {
        if (e.target.tagName === 'IMG') return; // Prevent dragging if the target is an image

        isDragging = true;
        offsetX = e.clientX - element.getBoundingClientRect().left;
        offsetY = e.clientY - element.getBoundingClientRect().top;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', () => {
            isDragging = false;
            document.removeEventListener('mousemove', onMouseMove);
        }, { once: true });
    });

    function onMouseMove(e) {
        if (isDragging) {
            element.style.position = 'absolute';
            element.style.left = `${e.clientX - offsetX}px`;
            element.style.top = `${e.clientY - offsetY}px`;
        }
    }
}

// Initialize Draggable Elements
document.addEventListener('DOMContentLoaded', () => {
    // Apply draggable functionality to specific classes
    const draggableElements = document.querySelectorAll('.intro, .flower, .music, .overview2');
    draggableElements.forEach(el => makeDraggable(el));
});

function makeDraggable(element) {
    let offsetX, offsetY, isDragging = false;

    element.addEventListener('mousedown', (e) => {
        if (e.target.tagName === 'IMG') return; // Prevent dragging if the target is an image

        isDragging = true;
        offsetX = e.clientX - element.getBoundingClientRect().left;
        offsetY = e.clientY - element.getBoundingClientRect().top;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', () => {
            isDragging = false;
            document.removeEventListener('mousemove', onMouseMove);
        }, { once: true });
    });

    function onMouseMove(e) {
        if (isDragging) {
            element.style.position = 'absolute';
            element.style.left = `${e.clientX - offsetX}px`;
            element.style.top = `${e.clientY - offsetY}px`;
        }
    }
}

// Initialize Draggable Elements
document.addEventListener('DOMContentLoaded', () => {
    const draggableElements = document.querySelectorAll('.intro, .flower, .music, .overview2');
    draggableElements.forEach(el => makeDraggable(el));
});

function makeDraggable(element) {
    console.log('Making element draggable:', element); // Debugging line
    let offsetX, offsetY, isDragging = false;

    element.addEventListener('mousedown', (e) => {
        if (e.target.tagName === 'IMG') return; // Prevent dragging if the target is an image

        isDragging = true;
        offsetX = e.clientX - element.getBoundingClientRect().left;
        offsetY = e.clientY - element.getBoundingClientRect().top;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', () => {
            isDragging = false;
            document.removeEventListener('mousemove', onMouseMove);
        }, { once: true });
    });

    function onMouseMove(e) {
        if (isDragging) {
            element.style.position = 'absolute';
            element.style.left = `${e.clientX - offsetX}px`;
            element.style.top = `${e.clientY - offsetY}px`;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed'); // Debugging line
    const draggableElements = document.querySelectorAll('.intro, .flower, .music, .overview2, .overview');
    draggableElements.forEach(el => makeDraggable(el));
});

// Initialize Draggable Elements including .location
document.addEventListener('DOMContentLoaded', () => {
    // Apply draggable functionality to specific classes
    const draggableElements = document.querySelectorAll('.intro, .flower, .music, .overview2, .location');
    draggableElements.forEach(el => makeDraggable(el));

    // Initialize Close Buttons including .location
    const closeButtons = document.querySelectorAll('.close-btn');
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const parentBox = button.closest('.intro, .flower, .music, .overview2, .location'); // Update this as needed
            if (parentBox) {
                parentBox.remove();
            }
        });
    });
});
