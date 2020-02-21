// using this script when u want hook instance
Java.perform(function() {
    Java.choose("com.examplePackage.exampleClass",
    {
        /* when instance founded, 'onMatch` function will called */
        onMatch: function(instance)
        {
            console.log("[+] Instance Found! Hook Start");
            TargetInstance = instance; // Binding Instance
            
            /* i want logging previous value */
            old_price = TargetInstance.price.value;
            old_point = TargetInstance.point.value;
            
            /* modifing member variables */
            TargetInstance.price.value = 0;
            TargetInstance.point.value = Number.MAX_VALUE;
        },    
        
        /* when their action is finished, 'onComplete' function will called */
        onComplete: function()
        {
            /* clarify result of hooking */
            console.log("[*] (price) : " + old_price + " ==> " + TargetInstance.price.value);
            console.log("[*] (point) : " + old_point + " ==> " + TargetInstance.point.value);
        }
    });
});
