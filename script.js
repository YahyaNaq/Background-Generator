var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("grad");
var random=document.querySelector("button");
var copygrad=document.querySelector(".copy");
var toast = document.getElementById("mtoast");
// console.log(css.textContent)

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randnum(){
	var hex=Math.floor((Math.random() * 255) + 1).toString(16);
	if (hex.length===1){
		hex=hex+"0"
	}
	return hex;
}

function autosetgradient(){
	color1.value="#"+randnum()+randnum()+randnum();
	color2.value="#"+randnum()+randnum()+randnum();
	setGradient()
}

function copyToClipboard() {
	// copygrad.select();
	// copygrad.setSelectionRange(0, 99999); /* For mobile devices */
   /* Copy the text inside the text field */
  	navigator.clipboard.writeText(css.textContent);
  	toast.innerHTML = "Copied";
    toast.style.display = "block";
  	// alert("Copied")
}

random.addEventListener("click", autosetgradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

copygrad.addEventListener("click", copyToClipboard);