Interceptor.attach(Module.findExportByName(/* so file */, /* native function */), { // or erceptor.replace()
  onEnter: function(args) {
    /* hooking code */
  },
  
  onLeave: function(retVal) {
    /* return modify */
  }
});
