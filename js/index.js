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

let mainTitle = document.querySelectorAll(".text-content h4")

// main content

mainTitle[0].textContent = siteContent["main-content"]["features-h4"];
mainTitle[1].textContent = siteContent["main-content"]["about-h4"];
mainTitle[2].textContent = siteContent["main-content"]["services-h4"];
mainTitle[3].textContent = siteContent["main-content"]["product-h4"];
mainTitle[4].textContent = siteContent["main-content"]["vision-h4"];


let mainContentP = document.querySelectorAll(".text-content p")

mainContentP[0].textContent = siteContent["main-content"]["features-content"];
mainContentP[1].textContent = siteContent["main-content"]["about-content"];
mainContentP[2].textContent = siteContent["main-content"]["services-content"];
mainContentP[3].textContent = siteContent["main-content"]["product-content"];
mainContentP[4].textContent = siteContent["main-content"]["vision-content"];
//add nav bar and paragraph */


let topImage = document.querySelector("#cta-img")
topImage.setAttribute('src', siteContent["cta"]['img-src']);


let middleImage = document.querySelector("#middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


let navItems = document.querySelectorAll("nav a")
navItems.forEach(function(item, index) {
  item.textContent = siteContent.nav[`nav-item-${index + 1}`]
})

// botton and title content //

let buttonText = document.querySelector(".cta-text button");
buttonText.textContent = siteContent.cta.button;

let titleText = document.querySelector(".cta-text h1");
titleText.textContent = siteContent.cta.h1;


// bottom content:  contact copyright // 

let bottomContent = document.querySelector("footer p");
bottomContent.textContent = siteContent["footer"]["copyright"];





contactText[0].textContent = siteContent["contact"]["contact-h4"];
console.log(contactText)
contactText[1].textContent = siteContent["contact"]["address"];
contactText[2].textContent = siteContent["contact"]["phone"];
contactText[3].textContent = siteContent["contact"]["email"];



