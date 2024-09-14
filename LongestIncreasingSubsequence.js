const input = [10, 9, 2, 5, 3, 8, 7, 101, 7, 18];
// const input = [9, 8, 7, 6, 5, 4, 3, 2, 1];
// const input = [5, 1, 6, 2, 7, 3, 8, 4, 9];
// const input = [5, 5, 5, 5, 5, 5];
// const input = [10, 22, 9, 33, 21, 50, 41, 60];

function LongestIncreasingSubsequence() {

    let outputArr = [];

    input?.forEach(element => {
        if (outputArr?.length == 0) {
            outputArr = [element];
        } else {
            if (element > outputArr[outputArr.length - 1]) {
                outputArr.push(element);
            } else {
                outputArr[outputArr.length - 1] = element;
            }
        }
    });

    console.log([...new Set(outputArr)]);
}

LongestIncreasingSubsequence();