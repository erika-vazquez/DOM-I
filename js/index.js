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


//Creates navigation
let aTags = document.querySelectorAll('a');

aTags[0].setAttribute('class', '.nav-item-1')
aTags[0].innerText = "Service"
aTags[1].setAttribute('class', '.nav-item-2')
aTags[1].innerText = "Product"
aTags[2].setAttribute('class', '.nav-item-3')
aTags[2].innerText = "Vision"
aTags[3].setAttribute('class', '.nav-item-4')
aTags[3].innerText = "Features"
aTags[4].setAttribute('class', '.nav-item-5')
aTags[4].innerText = "About"
aTags[5].setAttribute('class', '.nav-item-6')
aTags[5].innerText = "Product"

//changes the navigation text color to green
aTags.forEach(link => link.style.color = 'green')

//Two new items created for the navigation system
const newA1 = document.createElement('a');
const mainNav = document.querySelector('nav');
newA1.innerText = 'Blog'
newA1.href = '#'
mainNav.prepend(newA1)
newA1.style.color = 'red'

const newA2 = document.createElement('a');
const mainNav2 = document.querySelector('nav');
newA2.innerText = 'FAQ'
newA2.href = '#'
mainNav2.append(newA2)
newA2.style.color = 'red'


//creates the main header section
let mainHeading = document.querySelector('h1')
mainHeading.textContent = siteContent['cta']['h1'];

let mainButton = document.querySelector('button');
mainButton.innerText = "Get Started"

let logo2 = document.querySelector("#cta-img");
logo2.setAttribute('src', siteContent['cta']["img-src"])

//creates the main content section
let mainContent = document.querySelectorAll('.text-content');

mainContent[0].querySelector('h4').textContent = siteContent['main-content']['features-h4']
mainContent[0].querySelector('p').textContent = siteContent['main-content']['features-content']
mainContent[1].querySelector('h4').textContent = siteContent['main-content']['about-h4']
mainContent[1].querySelector('p').textContent = siteContent['main-content']['about-content']
mainContent[2].querySelector('h4').textContent = siteContent['main-content']['services-h4']
mainContent[2].querySelector('p').textContent = siteContent['main-content']['services-content']
mainContent[3].querySelector('h4').textContent = siteContent['main-content']['product-h4']
mainContent[3].querySelector('p').textContent = siteContent['main-content']['product-content']
mainContent[4].querySelector('h4').textContent = siteContent['main-content']['vision-h4']
mainContent[4].querySelector('p').textContent = siteContent['main-content']['vision-content']
//updates the middle image in the main content area
let logo3= document.querySelector("#middle-img");
logo3.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//creates the contact section
let contactInfo = document.querySelector('.contact'); 

contactInfo.getElementsByTagName('h4')[0].textContent = siteContent["contact"]["contact-h4"]
contactInfo.getElementsByTagName('p')[0].textContent = siteContent["contact"]["address"]
contactInfo.getElementsByTagName('p')[1].textContent = siteContent["contact"]["phone"]
contactInfo.getElementsByTagName('p')[2].textContent = siteContent["contact"]["email"]

//creating/setting the footer section
let footer = document.querySelector('footer');

footer.innerText = "Copyright Great Idea! 2018"