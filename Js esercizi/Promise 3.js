const isLogged = true;

function promise1(isLogged){
    return new Promise((resolve,reject) =>{
        if(isLogged){
            let rand = Math.random()
            resolve(rand)
        }else{
            reject(new Error("is not logged in"))
        }
    })
}

function promise2(rand){
    return new Promise((resolve,reject) =>{
        if(rand > 0.5){
            resolve({name: "John", age: 24})
        }else{
            reject(new Error("number is not greater then 0.5"))
        }
    })
}

promise1(isLogged)
.then(promise2)
.then((val) => console.log(val))
.catch((err) => console.log(err))
.finally(() => console.log("finally"))

