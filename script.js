const change = document.getElementById('image');
const pics = document.querySelectorAll('.preview');

function upDate(previewPic){
  change.style.backgroundImage=`url('${previewPic.src}')`;
  console.log("image in");
  change.innerHTML=previewPic.alt;
	}

	function unDo(){
    console.log("image out");
    change.style.backgroundImage="url('')";
    document.getElementById('image').innerHTML='Hover over an image below to display here.';
  }
	window.onload = function refresh(){
		console.log("The gallery is ready.");
	};

pics.forEach(img => {
  img.addEventListener('focus', () => upDate(img));
  img.addEventListener('blur', unDo);     
})
