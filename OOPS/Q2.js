let obj = {
    name : "Farhan",
    greet : function(){
        console.log("Hello " + this.name);
    }
}

console.log(obj.name); // Output: Farhan