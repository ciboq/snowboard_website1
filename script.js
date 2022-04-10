fetch('https://api.airtable.com/v0/appwNEs14ZXwbbZ0B/Table%201', {
  headers: {
    Authorization: 'Bearer keyU0oov6exskr2Q0',
  },
})
  .then(res => res.json()) 
  .then(data => {
    console.log(data); 
arr=data.records


    var progress = document.querySelector('.progress');

    const snowboard_container = document.querySelector('.snowboard_container'); 

    data.records.forEach((album, index) => {
      // console.log(album); 

      
snowboard_container.innerHTML += `

<div class="snowboard_container snowboardContainerModal snowboardContainer`+index+`">
<div class="border">
<img class="snowboard" src="${album.fields.snowboard_pic[0].thumbnails.large.url}"/>
</div>
</div>

`;

// let snowboardPic = arr.filter((album) => {album.fields.snowboard_pic[0].thumbnails.large.url})
// console.log(snowboardPic)

anime({
       targets: '.snowboard',
       translateX: '220px',
       duration: 2000,
       easing: 'easeInOutExpo',
       loop: true,
       direction: 'alternate',
       update: function(animation) {
         progress.value = animation.progress;
       }
     });
   
});

let popup = document.querySelector(".popup"),
button = document.querySelector(".snowboard");
// button.addEventListener("click", openPop);
button.addEventListener("click", function(e){
console.log(e.target.className)
var b=e.target.className.split(' ')//获取的所有的class
// console.log(b)
var c=b[b.length - 1]
// console.log(c)
var d=c.split('snowboardContainer')[1]
// console.log(d)
//判断点击的是第几个
//  然后获取的当前的数据，把数据拼进去就好了

popup.innerHTML=`<div class="popcard">
<h1>`+arr[d].fields.snowboard_name+`</h1>
<h3>`+arr[d].fields.snowboard_description+`</h3>
</div>`
popup.style.display = "Block";
});

// function openPop(){

// var a= document.querySelector(".snowboardContainerModal"); 
// var b=a.className.split(' ')//获取的所有的class
// var c=b[b.length - 1]
// var d=c.split('snowboardContainer')[1]//判断点击的是第几个
// //  然后获取的当前的数据，把数据拼进去就好了
// popup.innerHTML=`<div class="popcard">
// <h1>`+arr[d].createdTime+d+`</h1>
// <p>Click anywhere to close the message</p>
// </div>`
// popup.style.display = "Block";
// }

window.addEventListener("click", closePop);

function closePop(e){
if(e.target == popup) {
popup.style.display = "none";
}
}



});