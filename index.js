// utils.js

export default function findLongestWord(words) {
    return words.reduce((longest, current) => current.length > longest.length ? current : longest, "");
}

export default function sumUniqueNumbers(numbers) {
    const uniqueNumbers = numbers.filter((num, index, array) => array.indexOf(num) === index);
    return uniqueNumbers.reduce((sum, num) => sum + num, 0);
}

export default function mergeArrays(...arrays) {
    const mergedArray = [].concat(...arrays);
    return Array.from(new Set(mergedArray));
}

export default function hasProperty(obj, propertyName) {
    return obj.hasOwnProperty(propertyName);
}

export default function getPropertyValue(obj, propertyName) {
    return obj[propertyName];
}

export default function invertObject(obj) {
    const inverted = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            inverted[obj[key]] = key;
        }
    }
    return inverted;
}
