function fibonacci(n){
    var fibo = [0]
    if(n==1){return fibo}
    if(n==2){
        fibo.push(1)
        return fibo
    }
    if(n>=3){
        fibo.push(1)
        let x = 0
        let y = 1
        let fib = n
        for(let i = 3; i <=n; i++){
            fib = y+x
            x = y
            y = fib
            fibo.push(fib)
        }
    }
    
    return fibo
}
//chamando a função
console.log(fibonacci(6))
