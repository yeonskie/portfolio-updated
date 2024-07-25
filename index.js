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
    const draggableElements = document.querySelectorAll('.intro, .flower, .music, .overview2');
    draggableElements.forEach(el => makeDraggable(el));

    // Ensure .flower img is not draggable
    const flowerImgs = document.querySelectorAll('.flower img');
    flowerImgs.forEach(img => {
        img.addEventListener('mousedown', (e) => e.stopPropagation());
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

// Sparkle Effect
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

function sparkle() {
    var c;
    if (x != ox || y != oy) {
        ox = x;
        oy = y;
        for (c = 0; c < sparkles; c++) if (!starv[c]) {
            star[c].style.left = (starx[c] = x) + "px";
            star[c].style.top = (stary[c] = y) + "px";
            star[c].style.clip = "rect(0px, 5px, 5px, 0px)";
            star[c].childNodes[0].style.backgroundColor = star[c].childNodes[1].style.backgroundColor = (colour == "random") ? newColour() : colour;
            star[c].style.visibility = "visible";
            starv[c] = 50;
            break;
        }
    }
    for (c = 0; c < sparkles; c++) {
        if (starv[c]) update_star(c);
        if (tinyv[c]) update_tiny(c);
    }
    setTimeout(sparkle, 40);
}

function update_star(i) {
    if (--starv[i] == 25) star[i].style.clip = "rect(1px, 4px, 4px, 1px)";
    if (starv[i]) {
        stary[i] += 1 + Math.random() * 3;
        starx[i] += (i % 5 - 2) / 5;
        if (stary[i] < shigh + sdown) {
            star[i].style.top = stary[i] + "px";
            star[i].style.left = starx[i] + "px";
        } else {
            star[i].style.visibility = "hidden";
            starv[i] = 0;
            return;
        }
    } else {
        tinyv[i] = 50;
        tiny[i].style.top = (tinyy[i] = stary[i]) + "px";
        tiny[i].style.left = (tinyx[i] = starx[i]) + "px";
        tiny[i].style.width = "2px";
        tiny[i].style.height = "2px";
        tiny[i].style.backgroundColor = star[i].childNodes[0].style.backgroundColor;
        star[i].style.visibility = "hidden";
        tiny[i].style.visibility = "visible"
    }
}

function update_tiny(i) {
    if (--tinyv[i] == 25) {
        tiny[i].style.width = "1px";
        tiny[i].style.height = "1px";
    }
    if (tinyv[i]) {
        tinyy[i] += 1 + Math.random() * 3;
        tinyx[i] += (i % 5 - 2) / 5;
        if (tinyy[i] < shigh + sdown) {
            tiny[i].style.top = tinyy[i] + "px";
            tiny[i].style.left = tinyx[i] + "px";
        } else {
            tiny[i].style.visibility = "hidden";
            tinyv[i] = 0;
            return;
        }
    } else tiny[i].style.visibility = "hidden";
}

document.onmousemove = mouse;
function mouse(e) {
    if (e) {
        y = e.pageY;
        x = e.pageX;
    } else {
        set_scroll();
        y = event.y + sdown;
        x = event.x + sleft;
    }
}

window.onscroll = set_scroll;
function set_scroll() {
    if (typeof (self.pageYOffset) == 'number') {
        sdown = self.pageYOffset;
        sleft = self.pageXOffset;
    } else if (document.body && (document.body.scrollTop || document.body.scrollLeft)) {
        sdown = document.body.scrollTop;
        sleft = document.body.scrollLeft;
    } else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
        sleft = document.documentElement.scrollLeft;
        sdown = document.documentElement.scrollTop;
    } else {
        sdown = 0;
        sleft = 0;
    }
}

window.onresize = set_width;
function set_width() {
    var sw_min = 999999;
    var sh_min = 999999;
    if (document.documentElement && document.documentElement.clientWidth) {
        if (document.documentElement.clientWidth > 0) sw_min = document.documentElement.clientWidth;
        if (document.documentElement.clientHeight > 0) sh_min = document.documentElement.clientHeight;
    }
    if (typeof (self.innerWidth) == 'number' && self.innerWidth) {
        if (self.innerWidth > 0 && self.innerWidth < sw_min) sw_min = self.innerWidth;
        if (self.innerHeight > 0 && self.innerHeight < sh_min) sh_min = self.innerHeight;
    }
    if (document.body.clientWidth) {
        if (document.body.clientWidth > 0 && document.body.clientWidth < sw_min) sw_min = document.body.clientWidth;
        if (document.body.clientHeight > 0 && document.body.clientHeight < sh_min) sh_min = document.body.clientHeight;
    }
    if (sw_min == 999999 || sh_min == 999999) {
        sw_min = 800;
        sh_min = 600;
    }
    swide = sw_min;
    shigh = sh_min;
}

function createDiv(height, width) {
    var div = document.createElement("div");
    div.style.position = "absolute";
    div.style.height = height + "px";
    div.style.width = width + "px";
    div.style.overflow = "hidden";
    return div;
}

function newColour() {
    var c = [];
    c[0] = 255;
    c[1] = Math.floor(Math.random() * 256);
    c[2] = Math.floor(Math.random() * (256 - c[1] / 2));
    c.sort(function () { return (0.5 - Math.random()); });
    return "rgb(" + c[0] + ", " + c[1] + ", " + c[2] + ")";
}

// Disable text selection
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

// Initialize resize functionality for .flower
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


// Ensure .flower img is not draggable
document.addEventListener('DOMContentLoaded', () => {
    const flowerImgs = document.querySelectorAll('.flower img');
    flowerImgs.forEach(img => {
        img.addEventListener('mousedown', (e) => e.preventDefault()); // Prevent default dragging
    });
});

// Initialize close buttons
document.addEventListener('DOMContentLoaded', () => {
    const closeButtons = document.querySelectorAll('.close-btn');
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const parentBox = button.closest('.overview'); // Change '.box' to the class of the box you want to close
            if (parentBox) {
                parentBox.remove();
            }
        });
    });
});

