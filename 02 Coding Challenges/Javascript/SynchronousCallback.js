function greet(name) {
    console.log("Hello " + name)
}

function processInput(callBack) {
    const userName = "Akshad"
    callBack(userName)
}

processInput(greet)