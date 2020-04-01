Function.prototype.defer= function(ms){
    setTimeout(this,ms)
}
function hello(){
     console.log("hello after one second")
    }
    
hello.defer(1000)

function cazzabubbolo(){
    console.log ("i'm cazzabubbolo after 8 seconds")
}
cazzabubbolo.defer(8000)
console.log(Function.prototype)
