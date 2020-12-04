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

function quickSort(array) {
    if (array.length < 2) {
        return array;
    }

    const isUnique = array.every(v => v === array[0]);
    if (isUnique) {
        return array;
    }

    const pivot = array[Math.floor(Math.random() * array.length)]
    const less = array.filter(value => value < pivot);
    const greater = array.filter(value => value >= pivot);

    return [...quickSort(less), ...quickSort(greater)];
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

const array = getRandomArray(1000);
console.log("Begin array: " + array.toString())
console.log("Min value of array: " + getMinValue(array).toString())
console.log("Max value of array: " + getMaxValue(array))
console.log("Median value of array: " + getMedianValue(array))
console.log("Sorted array: " + quickSort(array));
console.log("Tags count:");
console.log(getTagsMap());