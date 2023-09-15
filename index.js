/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    let arg = process.argv
    let op = arg[2];
    const nums = arg.slice(3);
    let result = 0;

    if (!op) {
        return `No operation provided...`;

    } else if (!nums.length) {
        return `No numbers provided...`;
    }

    if (op === "plus") {
        for (const num of nums) {
            result += Number(num);
        }
        return result;

    } else if (op === "minus") {
        result = nums[0];
        for (let i = 1; i < nums.length; i++) {
            result -= Number(nums[i]);
        }
        return result;
        
    } else {
        return `Invalid operation: ${op}`;
    }

}

// Don't change anything below this line.
module.exports = calculator;
