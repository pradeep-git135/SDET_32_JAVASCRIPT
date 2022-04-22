let arr = [0,1,0,1,1,0,0,1]
let count = 0;
for (let index = 0; index < arr.length; index++) {
    
    if (arr[index] == 0) {
        count++
    }
}

for (let index = 0; index < count; index++) {
    arr[index] = 0
    
}
for (let index = count; index < arr.length; index++) {
    arr[index] = 1
}
console.log(arr);