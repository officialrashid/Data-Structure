var array = [10,6,4,5,6,8,8,6,6,4,5,4,4,8]

function removeDuplicates(array) {

    return array.filter((item, index) => array.indexOf(item) === index);
    
}
console.log(removeDuplicates(array));
