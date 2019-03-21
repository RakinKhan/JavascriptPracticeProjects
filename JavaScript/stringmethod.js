let isPasswordValid = function (password) {
    if (password.length > 8 && !password.includes('password')) {
        return true
    } else {
        return false
    }
}

console.log(isPasswordValid('asdfp'))
console.log(isPasswordValid('abc123!@#$%^&'))
console.log(isPasswordValid('asdfpasdfpoipassword'))