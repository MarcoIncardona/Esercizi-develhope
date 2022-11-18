const number = 15;

let promise = new Promise((resolve, reject) =>{
    if(number > 10){
        resolve(number)
    }else{
        reject(new Error("Number is not greater then 10"))
    }
})

.then((val) => console.log(val))
.catch((err) => console.log(err))

