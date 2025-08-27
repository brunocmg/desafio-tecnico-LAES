function findMedianSortedArrays_Simple(nums1, nums2) {
  const merged = [];
  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      merged.push(nums1[i]);
      i++;
    } else {
      merged.push(nums2[j]);
      j++;
    }
  }

  while (i < nums1.length) {
    merged.push(nums1[i]);
    i++;
  }
  while (j < nums2.length) {
    merged.push(nums2[j]);
    j++;
  }

  const totalLength = merged.length;
  const midIndex = Math.floor(totalLength / 2);

  if (totalLength % 2 === 1) {
    return merged[midIndex];
  } else {
    const mid1 = merged[midIndex - 1];
    const mid2 = merged[midIndex];
    return (mid1 + mid2) / 2;
  }
}

console.log(findMedianSortedArrays_Simple([1, 2], [3, 4]));
