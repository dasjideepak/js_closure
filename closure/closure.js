// 1
function nonsense(string) {
    var blab = function(){
    alert(string);
    }
    blab();
}
  
// 2
function nonsense(str){
    var blab = function(){
    alert(str);
    }
    setTimeout(blab,200);
}

// 3 
function nonsense(string) {
	var blab = function() {
		alert(string);
	};
	return blab;
}
let blabLater = nonsense("Hi");
let blabAgainLater = nonsense("How Are You?");

// 4
blabLater();
blabAgainLater();

// 5
var lastNameTrier = function(firstName) {
    var innerFunction = function(lastName) {
        console.log(firstName + lastName);
    };
    return innerFunction;
};

// 6
function storyWriter(string = '') {
    return {
      story: "",  
      addWords: function(text = "") {
        return story += text;
      },
      erase: function() {
        return story = "";
      }
    }
}

var farmLoveStory = storyWriter();
farmLoveStory.addWords('There was once a lonely cow.'); // 'There was once a lonely cow.'
farmLoveStory.addWords('It saw a friendly face.'); //'There was once a lonely cow. It saw a friendly face.'

var storyOfMyLife = storyWriter();
storyOfMyLife.addWords('My code broke.'); // 'My code broke.'
storyOfMyLife.addWords('I ate some ice cream.'); //'My code broke. I ate some ice cream.'
storyOfMyLife.erase(); // ''