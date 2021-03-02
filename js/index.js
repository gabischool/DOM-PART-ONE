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

 let logo = document.getElementById("logo-img");
 logo.setAttribute('src',siteContent["nav"]["img-src"])
 let topimage=document.querySelector("#cta-img");
 topimage.setAttribute("src",siteContent["cta"]["img-src"])

 let navigation = document.querySelectorAll("nav a");

 navigation.forEach((item,index)=> {
   
item.textContent=siteContent.nav[`nav-item-${index + 1}`];
 })

 const h1 = document.querySelector('.cta h1');
h1.textContent = siteContent.cta.h1;

const button1 = document.querySelector('.cta button');
button1.textContent = siteContent.cta.button;

document.querySelector('#middle-img').src = siteContent["main-content"]["middle-img-src"];

const mainContentHeader = document.querySelectorAll('.main-content h4');
const mainContentPara = document.querySelectorAll('.main-content p');


mainContentHeader[0].textContent=siteContent['main-content']["features-h4"]
mainContentHeader[1].textContent = siteContent["main-content"]["about-h4"];
mainContentHeader[2].textContent = siteContent["main-content"]["services-h4"];
mainContentHeader[3].textContent = siteContent["main-content"]["product-h4"];
mainContentHeader[4].textContent = siteContent["main-content"]["vision-h4"];

mainContentPara[0].textContent = siteContent["main-content"]["features-content"];
mainContentPara[1].textContent = siteContent["main-content"]["about-content"];
mainContentPara[2].textContent = siteContent["main-content"]["services-content"];
mainContentPara[3].textContent = siteContent["main-content"]["product-content"];
mainContentPara[4].textContent = siteContent["main-content"]["vision-content"];

const contactHeader = document.querySelector('.contact h4');
const contactPara = document.querySelectorAll('.contact p');

contactHeader.textContent = siteContent.contact["contact-h4"];
contactPara[0].textContent = siteContent.contact["address"];
contactPara[1].textContent = siteContent.contact["phone"];
contactPara[2].textContent = siteContent.contact.email;


const newNavigation1 = document.createElement('a');
const newnavigation2 = document.createElement('a');
newNavigation1.href = '#';
newnavigation2.href = "#";
newNavigation1.textContent = "I'm not";
newnavigation2.textContent = "Original";



const anotherNav = document.querySelector('header nav');
anotherNav.prepend(newNavigation1);
anotherNav.appendChild(newnavigation2);

newNavigation1.style.color = "blue";
newnavigation2.style.color = "green";



