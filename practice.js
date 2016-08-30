//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
      // It refers the the object that a function is a method of.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      // Explicit: uses .bind, .call, .apply, and the context is given explicitly
      // Implicit:  the context is implied within the funtion. "This" will be found to the left of the period (property).
      // Default: when no context is given, the keyword references the Window as the object.
      // Within an object, "this" refers to the object.


  // 3) What is the difference between call and apply?

      //Answer
      // The call() method calls a function with a given this value and arguments provided individually/
      //The apply() method calls a function with a given this value and arguments provided as an array (or an array-like object).


  // 4) What does .bind do?

      // //Answer
      //  It creates a new function that, when called,
      //  has its this keyword set to the provided value,
      //  with a given sequence of arguments preceding any provided when the new function is called.

//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
    var user =
    {
      username: "Todd"
      , email: "twill74@yahoo.com"
      , getUsername: function() {
          return this.username;
      }
    }


//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
    user.getUsername();

//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here
function Car(make, model, year, move) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.move = move;
  this.moveCar = function(amount) {
  this.move += amount;
    return this.move;
  }
}


var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to add a move property and write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here
getYear.call(prius);
getYear.call(mustang);


//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

setTimeout(getMyUsername, 5000);

var userName = getMyUsername.call(myUser);

//Fix this function definition
// 'iliketurtles'
//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?
//Note(no tests)
  //Answer Here
//**Undefined, because it defaults to the window.

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here
  //The Window.

//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.
