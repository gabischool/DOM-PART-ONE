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



//nav selector
const [ nav ] = document.getElementsByTagName('nav');
let logo = document.getElementById("logo-img");

// CTA Selector
const [ cta ] = document.getElementsByClassName('cta');
const [ ctaH1 ] = document.getElementsByTagName('h1');
const [ ctaBtn ] = document.getElementsByTagName('button');
const ctaImg = document.getElementById('cta-img');

//Main Content Selector
const [ mc ] = document.getElementsByClassName('main-content');

//Middle Image Selector
const middleImg = document.getElementById('middle-img');

//Bottom Content Selector
const [ bc ] = document.getElementsByClassName("bottom-content");

// Text Content H4 and P Content Selectors
const textContentH4 = document.querySelectorAll(".text-content h4");
const textContentP = document.querySelectorAll(".text-content p");

// Contact H4 and P Content Selectors
const contactH4 = document.querySelectorAll(".contact h4");
const contactP = document.querySelectorAll(".contact p");

// Footer
const footerP = document.querySelectorAll("footer p");

// Mutate the Dom

//Header
logo.setAttribute('src', siteContent["nav"]["img-src"]);

var newLink1 = document.createElement("a");
newLink1.textContent = siteContent["nav"]["nav-item-7"];

var newLink2 = document.createElement("a");
newLink2.textContent = siteContent["nav"]["nav-item-8"];

nav.appendChild(newLink1);
nav.prepend(newLink2);

Array.from(nav.children).forEach((value, index) => {
  value.textContent = siteContent["nav"][`nav-item-${index + 1}`];
  value.setAttribute('style', "color:green;");
});



//CTA
ctaH1.textContent = siteContent["cta"]["h1"];
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);
ctaBtn.textContent = siteContent["cta"]["button"];

//Main Content

//Top Content
textContentH4[0].textContent = siteContent["main-content"]["features-h4"];
textContentP[0].textContent = siteContent["main-content"]["features-content"];

textContentH4[1].textContent = siteContent["main-content"]["about-h4"];
textContentP[1].textContent = siteContent["main-content"]["about-content"];


//Middle Image
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//Bottom Content
textContentH4[2].textContent = siteContent["main-content"]["services-h4"];
textContentP[2].textContent = siteContent["main-content"]["services-content"];

textContentH4[3].textContent = siteContent["main-content"]["product-h4"];
textContentP[3].textContent = siteContent["main-content"]["product-content"];

textContentH4[4].textContent = siteContent["main-content"]["vision-h4"];
textContentP[4].textContent = siteContent["main-content"]["vision-content"];

//Contact
contactH4[0].textContent = siteContent['contact']["contact-h4"];
contactP[0].textContent = siteContent['contact']["address"];
contactP[1].textContent = siteContent['contact']["phone"];
contactP[2].textContent = siteContent['contact']["email"];

//Footer
footerP[0].textContent = siteContent['footer']['copyright'];

