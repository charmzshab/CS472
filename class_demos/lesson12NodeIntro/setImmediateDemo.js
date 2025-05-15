
setTimeout(() => console.log("this is setTimeout..."), 5000);//=> 1
setImmediate(() => { console.log('immediate'); });


for (let i = 0; i < 200000000; i++) { }