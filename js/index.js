const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//bigHeader
const bigTitle = document.querySelector(".cta-text h1")
bigTitle.textContent = siteContent['cta']['h1']

//textButton

const button = document.querySelector(".cta-text button")
button.textContent = siteContent['cta']['button']


//headerImage
const headerImage = document.querySelector("#cta-img")
headerImage.setAttribute('src', siteContent["cta"]["img-src"])


//navBar
const navBar = document.querySelectorAll("nav a")
navBar[0].textContent = siteContent["nav"]["nav-item-1"]


const navBarOne= document.querySelectorAll("nav a")
navBar[1].textContent = siteContent["nav"]["nav-item-2"]

const navBarTwo = document.querySelectorAll("nav a")
navBarTwo[2].textContent = siteContent["nav"]["nav-item-3"]

const navBarThree = document.querySelectorAll("nav a")
navBarThree[3].textContent = siteContent["nav"]["nav-item-4"]

const navBarFour = document.querySelectorAll("nav a")
navBarFour[4].textContent = siteContent["nav"]["nav-item-5"]

const navBarFive = document.querySelectorAll("nav a")
navBarFive[5].textContent = siteContent["nav"]["nav-item-6"]

//MainContent
const mainContent = document.querySelectorAll(".top-content h4")
mainContent[0].textContent = siteContent["main-content"]["features-h4"]

const mainPara = document.querySelectorAll(".top-content  p")
mainPara[0].textContent = siteContent["main-content"]["features-content"]

const mainContentTwo = document.querySelectorAll(".top-content h4")
mainContentTwo[1].textContent = siteContent["main-content"]["about-h4"]

const mainParaTwo = document.querySelector(".text-content p")
mainPara[1].textContent = siteContent["main-content"]["about-content"]