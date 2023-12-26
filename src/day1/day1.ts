import { readFileSync } from 'fs'

export function readInput(): string {
    return readFileSync('input/day1.txt').toString().trim()
}

function isCharDigit(n){
    return !!n.trim() && !isNaN(+n);
  }

export function solve(input: string) {
    const lines = input.split('\n')

    let inputNumbers: number[] = []

    for (var line of lines) {
        const allNumbers = line.split('').filter( char => isCharDigit(char))
        inputNumbers.push(Number(allNumbers[0].concat(allNumbers[allNumbers.length-1])))
    }
    return inputNumbers.reduce((a,b) => a+b, 0)

}
console.log(solve(readInput()))

