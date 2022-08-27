function greeting () {
    console.log ('hello');
}
function receivesAFunction (greeting) {
    greeting();
}
function returnsANamedFunction () { 
    return function goodbye () {};
}
function returnsAnAnonymousFunction () {
    return function () {};
}