function findMissingNumber(nums) {
  const n = nums.length;

  const expectedSum = (n * (n + 1)) / 2;

  let actualSum = 0;
  for (let i = 0; i < nums.length; i++) {
    actualSum = actualSum + nums[i];
  }

  const missingNumber = expectedSum - actualSum;

  return missingNumber;
}

const ex = [3, 0, 1];
console.log(`For [3,0,1], the missing number is: ${findMissingNumber(ex)}`);
