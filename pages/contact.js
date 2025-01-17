document.getElementById('back-button').addEventListener('click', function() {
    window.history.back();
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    // Dropdown Menu Functionality
    const dropdownButton = document.querySelector('.dropdown-button');
    const dropdownContent = document.getElementById('dropdown-content');
  
    dropdownButton.addEventListener('click', () => {
        dropdownContent.classList.toggle('show');
    });
  
    window.addEventListener('click', (event) => {
        if (!event.target.matches('.dropdown-button')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });
  
    // Hover Effects
    const buttons = document.querySelectorAll('.button-item');
    const hoverImage = document.getElementById('hover-image');
    const hoverText = document.getElementById('hover-text');
  
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            const imageSrc = button.getAttribute('data-image');
            const textContent = button.getAttribute('data-text');
  
            if (hoverImage) {
                hoverImage.src = imageSrc;
                hoverImage.style.display = 'block'; // Show image
            }
  
            if (hoverText) {
                hoverText.textContent = textContent;
                hoverText.style.display = 'block'; // Show text
            }
        });
  
        button.addEventListener('mouseleave', () => {
            if (hoverImage) hoverImage.style.display = 'none'; // Hide image
            if (hoverText) hoverText.style.display = 'none'; // Hide text
        });
    });
  
    // Sparkle Effect (Place your sparkle code here)
    // Placeholder for sparkle effect initialization
  });
  
  /*tweaked by 1dcursors.tumblr.com*/
  /*DO NOT STEAL OR REMOVE THIS TAGS*/
  // <![CDATA[
    var colour="#1b1b1b";
    var sparkles=50;
    var x=ox=400;
    var y=oy=300;
    var swide=800;
    var shigh=600;
    var sleft=sdown=0;
    var tiny=new Array();
    var star=new Array();
    var starv=new Array();
    var starx=new Array();
    var stary=new Array();
    var tinyx=new Array();
    var tinyy=new Array();
    var tinyv=new Array();
     
    window.onload=function() { if (document.getElementById) {
      var i, rats, rlef, rdow;
      for (var i=0; i<sparkles; i++) {
        var rats=createDiv(3, 3);
        rats.style.visibility="hidden";
        rats.style.zIndex="999";
        document.body.appendChild(tiny[i]=rats);
        starv[i]=0;
        tinyv[i]=0;
        var rats=createDiv(5, 5);
        rats.style.backgroundColor="transparent";
        rats.style.visibility="hidden";
        rats.style.zIndex="999";
        var rlef=createDiv(1, 5);
        var rdow=createDiv(5, 1);
        rats.appendChild(rlef);
        rats.appendChild(rdow);
        rlef.style.top="2px";
        rlef.style.left="0px";
        rdow.style.top="0px";
        rdow.style.left="2px";
        document.body.appendChild(star[i]=rats);
      }
      set_width();
      sparkle();
    }}
     
    function sparkle() {
      var c;
      if (x!=ox || y!=oy) {
        ox=x;
        oy=y;
        for (c=0; c<sparkles; c++) if (!starv[c]) {
          star[c].style.left=(starx[c]=x)+"px";
          star[c].style.top=(stary[c]=y)+"px";
          star[c].style.clip="rect(0px, 5px, 5px, 0px)";
          star[c].childNodes[0].style.backgroundColor=star[c].childNodes[1].style.backgroundColor=(colour=="random")?newColour():colour;
          star[c].style.visibility="visible";
          starv[c]=50;
          break;
        }
      }
      for (c=0; c<sparkles; c++) {
        if (starv[c]) update_star(c);
        if (tinyv[c]) update_tiny(c);
      }
      setTimeout("sparkle()", 40);
    }
     
    function update_star(i) {
      if (--starv[i]==25) star[i].style.clip="rect(1px, 4px, 4px, 1px)";
      if (starv[i]) {
        stary[i]+=1+Math.random()*3;
        starx[i]+=(i%5-2)/5;
        if (stary[i]<shigh+sdown) {
          star[i].style.top=stary[i]+"px";
          star[i].style.left=starx[i]+"px";
        }
        else {
          star[i].style.visibility="hidden";
          starv[i]=0;
          return;
        }
      }
      else {
        tinyv[i]=50;
        tiny[i].style.top=(tinyy[i]=stary[i])+"px";
        tiny[i].style.left=(tinyx[i]=starx[i])+"px";
        tiny[i].style.width="2px";
        tiny[i].style.height="2px";
        tiny[i].style.backgroundColor=star[i].childNodes[0].style.backgroundColor;
        star[i].style.visibility="hidden";
        tiny[i].style.visibility="visible"
      }
    }
     
    function update_tiny(i) {
      if (--tinyv[i]==25) {
        tiny[i].style.width="1px";
        tiny[i].style.height="1px";
      }
      if (tinyv[i]) {
        tinyy[i]+=1+Math.random()*3;
        tinyx[i]+=(i%5-2)/5;
        if (tinyy[i]<shigh+sdown) {
          tiny[i].style.top=tinyy[i]+"px";
          tiny[i].style.left=tinyx[i]+"px";
        }
        else {
          tiny[i].style.visibility="hidden";
          tinyv[i]=0;
          return;
        }
      }
      else tiny[i].style.visibility="hidden";
    }
     
    document.onmousemove=mouse;
    function mouse(e) {
      if (e) {
        y=e.pageY;
        x=e.pageX;
      }
      else {
        set_scroll();
        y=event.y+sdown;
        x=event.x+sleft;
      }
    }
     
    window.onscroll=set_scroll;
    function set_scroll() {
      if (typeof(self.pageYOffset)=='number') {
        sdown=self.pageYOffset;
        sleft=self.pageXOffset;
      }
      else if (document.body && (document.body.scrollTop || document.body.scrollLeft)) {
        sdown=document.body.scrollTop;
        sleft=document.body.scrollLeft;
      }
      else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
        sleft=document.documentElement.scrollLeft;
        sdown=document.documentElement.scrollTop;
      }
      else {
        sdown=0;
        sleft=0;
      }
    }
     
    window.onresize=set_width;
    function set_width() {
      var sw_min=999999;
      var sh_min=999999;
      if (document.documentElement && document.documentElement.clientWidth) {
        if (document.documentElement.clientWidth>0) sw_min=document.documentElement.clientWidth;
        if (document.documentElement.clientHeight>0) sh_min=document.documentElement.clientHeight;
      }
      if (typeof(self.innerWidth)=='number' && self.innerWidth) {
        if (self.innerWidth>0 && self.innerWidth<sw_min) sw_min=self.innerWidth;
        if (self.innerHeight>0 && self.innerHeight<sh_min) sh_min=self.innerHeight;
      }
      if (document.body.clientWidth) {
        if (document.body.clientWidth>0 && document.body.clientWidth<sw_min) sw_min=document.body.clientWidth;
        if (document.body.clientHeight>0 && document.body.clientHeight<sh_min) sh_min=document.body.clientHeight;
      }
      if (sw_min==999999 || sh_min==999999) {
        sw_min=800;
        sh_min=600;
      }
      swide=sw_min;
      shigh=sh_min;
    }
     
    function createDiv(height, width) {
      var div=document.createElement("div");
      div.style.position="absolute";
      div.style.height=height+"px";
      div.style.width=width+"px";
      div.style.overflow="hidden";
      return (div);
    }
     
    function newColour() {
      var c=new Array();
      c[0]=255;
      c[1]=Math.floor(Math.random()*256);
      c[2]=Math.floor(Math.random()*(256-c[1]/2));
      c.sort(function(){return (0.5 - Math.random());});
      return ("rgb("+c[0]+", "+c[1]+", "+c[2]+")");
    }
    // ]]>
    //form tags to omit in NS6+:
    var omitformtags=["input", "textarea", "select"]
     
    omitformtags=omitformtags.join("|")
     
    function disableselect(e){
    if (omitformtags.indexOf(e.target.tagName.toLowerCase())==-1)
    return false
    }
     
    function reEnable(){
    return true
    }
     
    if (typeof document.onselectstart!="undefined")
    document.onselectstart=new Function ("return false")
    else{
    document.onmousedown=disableselect
    document.onmouseup=reEnable
    }
  
    // Function to toggle dropdown menu
  function toggleDropdown() {
    const dropdownContent = document.getElementById('dropdown-content');
    dropdownContent.classList.toggle('show');
  }
  
  // Close the dropdown if clicked outside
  window.addEventListener('click', (event) => {
    if (!event.target.matches('.dropdown button')) {
        const dropdownContent = document.getElementById('dropdown-content');
        if (dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
        }
    }
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const photos = document.querySelectorAll('.photo-grid img');
    const carousel = document.getElementById('carousel');
    const carouselImage = document.getElementById('carousel-image');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    let currentIndex = 0;
  
    function openCarousel(index) {
        currentIndex = index;
        carouselImage.src = photos[index].src;
        carousel.style.display = 'flex'; // Use flex to center content
    }
  
    function closeCarousel() {
        carousel.style.display = 'none';
    }
  
    function showNextImage() {
        currentIndex = (currentIndex + 1) % photos.length;
        carouselImage.src = photos[currentIndex].src;
    }
  
    function showPreviousImage() {
        currentIndex = (currentIndex - 1 + photos.length) % photos.length;
        carouselImage.src = photos[currentIndex].src;
    }
  
    photos.forEach((photo, index) => {
        photo.addEventListener('click', () => openCarousel(index));
    });
  
    leftArrow.addEventListener('click', () => {
        leftArrow.classList.toggle('rotate');
        showPreviousImage();
    });
  
    rightArrow.addEventListener('click', () => {
        rightArrow.classList.toggle('rotate');
        showNextImage();
    });
  
    carousel.addEventListener('click', (event) => {
        if (event.target === carousel) {
            closeCarousel();
        }
    });
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const photos = document.querySelectorAll('.photo-grid img');
    const carousel = document.getElementById('carousel');
    const carouselImage = document.getElementById('carousel-image');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    let currentIndex = 0;
  
    function openCarousel(index) {
        currentIndex = index;
        carouselImage.src = photos[index].src;
        carousel.style.display = 'flex'; // Show carousel
    }
  
    function closeCarousel() {
        carousel.style.display = 'none'; // Hide carousel
    }
  
    function showNextImage() {
        currentIndex = (currentIndex + 1) % photos.length;
        carouselImage.src = photos[currentIndex].src;
    }
  
    function showPreviousImage() {
        currentIndex = (currentIndex - 1 + photos.length) % photos.length;
        carouselImage.src = photos[currentIndex].src;
    }
  
    photos.forEach((photo, index) => {
        photo.addEventListener('click', () => openCarousel(index));
    });
  
    leftArrow.addEventListener('click', () => {
        showPreviousImage();
    });
  
    rightArrow.addEventListener('click', () => {
        showNextImage();
    });
  
    carousel.addEventListener('click', (event) => {
        if (event.target === carousel) {
            closeCarousel();
        }
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    // Define hover text with HTML content
    const hoverTexts = [
        '<b>PERSONAL: <a href="mailto:courtney.te24@gmail.com">courtney.te24@gmail.com</a><br><br><b>COMMISSIONS: </b><a href="mailto:coverydesigns@gmail.com">coverydesigns@gmail.com</a><br><br>',

        '<b>PERSONAL:</b> <a href="https://www.instagram.com/courtney.te">@courtney.te</a><br><br><b>ART:</b> <a href="https://www.instagram.com/coverydesigns">@coverydesigns</a>', // HTML for Button 2

        '<b>PERSONAL:</b> <a href="https://www.tiktok.com/@coverydesigns">@coverydesigns</a>' // HTML for Button 3
    ];

    document.querySelectorAll('.hover-button').forEach((button, index) => {
        const hoverText = button.nextElementSibling;
        const textContent = hoverTexts[index];
        hoverText.querySelector('.text-content').innerHTML = textContent;

        button.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default link behavior

            // Hide all hover texts and remove 'active' class from all buttons
            document.querySelectorAll('.hover-text').forEach(text => {
                text.style.display = 'none';
                text.previousElementSibling.classList.remove('active');
            });

            // Toggle the visibility of the current hover text
            if (hoverText.style.display === 'block') {
                hoverText.style.display = 'none';
                button.classList.remove('active');
            } else {
                hoverText.style.display = 'block';
                button.classList.add('active');
            }
        });
    });

    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent the event from bubbling up
            const hoverText = btn.closest('.hover-text');
            hoverText.style.display = 'none'; // Hide the hover text
            hoverText.previousElementSibling.classList.remove('active');
        });
    });
});
