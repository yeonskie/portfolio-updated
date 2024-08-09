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
    const textElement = document.querySelector('.text');

    document.getElementById('bio-btn').addEventListener('click', () => {
        textElement.innerHTML = `

I am a 22-year-old Cambodian-American woman born in Virginia, USA. I attended VCUArts from 2020 to 2024, graduating with a BFA degree in Graphic Design and a minor in Psychology.
<br><br>
My family originated from Battambang, Cambodia, prior to the Khmer Rouge / Killing Fields of 1975 to 1979. After my parents immigrated to the United States as refugees in the 1980’s, my identity was shaped by the stories of my family's past, mu journey with mental health, and my healing relationship with my body.
<br><br>
As a child, I was always creative-minded, with a love for books and fantasy. I wanted to become a writer one day, an author of young adult fantasy novels, just like my favorite ones I read as a kid. Over time, my love for writing became a love for creation in general, and it led me to the path of going to art school.
        `;
    });

    document.getElementById('prof-btn').addEventListener('click', () => {
        textElement.innerHTML = `
      My name is Courtney Te (she/her) and I am a Cambodian-American graphic designer and artist from the Northern Virginia and D.C. Metropolitian area. I am a recent graduate of VCUArts where I recieved my Bachelor of Fine Arts in Graphic Design in May 2024. 
      <br><br>
      I have a special interest in digital forms of art, specifically motion graphics, web design, and zine design. I use the Adobe Creative cloud for most of my projects but I also use Figma, Blender, and HTML/CSS coding (VS Code) to complete my work.<br><br>
      I was a Graphic Design Intern at <i>Hagos Marketing</i> during the Fall of 2023. I currently work at <i>Get Social RVA</i> as a contracted Graphic Designer who helps with brand guidelines, motion graphics, and social media design. I also take commissions through TikTok and Instagram, @coverydesigns.
      <br><br>
      During my time as an undergraduate at VCUArts, I recieved a VCUArts Undergraduate Research Grant for the 'LUCKY ONE' project that promotes interdisciplinary collaboration between schools.
        `;
    });

    document.getElementById('text3-btn').addEventListener('click', () => {
        textElement.innerHTML = `
            hi there, i'm courtney! (she/her)<br><br>
            i love the color pink, dying my hair every color of the rainbow (although those days are past for now — bleach is expensive :/), and weird pets (rip to the rats). 
            <br><br>
            i'm quite the ambivert, simultaneously always wanting to be around people i love while being a self-proclaimed hermit. i like cozy games and constantly switching between my rotation of favorites on a weekly basis.
            <br><br>
            i grew up on the internet, probably way too young for my own good. i had internet friends, i paid for a club penguin membership, and i had a tumblr page where taylor swift still follows me to this day.
            <br><br>
            i've always liked creating and being creative. it may not have always manifested in traditional art or design, but it eventually led me to the path i am on today. 
        `;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.picture .slider-image');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    // Initialize the first image as visible
    images[currentIndex].classList.add('active');

    // Change image every 2 seconds
    setInterval(showNextImage, 3500);
});


document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.picture .slider-image');
  let currentIndex = 0;

  function showNextImage() {
      images[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add('active');
  }

  // Initialize the first image as visible
  images[currentIndex].classList.add('active');

  // Change image every 2 seconds
  setInterval(showNextImage, 2000);
});
