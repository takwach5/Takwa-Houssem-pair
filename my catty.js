
function Cat() {
  var obj = {};
  obj.happiness = Math.floor(Math.random() * 10 + 1);
  obj.tiredness = Math.floor(Math.random() * 10 + 1);
  obj.hunger = Math.floor(Math.random() * 10 + 1);
  obj.loneliness = Math.floor(Math.random() * 10 + 1);
  obj.feed = feed;
  obj.sleep = sleep;
  obj.pet = pet;
  return obj;
}

 
var mycatty=Cat()

 function feed() {
  var img = document.getElementById("img1");
  img.src="https://media.tenor.com/WaQ9Avqbp38AAAAj/kikicat-kikiapp.gif"
  if (mycatty.hunger === 0) {
    mycatty.hunger--;
    mycatty.happiness++
    mycatty.tiredness++
    document.getElementById("the  hunger").innerText = "Hunger increased. Current hunger"
 //// }
 /// else {
  ////alert("I'm really hungry! Feed me!")
  ////console.log(mycatty.hunger)
  }}
  function sleep () {
  var img = document.getElementById("img3");
  img.src="https://media.tenor.com/Y8WQ1xwb0LkAAAAi/sleepy-cat.gif"
  if (mycatty.tiredness === 0) {
    mycatty.hunger++
    mycatty.happiness++
    mycatty.tiredness--
  ///  alert("im fine") 
   /// console.log(mycatty.happiness)
   /// console.log(mycatty.tiredness)
  
 // } else {
   //// alert("Thanks")
   //// console.log(mycatty.happiness)
   //// console.log(mycatty.tiredness)
  }
}
  }
}

 
function pet () {
  var img = document.getElementById("img2");
  img.src="https://media.tenor.com/g2H6xx_Ds94AAAAi/dog-gag.gif"
  //// (mycatty.loneliness === 0) {
    ///document.getElementById("pet").innerText = "I'm fine " 
  ////} else if (mycatty.hunger === 10) {
   //// document.getElementById("pet").innerText = "I'm very hungry"
  ////} else if (mycatty.happiness === 10) {
  //////  document.getElementById("pet").innerText = "I'm VERY happy"
  mycatty.tiredness++
  mycatty.loneliness--
  mycatty.happiness++
  mycatty.hunger++
  ///document.getElementById("pet").innerText = "Thanks"

}

var audio = document.getElementById("myAudio")
  $('#bouton1').click(function() {
    audio.play()

  })
  


