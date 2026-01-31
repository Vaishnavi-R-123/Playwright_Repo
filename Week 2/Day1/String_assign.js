// String - Assignments

// Given a string s consisting of words and spaces, return the length of the last word in the string. 

//Example 1:
let s = 'Hello World'
let splited = s.split(' ')
console.log("Splited words in array: " , splited)
let lastWord = splited.length-1
console.log("Length of the last word:" ,splited[lastWord].length )

//Example 2:
let input = " fly me to the moon "
let split = input.trim().split(' ')
console.log("Splited words: " , split)
let lastWd = split.length-1
console.log("Length of the last word:" ,split[lastWd].length )

//Example 3: Anagram Check
function isAnagrams (string1,string2) {
    let status = true
    //Trim and converting into lowercase
    let s1 = string1.trim().toLowerCase()
    let s2 = string2.trim().toLowerCase()
    
    if(s1.length != s2.length)
    {
        status = false
    }
    else
    {
        //convert the string into array for sorting
        let sorted1 = s1.split('').sort().join('')
        let sorted2 = s2.split('').sort().join('')
        status =( sorted1 === sorted2 )
    }
return status
}

console.log("Anagrams Check: " , isAnagrams('Listen','Silent'))
console.log("Anagrams Check: " , isAnagrams('Hello','World'))
