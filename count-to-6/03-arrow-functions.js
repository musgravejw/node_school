var inputs = process.argv.slice(2);
var result = inputs.map(s => s[0]).reduce((val, s) => val + s)

console.log(`[${inputs}] becomes "${result}"`)
