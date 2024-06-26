const str = "Hello Purwadhika"
const strUpper = str.toUpperCase()
const strLower = str.toLowerCase()
const newStr = str.replace("e", "a")

console.log(strUpper)
console.log(strLower)
console.log(newStr)

console.log("apel merah".replaceAll("a", "i").toUpperCase())
// ini ngitung nya mulai dari angka 0, jadi kalo mau dapet huruf "o" tulis nya angka 4
console.log(str.charAt(4))