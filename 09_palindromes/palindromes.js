const palindromes = function (str) {
    const newStr = str.replace(/[^\w]/g,'').trim().toLowerCase()
    const str2 = newStr.split('').reverse().join('')
    return newStr === str2
};

// уже почти пять утра
module.exports = palindromes;
