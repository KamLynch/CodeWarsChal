function divisibleBy(numbers, divisor){
    let noRemainder = numbers.filter((number) => number % divisor == 0);
    return noRemainder
}