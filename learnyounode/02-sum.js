var sum = 0;
var i = 0;
for ( ; i < process.argv.length; i++)
  if (i >= 2) sum += Number(process.argv[i]);

console.log(sum);
