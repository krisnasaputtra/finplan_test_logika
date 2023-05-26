function sortNumInArray(nums) {
  const numsSort = nums.sort((a, b) => {
    return a - b;
  });

  return numsSort;
}

function findNotExistNumberInAraay(nums) {
  const temp = [];
  const result = [];
  const lengthNumsSort = nums.length;

  for (let i = nums[0]; i <= nums[lengthNumsSort - 1]; i++) {
    temp.push(i);
  }
  temp.forEach((tmp) => {
    if (!nums.includes(tmp)) {
      result.push(tmp);
    }
  });

  return result;
}

console.log(Math.min(...findNotExistNumberInAraay(sortNumInArray([5, 2, 8, 4, 3, 10]))));
console.log(Math.min(...findNotExistNumberInAraay(sortNumInArray([2, 3, 4, 6]))));
console.log(Math.min(...findNotExistNumberInAraay(sortNumInArray([8, 6, 7, 12]))));
