Interceptor.attach(Module.findExportByName(/* so file */, /* native function */), { // or erceptor.replace()
  onEnter: function(args) {
    /* hooking code */
  },
  
  onLeave: function(retVal) {
    /* return modify */
  }
});

Interceptor.replace(Module.findExportByName(/* so file */, new NativeCallback(function(arg1, arg2) {
  /* call back */
});
