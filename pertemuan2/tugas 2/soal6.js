let fullName = (fn, mn, ln) => {
    return`${fn} ${mn} ${ln}, ${getTitle()}`;
}

let getTitle = ( ) => {
    return "B.Sc"
}

console.log(fullName('John', 'Dream', 'Myung'));