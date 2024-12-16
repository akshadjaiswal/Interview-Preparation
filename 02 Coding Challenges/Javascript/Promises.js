const myPromise = new Promise((resolve, reject) => {
    const success = false;
    if (success) {
        resolve("Completed")
    } else {
        reject("Rejected")
    }
})
myPromise.then((result) => {
    console.log(result)
}).catch((error)=>{
    console.log(error)
})