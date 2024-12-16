function outer (){
    let outerVar= "Akshad";
    function inner(){
        const innerVar="Jaiswal"
        console.log(outerVar +" "+  innerVar)
    }
    return inner;
}
const closure = outer();
closure()