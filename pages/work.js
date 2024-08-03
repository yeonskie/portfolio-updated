document.addEventListener('DOMContentLoaded', () => {
    // Draggable functionality
    function makeDraggable(element) {
      let isDragging = false;
      let offsetX, offsetY;
  
      element.addEventListener('mousedown', (e) => {
        isDragging = true;
        const rect = element.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
  
        const onMouseMove = (e) => {
          if (isDragging) {
            const x = e.clientX - offsetX;
            const y = e.clientY - offsetY;
            element.style.position = 'absolute';
            element.style.left = `${x}px`;
            element.style.top = `${y}px`;
          }
        };
  
        const stopDragging = () => {
          isDragging = false;
          document.removeEventListener('mousemove', onMouseMove);
          document.removeEventListener('mouseup', stopDragging);
        };
  
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', stopDragging);
      });
    }
  
    // Close button functionality
    const closeButton = document.querySelector('.close-btn');
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        const works = document.querySelector('.works');
        if (works) works.style.display = 'none';
      });
    }
  
    // Dropdown menu functionality
    function toggleDropdown() {
      const dropdownContent = document.getElementById('dropdown-content');
      if (dropdownContent) {
        dropdownContent.classList.toggle('show');
      }
    }
  
    // Close Dropdown Menu if clicking outside
    window.addEventListener('click', (event) => {
      if (!event.target.matches('.dropdown button')) {
        const dropdowns = document.getElementsByClassName('dropdown-content');
        for (let i = 0; i < dropdowns.length; i++) {
          const openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    });
  
    // Attach dropdown button click event
    const dropdownButton = document.querySelector('.dropdown button');
    if (dropdownButton) {
      dropdownButton.addEventListener('click', toggleDropdown);
    }
  
    // Image hover functionality
    const buttons = document.querySelectorAll('.button-item');
    const hoverImage = document.getElementById('hover-image');
    const hoverText = document.getElementById('hover-text');
    const hoverTextContent = document.getElementById('hover-text-content');
  
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        const imageSrc = button.getAttribute('data-image');
        const textContent = button.getAttribute('data-text');
  
        if (hoverImage) {
          hoverImage.src = imageSrc;
          hoverImage.style.display = 'block';
        }
  
        if (hoverText) {
          hoverTextContent.innerHTML = textContent;
          hoverText.style.display = 'block';
        }
      });
  
      button.addEventListener('mouseleave', () => {
        if (hoverImage) hoverImage.style.display = 'none';
        if (hoverText) hoverText.style.display = 'none';
      });
    });
    
  // Sparkle effect
  let colour = "#1b1b1b";
  let sparkles = 50;
  let x = ox = 400;
  let y = oy = 300;
  let swide = 800;
  let shigh = 600;
  let sleft = sdown = 0;
  let tiny = [];
  let star = [];
  let starv = [];
  let starx = [];
  let stary = [];
  let tinyx = [];
  let tinyy = [];
  let tinyv = [];

  function createDiv(height, width) {
      const div = document.createElement('div');
      div.style.position = 'absolute';
      div.style.height = `${height}px`;
      div.style.width = `${width}px`;
      div.style.overflow = 'hidden';
      return div;
  }

  function newColour() {
      const c = [255, Math.floor(Math.random() * 256), Math.floor(Math.random() * (256 - Math.floor(Math.random() * 256) / 2))];
      c.sort(() => 0.5 - Math.random());
      return `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
  }

  function sparkle() {
      if (x !== ox || y !== oy) {
          ox = x;
          oy = y;
          for (let c = 0; c < sparkles; c++) if (!starv[c]) {
              star[c].style.left = `${(starx[c] = x)}px`;
              star[c].style.top = `${(stary[c] = y)}px`;
              star[c].style.clip = "rect(0px, 5px, 5px, 0px)";
              star[c].childNodes[0].style.backgroundColor = star[c].childNodes[1].style.backgroundColor = (colour === "random") ? newColour() : colour;
              star[c].style.visibility = "visible";
              starv[c] = 50;
              break;
          }
      }
      for (let c = 0; c < sparkles; c++) {
          if (starv[c]) update_star(c);
          if (tinyv[c]) update_tiny(c);
      }
      setTimeout(sparkle, 40);
  }

  function update_star(i) {
      if (--starv[i] === 25) star[i].style.clip = "rect(1px, 4px, 4px, 1px)";
      if (starv[i]) {
          stary[i] += 1 + Math.random() * 3;
          starx[i] += (i % 5 - 2) / 5;
          if (stary[i] < shigh + sdown) {
              star[i].style.top = `${stary[i]}px`;
              star[i].style.left = `${starx[i]}px`;
          } else {
              star[i].style.visibility = "hidden";
              starv[i] = 0;
              return;
          }
      } else {
          tinyv[i] = 50;
          tiny[i].style.top = `${(tinyy[i] = stary[i])}px`;
          tiny[i].style.left = `${(tinyx[i] = starx[i])}px`;
          tiny[i].style.width = "2px";
          tiny[i].style.height = "2px";
          tiny[i].style.backgroundColor = star[i].childNodes[0].style.backgroundColor;
          star[i].style.visibility = "hidden";
          tiny[i].style.visibility = "visible";
      }
  }

  function update_tiny(i) {
      if (--tinyv[i] === 25) {
          tiny[i].style.width = "1px";
          tiny[i].style.height = "1px";
      }
      if (tinyv[i]) {
          tinyy[i] += 1 + Math.random() * 3;
          tinyx[i] += (i % 5 - 2) / 5;
          if (tinyy[i] < shigh + sdown) {
              tiny[i].style.top = `${tinyy[i]}px`;
              tiny[i].style.left = `${tinyx[i]}px`;
          } else {
              tiny[i].style.visibility = "hidden";
              tinyv[i] = 0;
              return;
          }
      } else {
          tiny[i].style.visibility = "hidden";
      }
  }

  function set_scroll() {
      if (typeof self.pageYOffset === 'number') {
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

  function set_width() {
      let sw_min = 999999;
      let sh_min = 999999;
      if (document.documentElement && document.documentElement.clientWidth) {
          if (document.documentElement.clientWidth > 0) sw_min = document.documentElement.clientWidth;
          if (document.documentElement.clientHeight > 0) sh_min = document.documentElement.clientHeight;
      }
      if (typeof self.innerWidth === 'number' && self.innerWidth) {
          if (self.innerWidth > 0 && self.innerWidth < sw_min) sw_min = self.innerWidth;
          if (self.innerHeight > 0 && self.innerHeight < sh_min) sh_min = self.innerHeight;
      }
      if (document.body.clientWidth) {
          if (document.body.clientWidth > 0 && document.body.clientWidth < sw_min) sw_min = document.body.clientWidth;
          if (document.body.clientHeight > 0 && document.body.clientHeight < sh_min) sh_min = document.body.clientHeight;
      }
      if (sw_min === 999999 || sh_min === 999999) {
          sw_min = 800;
          sh_min = 600;
      }
      swide = sw_min;
      shigh = sh_min;
  }

  function createDiv(height, width) {
      const div = document.createElement('div');
      div.style.position = 'absolute';
      div.style.height = `${height}px`;
      div.style.width = `${width}px`;
      div.style.overflow = 'hidden';
      return div;
  }

  function newColour() {
      const c = [255, Math.floor(Math.random() * 256), Math.floor(Math.random() * (256 - Math.floor(Math.random() * 256) / 2))];
      c.sort(() => 0.5 - Math.random());
      return `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
  }

  window.onresize = set_width;
  document.onmousemove = (e) => {
      y = e.pageY;
      x = e.pageX;
  };
  window.onscroll = set_scroll;

  for (let i = 0; i < sparkles; i++) {
      let rats = createDiv(3, 3);
      rats.style.visibility = "hidden";
      rats.style.zIndex = "999";
      document.body.appendChild(tiny[i] = rats);
      starv[i] = 0;
      tinyv[i] = 0;
      rats = createDiv(5, 5);
      rats.style.backgroundColor = "transparent";
      rats.style.visibility = "hidden";
      rats.style.zIndex = "999";
      const rlef = createDiv(1, 5);
      const rdow = createDiv(5, 1);
      rats.appendChild(rlef);
      rats.appendChild(rdow);
      rlef.style.top = "2px";
      rlef.style.left = "0px";
      rdow.style.top = "0px";
      rdow.style.left = "2px";
      document.body.appendChild(star[i] = rats);
  }

  sparkle();
});

