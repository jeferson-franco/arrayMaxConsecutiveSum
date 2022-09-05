function solution(inputArray, k) {
    let max = 0;
    let sum = 0;
    for (let i = 0; i < inputArray.length; i++) {
        sum += inputArray[i];
        if (i >= k - 1) {
            max = Math.max(max, sum);
            sum -= inputArray[i - k + 1];
        }
    }
    return max;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test arrayMaxConsecutiveSum

// alternative solution