 setTimeout(() => {
    console.log("10 seconds have passed");
                }, 10000);
console.log("process 1");


setTimeout(() => {
    console.log("process 2");

    setTimeout(() => {  
        console.log("process 3");
    }, 2000);
}, 2000);
