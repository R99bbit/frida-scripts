/* show method arguments */

Java.perform(function() { 
  YourClass.Method.implementation = function(arg1, arg2) { // rely on the number of args. example is two-args case
    console.log("arg1 : " + arg1);
    console.log("arg2 : " + arg2);
    return this.Method;
  }
});
