/* trace call stack and caller using current thread */
Java.perform(function() {
  function arrange(stack) {
    var ret = "";
    for(var i = 0; i < stack.length; ++i)
      ret += stack[i].toString() + "\n";  
    
    return ret;
  }
  
  var Thread = Java.use("java.lang.Thread");
  var ThreadInstance = Thread.$new();
  
  YourClass.Method.implementation = function() { // or using Interceptor.attach
    var stack = ThreadInstance.currentThread().getStackTrace(); // stack[3] is caller
    console.log(stack[3] + " Called This Method!");
    
    /* if u want seeing call stack */
    var full_call_stack = arrange(stack);
    console.log("Call Stack is : " + full_call_stack); 
  }
}
