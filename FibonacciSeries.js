const input = 6;

/*
    =>  Expected Output will be the input place Fibonacci number
    =>  Example : 
    
        Input = 6 , Output = 8
*/


function FibonacciSeries(){

    let list = [0, 1];

    while (list?.length < (input + 1)){
        list?.push(list[(list?.length - 1)] + list[(list?.length - 2)]);
    }

    console.log(list[input]);

}

FibonacciSeries();