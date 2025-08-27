nums = [5, 13, 2, 3, 1]; // mude os numeros e/ou a quantidade caso queira elementos diferentes
target = 4; // mude o target caso queira uma soma diferente

function encontrarNumeros(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return null;
}

console.log(encontrarNumeros(nums, target));