document.addEventListener('DOMContentLoaded', () => {
  const backButton = document.getElementById('back-button');

  backButton.addEventListener('click', () => {
      window.history.back(); // Go back to the previous page
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.button-item');
  const hoverImage = document.getElementById('hover-image');
  const hoverText = document.getElementById('hover-text');
  const hoverTextContent = document.getElementById('hover-text-content');

  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      const imageSrc = button.getAttribute('data-image');
      const textContent = button.getAttribute('data-text');

      if (hoverImage) {
        hoverImage.src = imageSrc;
        hoverImage.style.display = 'block'; // Show image
      }

      if (hoverText) {
        hoverTextContent.textContent = textContent;
        hoverText.style.display = 'block'; // Show text
      }
    });

    button.addEventListener('mouseleave', () => {
      if (hoverImage) hoverImage.style.display = 'none'; // Hide image
      if (hoverText) hoverText.style.display = 'none'; // Hide text
    });
  });
});


const buttons = document.querySelectorAll('.button-item');
const hoverText = document.getElementById('hover-text');
const hoverTextContent = document.getElementById('hover-text-content');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        const text = button.getAttribute('data-text');
        hoverTextContent.textContent = text;
        hoverText.style.display = 'block'; // Show the text
    });

    button.addEventListener('mouseleave', () => {
        hoverText.style.display = 'none'; // Hide the text
    });
});

document.querySelectorAll('.button-item').forEach(button => {
    button.addEventListener('mouseenter', () => {
        const imageSrc = button.getAttribute('data-image');
        const text = button.getAttribute('data-text');

        document.getElementById('hover-image').src = imageSrc;
        document.getElementById('hover-text').innerHTML = text; // Use innerHTML to allow HTML tags

        document.getElementById('hover-image').style.display = 'block'; // Show image
        document.getElementById('hover-text').style.display = 'block'; // Show text
    });

    button.addEventListener('mouseleave', () => {
        document.getElementById('hover-image').style.display = 'none'; // Hide image
        document.getElementById('hover-text').style.display = 'none'; // Hide text
    });
});
