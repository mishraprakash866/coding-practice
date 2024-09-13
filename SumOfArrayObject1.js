const arr = [
    {id: 1, amount: 100},
    {id: 2, amount: 200},
    {id: 3, amount: 300},
    {id: 1, amount: 400},
    {id: 2, amount: 500},
    {id: 3, amount: 600}
]

/*
    =>  Expected Output will be 

    [
        { 1 : 500 },
        { 2 : 700 },
        { 3 : 900 }
    ]
*/



function sumOfObject(){

    let result = {};

    arr.forEach((ele) => {
        if(result[ele?.id]){
            result[ele?.id] = result[ele?.id] + ele?.amount;
        }else{
            result[ele?.id] = ele?.amount;
        }
    })

    console.log(result);

}

sumOfObject();