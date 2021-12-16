//regular expression
console.log(/Tutorials.Point/.test('Tutorials_Point')); //true
console.log(/Tutorials.Point/.test('Tutorials\nPoint')); //false
console.log(/Tutorials.Point/.test('Tutorials\rPoint')); //false

//ES9 introduces a new flag - DotAllFlag (\s) that can be used with Regex to match line terminators and emojis.