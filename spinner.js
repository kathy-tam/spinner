//Spinner 2: refactored version
let spinners = ['|', '/', '-', '\\'];
let delay = 100;
for(let i = 0 ; i <= spinners.length ; i++) {
  if(i === spinners.length) { i = 0 }
  setTimeout(() => process.stdout.write('\r' + spinners[i] + '   '), delay);
  delay += 200;
  if(delay === 1900) { break }
}
setTimeout(() => process.stdout.write('\n'), delay);

/* Spinner 1
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 700);

// ... fill in the rest yourself ...
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1100);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1300);

setTimeout(() => {
  process.stdout.write('\r\\   '); 
}, 1500);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 1700);

setTimeout(() => {
  process.stdout.write('\n');
}, 1900);
*/