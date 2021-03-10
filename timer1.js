const timerBeep = process.argv.slice(2);
console.log(timerBeep);
if (process.argv.length <= 2) {
  return;
}

for (let i =0; i < timerBeep.length; i++) {
  setTimeout (() => {
    console.log(timerBeep[i]);
    process.stdout.write('\x07');
  }, timerBeep[i] * 1000);
};