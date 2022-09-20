

function subtraction (num){
 return  num - 2;
}


function calculate () {
  const addition = 5+9;
  return subtraction(addition);
}



calculate();

//callstack

// stack overflow 

// memory leak 

// let array = [];

// for(i = 5; i > 1; i++ ) {
// 	array.push(i-1);
// }

//other example of memory leak happen in JS 


// global variable 

var a = 1;
var b = 1;
var c = 1;

// event listeners 


var element = document.getElementById('button');
element.addEventListener('click', onClick)


// set interval


setInterval(()=>{
	// refrencing objects
})


// interview question  

console.log("1");


setTimeout(()=>{
console.log("2");
}, 1000)
console.log("3");

// output - 1,3,undefine,2








