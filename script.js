const startBtn = document.getElementById("startBtn");

const intro = document.getElementById("intro");

const avp = document.getElementById("avp");

const currentPhoto =
    document.getElementById("currentPhoto");

const photoContainer =
    document.querySelector(".photo-container");

const number =
    document.getElementById("number");

const title =
    document.getElementById("title");

const description =
    document.getElementById("description");

const progressBar =
    document.getElementById("progressBar");

const music =
    document.getElementById("music");

const musicBtn =
    document.getElementById("musicBtn");


/* =========================
   PHOTO DATA
========================= */

const memories = [

    {
        image: "image/01.jpg",
        title: "Where It All Began",
        description: "Every beautiful story has a beginning."
    },

    {
        image: "image/02.jpg",
        title: "Little Memories",
        description: "Small moments that became precious memories."
    },

    {
        image: "image/03.jpg",
        title: "Growing Up",
        description: "Watching a little girl slowly discover the world."
    },

    {
        image: "image/04.jpg",
        title: "Childhood Days",
        description: "Days filled with laughter, innocence, and joy."
    },

    {
        image: "image/05.jpg",
        title: "Gang of Love",
        description: "loving myself so much "
    },

    {
        image: "image/06.jpg",
        title: "Cute Ko",
        description: "A child with a big dream and a heart full of love."
    },

    {
        image: "image/07.jpg",
        title: "Emo girl Moments",
        description: "Memories that will always have a place in her heart."
    },

    {
        image: "image/08.jpg",
        title: "Growing Dreams",
        description: "Little by little, dreams began to grow."
    },

    {
        image: "image/09.jpg",
        title: "The Teenage Years",
        description: "A new chapter filled with experiences and discoveries."
    },

    {
        image: "image/10.jpg",
        title: "New Adventures",
        description: "Making memories along the way."
    },

    {
        image: "image/11.jpg",
        title: "Pink Glasses Fun",
        description: "A fun birthday photo featuring a playful pink-glasses look and a cheerful smile perfect for a memorable birthday present."
    },

    {
        image: "image/12.jpg",
        title: "More Memories",
        description: "Every picture holds a story."
    },

    {
        image: "image/13.jpg",
        title: "Finding Herself",
        description: "Learning, growing, and becoming who she is."
    },

    {
        image: "image/14.jpg",
        title: "Beautifully Becoming",
        description: "Every year brought another beautiful change."
    },

    {
        image: "image/15.jpg",
        title: "Dreams",
        description: "Looking forward to everything still waiting ahead."
    },

    {
        image: "image/16.jpg",
        title: "Almost 18",
        description: "The little girl has grown into a beautiful young woman."
    },

    {
        image: "image/17.jpg",
        title: "One Step Away",
        description: "Eighteen years of memories brought her here."
    },

    {
        image: "image/18.jpg",
        title: "Eighteen",
        description: "And now, a beautiful new chapter begins."
    }

];


let currentIndex = 0;

let slideshowTimer;

let musicPlaying = false;


/* =========================
   START
========================= */

startBtn.addEventListener("click", () => {

    intro.style.opacity = "0";

    setTimeout(() => {

        intro.style.display = "none";

        avp.classList.remove("hidden");

        startSlideshow();

    }, 1500);


    music.play()
        .then(() => {

            musicPlaying = true;

            musicBtn.innerHTML = "❚❚";

        })
        .catch(() => {

            console.log("Music playback needs user interaction.");

        });

});


/* =========================
   START SLIDESHOW
========================= */

function startSlideshow() {

    currentIndex = 0;

    showPhoto();

}


/* =========================
   SHOW PHOTO
========================= */

function showPhoto() {

    clearTimeout(slideshowTimer);


    const memory =
        memories[currentIndex];


    // Fade out
    currentPhoto.classList.remove("show");


    setTimeout(() => {

        currentPhoto.src =
            memory.image;

        photoContainer.style.setProperty(
            "--photo-background",
            `url("${memory.image}")`
        );

        number.textContent =
            String(currentIndex + 1)
            .padStart(2, "0");

        title.textContent =
            memory.title;

        description.textContent =
            memory.description;

        // Restart caption animation
        const caption =
            document.querySelector(".caption");

        caption.style.animation = "none";

        caption.offsetHeight;

        caption.style.animation =
            "captionIn 1.2s ease";


        currentPhoto.classList.add("show");


        // Progress bar
        progressBar.style.transition = "none";

        progressBar.style.width = "0%";

        setTimeout(() => {

            progressBar.style.transition =
                "width 6s linear";

            progressBar.style.width = "100%";

        }, 100);


    }, 500);

    slideshowTimer = setTimeout(() => {

        nextPhoto();

    }, 6500);
}


/* =========================
   NEXT PHOTO
========================= */

function nextPhoto() {

    currentIndex = (currentIndex + 1) % memories.length;

    showPhoto();

}


/* =========================
   MUSIC BUTTON
========================= */

musicBtn.addEventListener("click", () => {

    if (musicPlaying) {

        music.pause();

        musicPlaying = false;

        musicBtn.innerHTML = "♫";

    } else {

        music.play();

        musicPlaying = true;

        musicBtn.innerHTML = "❚❚";

    }

});
