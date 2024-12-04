// const input = [10, 9, 2, 5, 3, 8, 7, 101, 7, 18];
// const input = [4,10,4,3,8,9];
const input = [0, 1, 0, 3, 2, 3];
// const input = [9, 8, 7, 6, 5, 4, 3, 2, 1];
// const input = [5, 1, 6, 2, 7, 3, 8, 4, 9];
// const input = [5, 5, 5, 5, 5, 5];
// const input = [10, 22, 9, 33, 21, 50, 41, 60];

function LongestIncreasingSubsequence() {

    let nums = input;

    if (nums.length === 0) return 0;
    
    const dp = new Array(nums.length).fill(1);
    
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    
    console.log(Math.max(...dp));
}

LongestIncreasingSubsequence();