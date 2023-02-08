var width = (window.innerWidth > 0) ? window.innerWidth : screen.width; 
var video = document.getElementById("myVideo")
var closing = document.getElementById("close_bar")
var title = document.getElementById("title")
var button = document.getElementById("cover_button")
var string_in = "display: block; animation: fadeInAnimation ease 2s; animation-iteration-count: 1; animation-fill-mode: forwards;"
var string_out = "display: block; animation: fadeOutAnimation ease 2s; animation-iteration-count: 1; animation-fill-mode: forwards;"
function eliminate(){
    video.style.display = "none"
    closing.style.display = "none"
}

function displayFunc(){
    title.style.display = "none"
    button.style.display = "none"
    video.setAttribute("style", string_in)
    closing.setAttribute("style", string_in)
}

function undisplayFunc(){
    closing.setAttribute("style", string_out)
    video.setAttribute("style", string_out)
    setTimeout(eliminate,1250)
    title.setAttribute("style", "display: block;")
    button.style.display = "block"
}

var cursorBee = document.querySelector(".cursor-outer");
  var cursorEye = document.querySelector(".cursor-title");
  var scale = 1;
  
  function mousemoveHandler(e) {
    var target = e.target;
    var tl = gsap.timeline({
      defaults: {
        x: e.clientX,
        y: e.clientY,
        ease: "power2.out"
      }
    });
  
    if (target.tagName.toLowerCase() === "p" && target.closest(".cover_title")) {
      tl.to(cursorBee, {
        opacity: 0
      }).to(
        cursorEye,
        {
          opacity: 1
        },
        "-=0.5"
      );
    } 
    else {
      tl.to(cursorBee, {
        opacity: 1,
        scale: scale
      }).to(
        cursorEye,
        {
          opacity: 0
        },
        "-=0.5"
      );
    }
  }
  
  function mouseleaveHandler() {
    gsap.to(cursorBee, {
      opacity: 0
    });
  }
  
  document.addEventListener("mousemove", mousemoveHandler);
  document.addEventListener("mouseleave", mouseleaveHandler);