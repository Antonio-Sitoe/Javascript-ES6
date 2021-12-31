setTimeout(() => console.log("Time 1")); // esse entra na web api

setTimeout(() => console.log("Time 2"), 100); // esse entra tambem
 
console.log("Log 1 "); // esse loga

setTimeout(() => console.log("time 3"), 50);// entra para web api

console.log("Log 2"); // 2 esse loga
