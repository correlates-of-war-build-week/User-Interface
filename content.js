const logo = document.querySelector('.logo');
logo.addEventListener("mouseover", (e) => e.target.style.transform = "scale(1.2)");
logo.addEventListener("mouseout", (e) => e.target.style.transform = "scale(1)")




class HoverImages {
  constructor(domElement){
    console.log(domElement)
    domElement.addEventListener("mouseover", (e) => e.target.style.boxShadow = "10px 20px 30px gray");
    domElement.addEventListener("mouseout", (e) => e.target.style.boxShadow = "none")
  }
}

const contentImages = document.querySelectorAll('.cotent-img')
contentImages.forEach(img => new HoverImages(img));











