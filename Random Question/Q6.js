let arr = [2, 96, 69, 77, 145, 20]

let maxElem = Math.max(...arr)
let secondMaxElem = Math.min(...arr)

for (let i = 1; i < arr.length; i++) {
    if (secondMaxElem < arr[i] && arr[i] < maxElem) {
        secondMaxElem = arr[i]
    }
}

console.log(secondMaxElem)