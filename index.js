// COUNTDOWN

function christmasCountDown() {
    const christmasDate = new Date("December 25, 2024 00:00");
    const now = new Date();
    const diff = christmasDate - now;
    
    const msInSecond = 1000;
    const msInMinute = 1000 * 60;
    const msInHour = 1000 * 60 * 60;
    const msInDay = 1000 * 60 * 60 * 24;

    const displayDay = Math.floor(diff / msInDay);
    document.querySelector(".displayDays").textContent = displayDay;
    
    const displayHours = Math.floor((diff % msInDay) / msInHour);
    document.querySelector(".displayHours").textContent = displayHours;
    if(displayHours < 10) {
      document.querySelector(".displayHours").textContent = "0" + displayHours; 
    }
    else {
      document.querySelector(".displayHours").textContent = displayHours;
    }

    const displayMinutes = Math.floor((diff % msInHour) / msInMinute);
    document.querySelector(".displayMinutes").textContent = displayMinutes;
    if(displayMinutes < 10) {
      document.querySelector(".displayMinutes").textContent = "0" + displayMinutes;
    }
    else {
      document.querySelector(".displayMinutes").textContent = displayMinutes;
    }
    

    const displaySeconds = Math.floor((diff % msInMinute) / msInSecond);
    document.querySelector(".displaySeconds").textContent = displaySeconds;
    if(displaySeconds < 10) {
      document.querySelector(".displaySeconds").textContent = "0" + displaySeconds;
    }
    else {
      document.querySelector(".displaySeconds").textContent = displaySeconds;
    }


    if (diff <= 0) {
        document.querySelector(".displayDays").textContent = 0;
        document.querySelector(".displayHours").textContent = 0;
        document.querySelector(".displayMinutes").textContent = 0;
        document.querySelector(".displaySeconds").textContent = 0;
        clearInterval(timerId);
        final();
    }
}

let timerId = setInterval(christmasCountDown, 1000);

// MUSIC

const music = document.querySelector("#firstSong");
const playBtn = document.querySelector(".playBtn");
const pauseBtn = document.querySelector(".pauseBtn");

playBtn.addEventListener('click', function() {
    music.play();
    playBtn.disabled = true;
    pauseBtn.disabled = false;
})

pauseBtn.addEventListener('click', function() {
    music.pause();
    playBtn.disabled = false;
    pauseBtn.disabled = true;
})

// FINAL 

const finalText = document.querySelector("h4");
const finalSong = document.querySelector("#finalSong");

function final() {
    finalText.style = "display: block";
    playBtn.disabled = true;
    pauseBtn.disabled = true;
    music.pause();
    finalSong.play();
}

// BACKGROUND

const photos = [
    "https://images.unsplash.com/photo-1482315845100-0b8e97fa27e0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    "https://images.unsplash.com/photo-1543258103-a62bdc069871?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    "https://images.unsplash.com/photo-1575659458448-27b1d2836de2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    "https://images.unsplash.com/photo-1485596811645-33056dc9c562?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1544212415-8e3d2a27a944?q=80&w=2119&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    "https://images.unsplash.com/photo-1512867616096-c91ed9daf1eb?q=80&w=2095&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    "https://images.unsplash.com/photo-1512474932049-78ac69ede12c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    "https://images.unsplash.com/photo-1451772741724-d20990422508?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"];

let body = document.querySelector("body");

let i = 1;
function changePhoto() {
    body.style.background = `url(${photos[i]})`;
    i ++;
    if (i > photos.length - 1) i = 0;
}

setInterval(changePhoto, 10000);

// SNOWFLAKES

particlesJS("particles-js", {
    particles: {
      number: {
        value: 2000,
        density: {
          enable: true,
          value_area: 631.3280775270874
        }
      },
      color: {
        value: "#fff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 2.5,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 500,
        color: "#ffffff",
        opacity: 0.4,
        width: 2
      },
      move: {
        enable: true,
        speed: 2,
        direction: "bottom",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 0.5
          }
        },
        bubble: {
          distance: 400,
          size: 4,
          duration: 0.3,
          opacity: 1,
          speed: 3
        },
        repulse: {
          distance: 150,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  });

  