function abc() {
  console.log(
    "i am called with just abc NOT abc() ,under 1- it see only after all other normal functions excecute"
  );
}
function abcf() {
  console.log(
    "i am printed with abcf(), it excute function not bother about settimeout  ,under 2"
  );
}
console.log("1");
/* my(); */
setTimeout(abc, 0);

console.log("2");

setTimeout(abcf(), 0);

console.log("3");

setTimeout(
  console.log(`here console.log directly inside settimeout not bother timeout, 
it will work only is its called
 in a function inside setTimeOut, under 3`),
  0
);

console.log("5");

setTimeout(
  () =>
    console.log(`settime out 0 console in function  
  setTimeOut(()=>con.., 0), under 5. will excecute all 
  normal functions excecute even if its o milliseconds`),
  0
);

console.log("6");

/*JavaScript is single threaded,
 which means that two pieces of JavaScript will not
  execute at the same time (unless using a worker, but
     each worker is also single-threaded). But JavaScript
      isn't the only thing at play when it comes 
      to the environment's API's. Functions like 
      setTimeout, setInterval and addEventListener
       are implemented natively (or, at-least, out
        side of the single-threaded JavaScript), and
         their callbacks are triggered by the environment,
          such as a browser. It is the environment that puts
           these callbacks onto the queue, to be executed by 
           the single threaded JavaScript engine. This is how 
           the browser is able to accept new click events to be
            fired, even though it is still executing some other 
            JavaScript code. This is the reason JavaScript 
 is considered event-driven.*/
