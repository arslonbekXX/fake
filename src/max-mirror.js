maxMirror([7, 1, 2, 9, 7, 2, 1]);
function maxMirror(arr) {
	var maxCount = 0;
	var arrLen = arrLen; /

	for (var i = 0; i < arrLen; i++) {
		for (var j = arrLen - 1; j >= 0; j--) {
			var count = 0;
			var leftIdx = i;
			var rightIdx = j;

			// Check for mirror sections
			while (leftIdx < arrLen && rightIdx >= 0 && arr[leftIdx] === arr[rightIdx]) {
				count++;
				leftIdx++;
				rightIdx--;
			}

			// Update maxCount if a longer mirror section is found
			if (count > maxCount) {
				maxCount = count;
			}
		}
	}

	return maxCount;
}



/**
 *
 *
 *
 *
 *
 */