// Initialize close buttons
document.addEventListener('DOMContentLoaded', () => {
    const closeButtons = document.querySelectorAll('.close-btn');
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const parentBox = button.closest('.flower'); // Change '.box' to the class of the box you want to close
            if (parentBox) {
                parentBox.remove();
            }
        });
    });
});

// Initialize close buttons
document.addEventListener('DOMContentLoaded', () => {
    const closeButtons = document.querySelectorAll('.close-btn');
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const parentBox = button.closest('.intro'); // Change '.box' to the class of the box you want to close
            if (parentBox) {
                parentBox.remove();
            }
        });
    });
});

// Initialize close buttons
document.addEventListener('DOMContentLoaded', () => {
    const closeButtons = document.querySelectorAll('.close-btn');
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const parentBox = button.closest('.overview2'); // Change '.box' to the class of the box you want to close
            if (parentBox) {
                parentBox.remove();
            }
        });
    });
});

// Initialize close buttons
document.addEventListener('DOMContentLoaded', () => {
    const closeButtons = document.querySelectorAll('.close-btn');
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const parentBox = button.closest('.music'); // Change '.box' to the class of the box you want to close
            if (parentBox) {
                parentBox.remove();
            }
        });
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
    const draggableElements = document.querySelectorAll('.intro, .flower, .music, .overview2, .overview');
    draggableElements.forEach(el => makeDraggable(el));

    // Ensure .flower img is not draggable
    const flowerImgs = document.querySelectorAll('.flower img');
    flowerImgs.forEach(img => {
        img.addEventListener('mousedown', (e) => e.stopPropagation());
    });

    // Initialize close buttons
    const closeButtons = document.querySelectorAll('.close-btn');
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const parentBox = button.closest('.box'); // Change '.box' to the class of the box you want to close
            if (parentBox) {
                parentBox.remove();
            }
        });
    });
});

const draggableElements = document.querySelectorAll('.intro, .flower, .music, .overview2, .overview');

