const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25) ) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});

window.addEventListener("load", () => { 
  handleScrollAnimation();
});



function contact() { 
 const item = document.getElementById('contact');
 item.innerHTML = "</br> </br> subscribe to our newsletter! </br> lorem ipsum dolor sit amet </br> </br> "



 // ✅ Create element
 const el = document.createElement('a');

 // ✅ Set ID attribute on element
 el.setAttribute('id', 'my-id');
 
 // ✅ Add text content to element
 el.textContent = "Subscribe";
 el.style.border = "none"
 el.style.backgroundColor = "rgb(239, 203, 0)"
 el.style.borderRadius = "15px 15px"
 el.style.padding = "10px 10px";
 el.style.borderColor = "rgb(239, 203, 0)"
 el.style.fontWeight = "bolder"
 
 
 // ✅ Or set the innerHTML of the element
 // el.innerHTML = `<span>Hello world</span>`;
 
 // ✅ add element to DOM
 const box = document.getElementById('contact');
 box.appendChild(el);
 
 
  var a = document.getElementById('my-id'); //or grab it by tagname etc
 a.href = "form.html"
}

