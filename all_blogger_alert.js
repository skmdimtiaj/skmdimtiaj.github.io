//alert('ok');

var overlay_styles = `
#overlay {
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 2;
  cursor: pointer;
  /*padding:50px;
  overflow: hidden;*/
}

#text{
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 50px;
  color: white;
  transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);
}
.responsive-iframe {
  /*position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;*/
  width: 100%;
  height: 100%;
}
`

overlay_html = `
<div id="overlay" onclick="off()">
  <!--div id="text">Overlay Text</div-->
  <iframe class="responsive-iframe" src="//github.io.boysofts.com/age-varification.html"></iframe>
</div>
`


var styleSheet = document.createElement("style")
styleSheet.type = "text/css"
styleSheet.innerText = overlay_styles
document.head.appendChild(styleSheet)

var overlay_div = document.createElement("div")
overlay_div.innerHTML = overlay_html
document.body.appendChild(overlay_div)



document.getElementById("overlay").style.display = "block"


function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
