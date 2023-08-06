
// Module 4 Assignment Instructions.


(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {

  var firstLetter = names[i].charAt(0).toLowercase();

  if (firstLetter === 'j') {
   console.log(byeSpeaker.speak(names[i]));
  }
  else {
    console.log(helloSpeaker.speak(names[i]));
  }
}

});

