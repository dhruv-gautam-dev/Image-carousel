const slides = document.querySelectorAll(".slide");
var counter = 0;

slides.forEach(
  (slide, index)=>{
    slide.style.left=`${index *100}% `
  }
)

const slideImage=()=>{
  slides.forEach(
    (slide)=>{
        slide.style.transform=`translateX(-${counter *100}%)`
    }
  )
}

const goNext=()=>{
  // alert();
  if(counter < slides.length-1){
    counter++
  slideImage()
  }
  
}
const goPrev=()=>{
  counter--
  slideImage()
}