fetch('https://api.airtable.com/v0/appwNEs14ZXwbbZ0B/Table%201', {
  headers: {
    Authorization: 'Bearer keyU0oov6exskr2Q0',
  },
})
  .then(res => res.json()) 
  .then(data => {
    console.log(data); 

    const snowboard_container = document.querySelector('.snowboard_container'); 
    data.records.forEach(album => {
      console.log(album); 

      
snowboard_container.innerHTML += `

`;
    });
    
  var progress = document.querySelector('.progress');

  var myAnimation = anime({
    targets: '#capita',
    translateX: '250px',
    duration: 2000,
    easing: 'easeInOutExpo',
    loop: true,
    direction: 'alternate',
    update: function(animation) {
      progress.value = animation.progress;
    }
  });

  var progress = document.querySelector('.progress');

  var myAnimation = anime({
    targets: '#burton',
    translateX: '250px',
    duration: 2200,
    easing: 'easeInOutExpo',
    loop: true,
    direction: 'alternate',
    update: function(animation) {
      progress.value = animation.progress;
    }
  });

  let popup = document.querySelector(".popup"),
    button = document.querySelector(".snowboard_container");

button.addEventListener("click", openPop);

function openPop(){
  popup.style.display = "Block";
}

window.addEventListener("click", closePop);

function closePop(e){
  if(e.target == popup) {
  popup.style.display = "none";
}
}

popup.innerHTML += `

`;



  
  });