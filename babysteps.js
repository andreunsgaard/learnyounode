var sumatotal=0;
for (var i = 2; i < process.argv.length; i++) {
	sumatotal += Number(process.argv[i]);
}
console.log(sumatotal);
