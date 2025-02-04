const fibonacci = function(num) {
    if (num < 0)
        return 'OOPS'
    else if (num == 0) 
        return 0
    else if (num == 2 || num == 1)
        return 1
    else if (+num > 2) {
        let fib = 0
        let pr = 1
        let next = 1
        for (let i = 2; i < num; i++) {
            fib = pr + next
            pr = next
            next = fib
        }
        return fib
    }
};

// еще две задачи
module.exports = fibonacci;
