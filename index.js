var Benchmark = require('benchmark');

var suite = new Benchmark.Suite;



const message = "dasdas das da sd as d as d asdasdasdasdasda sd as d as d asdasdasd as d asd as d asdas dasdas das da sd as d as d asdasdasdasdasda sd as d as d asdasdasd as d asd as d asdas dasdas das da sd as d as d asdasdasdasdasda sd as d as d asdasdasd as d asd as d asdas dasdas das da sd as d as d asdasdasdasdasda sd as d as d asdasdasd as d asd as d asdas dasdas das da sd as d as d asdasdasdasdasda sd as d as d asdasdasd as d asd as d asdas @leomiranda dasdas @eita"



const regExUsername = /@[^\s\\?[\]’]+/gm;
const allRegEx = new RegExp(`${regExUsername.source}`)
function withRegex() {
    if (message.match(allRegEx)) {
        const splitAllText = message.split(` `);
        const lastWord = splitAllText[splitAllText.length - 1];

        const username = lastWord.match(regExUsername);
        if (username) {
          const lastUsername = username[username.length - 1].replace(`@`, ``);
          return lastUsername
        }
    }
    return ""
}


function withoutRegex() {
    if (message.indexOf("@") != -1) {
        const splitAllText = message.split(` `);
        const lastWord = splitAllText[splitAllText.length - 1];

        if (lastWord.indexOf("@") != -1) {
          const lastUsername = lastWord.slice(1);
          return lastUsername
        }
    }
    return ""
}

console.log("withRegex", withRegex())
console.log("withoutRegex", withoutRegex())


suite
.add('withRegex', function() {
    withRegex()
})
.add('withoutRegex', function() {
    withoutRegex()
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run({ 'async': true });