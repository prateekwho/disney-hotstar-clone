let movies = [
    {
      name: "falcon and the winter soldier",
      des: 
        "Falcon and the Winter Soldier are a mismatched duo who team up for a global adventure that will test their survival skills -- as well as their patience."
        ,
      image: "assets/images/slider 2.png"
    },
    {
      name: "loki",
      des:
       "Loki, the God of Mischief, steps out of his brother's shadow to embark on an adventure that takes place after the events of 'Avengers: Endgame.'",
      image: "assets/images/slider 1.png"
    },
    {
      name: "wanda vision",
      des:
        "Living idealized suburban lives, super-powered beings Wanda and Vision begin to suspect that everything is not as it seems.",
      image: "assets/images/slider 3.png"
    },
    {
      name: "raya and the last dragon",
      des:
        "Raya, a warrior, sets out to track down Sisu, a dragon, who transferred all her powers into a magical gem which is now scattered all over the kingdom of Kumandra, dividing its people",
      image: "assets/images/slider 4.png"
    },
    {
      name: "luca",
      des:
        "Luca, a sea monster, befriends Alberto, another one of his kind who takes him on a land adventure. He experiences an exciting summer while keeping his parents in the dark.",
      image: "assets/images/slider 5.png"
    }
  ];
  
  const carousel = document.querySelector(".carousel");
  let sliders = [];
  
  let slideIndex = 0; // to track current slide index.
  
   function createSlide(){ 
    if (slideIndex >= movies.length) {
      slideIndex = 0;
    }

    // creating DOM element
    let slide = document.createElement("div")
    slide["className"] = "slider"
    carousel.appendChild(slide)

    let content = document.createElement("div")
    content["className"] = "slide-content"
    slide.appendChild(content)

    let h1 = document.createElement("h1")
    h1["className"] = "movie-title"
    h1.innerHTML =  movies[slideIndex].name
    content.appendChild(h1)

    let p = document.createElement("p")
    p["className"] = "movie-des"
    p.innerHTML = movies[slideIndex].des
    content.appendChild(p)

    let image = document.createElement("img")
    image["src"] = movies[slideIndex].image
    slide.appendChild(image)

    slideIndex++;

    sliders.push(slide);
  
    if (sliders.length) {
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
        30 * (sliders.length - 2)
      }px)`;
    }

  };

    createSlide();
  
  setInterval(() => {
    createSlide();
  }, 3000);
  
  
  
  //video cards
  const videoCards = document.querySelectorAll(".video-card");
  
  videoCards.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      let video = item.children[1];
      video.play();
    });
    item.addEventListener("mouseleave", () => {
      let video = item.children[1];
      video.pause();
    });
  });
  
  //card slider
  let card = [
    {
      name : "loki",
      des : "Lorem ipsum dolor sit amet",
      image: "assets/images/poster 1.png"
    },
    {
      name : "mulan",
      des : "Lorem ipsum dolor sit amet",
      image: "assets/images/poster 2.png"
    },
    {
      name : "falcon and the winter soldier",
      des : "Lorem ipsum dolor sit amet",
      image: "assets/images/poster 3.png"
    },
    {
      name : "avengers : endgame",
      des : "Lorem ipsum dolor sit amet",
      image: "assets/images/poster 4.png"
    },
    {
      name : "thor ragnarok",
      des : "Lorem ipsum dolor sit amet",
      image: "assets/images/poster 5.png"
    },
    {
      name : "the avengers",
      des : "Lorem ipsum dolor sit amet",
      image: "assets/images/poster 6.png"
    },
    {
      name : "pirates of the caribbean",
      des : "Lorem ipsum dolor sit amet",
      image: "assets/images/poster 7.png"
    },
    {
      name : "soul",
      des : "Lorem ipsum dolor sit amet",
      image: "assets/images/poster 8.png"
    },
    {
      name : "raya the last dragon",
      des : "Lorem ipsum dolor sit amet",
      image: "assets/images/poster 9.png"
    },
    {
      name : "luca",
      des : "Lorem ipsum dolor sit amet",
      image: "assets/images/poster 10.png"
    },
    {
      name : "ford v ferrari",
      des : "Lorem ipsum dolor sit amet",
      image: "assets/images/poster 11.png"
    },
    {
      name : "dark phoenix",
      des : "Lorem ipsum dolor sit amet",
      image: "assets/images/poster 12.png"
    }
   ]


   const recommendedContainer = document.querySelector('.card-container.recommended-list')
   const showsContainer = document.querySelector('.card-container.shows-list')
 
    card.forEach(({name, des, image}) => loadCard(name, des, image, recommendedContainer))
    card.reverse().forEach(({name, des, image}) => loadCard(name, des, image, showsContainer))

    function loadCard(name, des, image, containerElement){
          let movieCard = document.createElement("div")
          movieCard["className"] = "card"  
          containerElement.appendChild(movieCard)

          let cardImg = document.createElement("img")
          cardImg["className"] = "card-img"
          cardImg["src"] = image
          movieCard.appendChild(cardImg)

          let cardBody = document.createElement("div")
          cardBody["className"] = "card-body"
          movieCard.appendChild(cardBody)

          let movieName = document.createElement("h2")
          movieName["className"] = "name"
          movieName.innerHTML = name
          cardBody.appendChild(movieName)

          let movieDes = document.createElement("h6")
          movieDes["className"] = "des"
          movieDes.innerHTML = des
          cardBody.appendChild(movieDes)

          let watchlistBtn = document.createElement("button")
          watchlistBtn["className"] = "watchlist-btn"
          watchlistBtn.innerHTML = "add to watchlist"
          cardBody.appendChild(watchlistBtn)
          
    }


  let cardContainers = document.querySelectorAll(".card-container");
  let preBtns = document.querySelectorAll(".pre-btn");
  let nxtBtns = document.querySelectorAll(".nxt-btn");
  
  cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
  
    nxtBtns[i].addEventListener("click", () => {
      item.scrollLeft += containerWidth - 200;
    });
  
    preBtns[i].addEventListener("click", () => {
      item.scrollLeft -= containerWidth + 200;
    });
  });

  