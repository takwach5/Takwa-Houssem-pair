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

 

 function feed () {
  var img = document.getElementById("img1");
  img.src="https://media.tenor.com/WaQ9Avqbp38AAAAj/kikicat-kikiapp.gif"
  if (this.hunger === 0) {
    return "I'm full";
  }
  this.hunger--;
  this.happiness++;
  this.tiredness++;
  return "Miaaaaw, thank you";
}


 

  function sleep () {
  var img = document.getElementById("image3");
  img.src="https://media.tenor.com/Y8WQ1xwb0LkAAAAi/sleepy-cat.gif"
  if (this.tiredness === 0) {
    return "I'm fine";
  }
  this.tiredness--;
  this.hunger++;
  this.happiness++;
  return "Thank you";
  
};

 
function pet () {
  var img = document.getElementById("img2");
  img.src="https://media.tenor.com/g2H6xx_Ds94AAAAi/dog-gag.gif"
  if (this.loneliness === 0) {
    return "I'm fine";
  } else if (this.hunger === 10) {
    return "I'm really hungry";
  } else if (this.happiness === 10) {
    return "I'm VERY happy";
  }
  this.tiredness++;
  this.loneliness--;
  this.happiness++;
  this.hunger++;
  return "Thank you";
} 
