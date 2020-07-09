//Objective is to find the valid IP addresses in a string of integers.

let s = "25525511135"


//O()

if (s.length > 12 || s.length < 4) {
    return []
}

let temp = []
let result = []

backtrack(temp, s)

function backtrack(temp, s) {
    //If we have 4 valid numbers and we've exhausted all numbers in string
    if (temp.length == 4 && s.length == 0) {
        result.push([...temp].join('.'))
        return
    }

    //To get 4 numbers each time
    for (let i = 1; i < 4; i++) {
        if (s.length < i) {
            continue
        }
        
        //Check the string before pushing it in
        let string = s.slice(0, i)
        //If the first character in the string is '0' or if the number is greater than 255
        if ((string.length > 1 && string[0] == '0') || parseInt(string) > 255) {
            continue
        }

        //Recurse w/out the front char of the string each time
        temp.push(string)
        backtrack(temp, s.slice(i))
        temp.pop()
    }
}

return result
