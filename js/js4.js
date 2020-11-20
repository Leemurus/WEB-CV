function getRandomArray(size) {
    return Array.from(
        {length: size},
        () => Math.floor(Math.random() * size)
    );
}

function getMaxValue(array) {
    let maxValue = -Infinity;

    for (let i = 0; i < array.length; i++) {
        if (maxValue < array[i]) {
            maxValue = array[i]
        }
    }

    return maxValue;
}

function getMinValue(array) {
    let minValue = Infinity;

    for (let i = 0; i < array.length; i++) {
        if (minValue > array[i]) {
            minValue = array[i]
        }
    }

    return minValue;
}

function getMedianValue(array) {
    const sortedArray = quickSort(array);
    const leftMiddleIndex = Math.floor(sortedArray.length / 2);
    const rightMiddleIndex = Math.floor((sortedArray.length - 1) / 2);
    return (sortedArray[leftMiddleIndex] + sortedArray[rightMiddleIndex]) / 2;
}

function mergeArray(left, right) {
    let new_array = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            new_array.push(left[i]);
            i++;
        } else {
            new_array.push(right[j]);
            j++;
        }
    }

    new_array = new_array.concat(left.slice(i, left.length));
    new_array = new_array.concat(right.slice(j, right.length));

    return new_array;
}

function quickSort(array) {
    if (array.length < 2) {
        return array;
    }

    const pivot = array[Math.floor(Math.random() * array.length)]
    const left = [];
    const right = [];
    let isNotUnique = false;

    for (let i = 0; i < array.length; i++) {
        if (pivot > array[i]) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
        isNotUnique |= (array[0] != array[i]);
    }

    if (!isNotUnique) {
        return array;
    }

    return mergeArray(quickSort(left), quickSort(right));
}

function getTagsMap() {
    const tagList = document.querySelectorAll("*");
    const tagMap = new Map();

    for (let i = 0; i < tagList.length; i++) {
        tagMap.set(
            tagList[i].tagName,
            tagMap.has(tagList[i].tagName) ? tagMap.get(tagList[i].tagName) + 1 : 1
        )
    }

    return tagMap;
}

const array = getRandomArray(10);
console.log("Begin array: " + array.toString())
console.log("Min value of array: " + getMinValue(array).toString())
console.log("Max value of array: " + getMaxValue(array))
console.log("Median value of array: " + getMedianValue(array))
console.log("Sorted array: " + quickSort(array));
console.log("Tags count:");
console.log(getTagsMap());