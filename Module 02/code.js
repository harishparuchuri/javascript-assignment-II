let age=25;
//Creating new Promise
let checkAge= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(age>18) resolve("Older than 18");
            else    reject("less than 18");
            
        },2000);
       
    }
);
checkAge.then((message)=>{console.log(message);})
.catch((message)=>{console.log(message);});
    
