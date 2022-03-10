let num = document.querySelector('input#fnum')
let list = document.querySelector ('select#flist')
let res = document.querySelector ('div#res')
let values = []

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }    
}

function inList(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
            return false
    }
}
function add() {
    if(isNumber(num.value) && !inList(num.value, values)) {
        values.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Value ${num.value} Add`
        list.appendChild(item)
    } else {
        window.alert('Invalid value or already found in the list.')
    }
    num.value  = ''
    num.focus()
}
function finalize() {
    if (values.length == 0) {
        window.alert('Add values before finalizing!')
    } else {
        let tot = values.length
        let larger = values[0]
        let less = values[0]
        let sum = 0
        let average = 0 
        for(let pos in values) {
            sum += values[pos]
            if (values [pos] > larger) 
                larger = values[pos]
            if (values [pos] < less) 
                less = values[pos]
            
        }
        average = sum / tot
        res.innerHTML = ''
        res.innerHTML += `<p> In total, we have ${tot} registered numbers</p>`
        res.innerHTML += `<p>The highest reported value was ${larger}</p>`
        res.innerHTML += `<p>The lowest reported value was ${less}</p>`
        res.innerHTML += `<p>Adding all the values, we have ${sum}</p>`
        res.innerHTML += `<p>The average of the entered values is ${average}</p>`
        
    }
}
