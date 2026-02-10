console.log("Hello, World!");

//mv fadein
window.addEventListener("load", ()=>{

  const img = document.querySelector(".mv-img");
  const text = document.querySelector(".mv-text");

  setTimeout(()=>{
    img.classList.add("show");
  },200);

  setTimeout(()=>{
    text.classList.add("show");
  },600);

});


// 実績カウント
const section = document.querySelector(".result");
const nums = document.querySelectorAll(".num");

let started = false;

function countUp(){
  nums.forEach(num=>{
    const target = +num.dataset.target;
    let count = 0;
    const speed = target / 60;

    function update(){
      count += speed;

      if(count < target){
        num.textContent = Math.floor(count);
        requestAnimationFrame(update);
      }else{
        num.textContent = target;
      }
    }

    update();
  });
}

window.addEventListener("scroll", ()=>{

  if(started) return;

  const top = section.getBoundingClientRect().top;

  if(top < window.innerHeight - 150){
    started = true;
    countUp();
  }

});

// reason 下線
const circles = document.querySelectorAll(".reason-circle li");
let done = false;

window.addEventListener("scroll", ()=>{

  if(done) return;

  const top = document.querySelector(".reason").getBoundingClientRect().top;

  if(top < window.innerHeight - 150){
    done = true;

    circles.forEach((el,i)=>{
      setTimeout(()=>{
        el.classList.add("show");
      }, i*200);
    });
  }

});



// flow
const flowItems = document.querySelectorAll(".flow-item");

window.addEventListener("scroll",()=>{
  flowItems.forEach(el=>{
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
      el.classList.add("show");
    }
  });
});
