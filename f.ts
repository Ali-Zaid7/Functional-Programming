//Pure function
// function add(a:number, b:number):number {return a+b;};
// console.log(add(2,3));

// function double(x:number):number{return x*2;};
// function addOne (x:number) {return x+1;};
// function doubleThenAddone(x:number):number {return addOne(double(x))};
// console.log(doubleThenAddone(4));//9



// function formateName(name:string) {
//     return {
//     lowercase:name.toLowerCase(),
//     uppercae:name.toUpperCase(),
//     titleCase: name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
// }}
// console.log(formateName('ali zaid')); //{ lowercase: 'ali zaid', uppercae: 'ALI ZAID', titleCase: 'Ali zaid' }




//  function logger(callback: (message:string) => void):void {callback('Hello World!');};
//  function printMessage(message:string):void {console.log(printMessage);}
//  logger(printMessage);
 


// const numbers = [1,2,3,44,5,6,7];
// const doubled =numbers.map(x => x*2);
// console.log(doubled);


// const newstyle = ['ali','zaid','maryam'];
// const fg = newstyle.map((x) => x.toUpperCase())
// console.log(fg);//[ 'ALI', 'ZAID', 'MARYAM' ]



// const nofe = ['ali','zaid','maryam'];
// const vofe = nofe.map((x) => x.toLowerCase())
// console.log(vofe);//


// const lofr = ['ali','zaid','maryam'];
// const gofr = lofr.map((x) => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase())
// console.log(gofr);//[ 'Ali', 'Zaid', 'Maryam' ]


// const users = [{name:'Ali', age:17},{name:'Maryam', age:14}];
// const fname = users.map ((x) => x.name);
// const fage = users.map ((x) => x.age);
// console.log(fname);//[ 'Ali', 'Maryam' ]
// console.log(fage);//[ 17, 14 ]
// //141


// arr.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)


// const nufers = [1,3,4,5,6,7,8,9];
// const b = nufers.reduce((a,b )=> a+b);
// console.log(b);


// const even = [1,2,3,4,5,6,7,8];
// const c =even.filter(x => x%2 ===0);//[ 2, 4, 6, 8 ]
// const d =even.filter(x => x%3 ===0);//[ 2, 4, 6, 8 ]
// console.log(c);



// const ami  = ['ali', 'zaid', 'Abdul Rahman','Zubair','Maryam','Bilal','abdullah'];
// const isVowel = ami.filter( word => {
//     const firstletter = word[0].toLowerCase();
//     return ['a','e','i','o','u'].includes(firstletter);})
//     console.log(isVowel);

// const f =  ['ali', 'zaid', 'Abdul Rahman','Zubair','Maryam','Bilal','abdullah'];
// const isConsonants = f.filter(a => {
//     const firstletter = a[0].toLowerCase();
//     return !['a','e','i','o','u'].includes(firstletter);
// })
// console.log(isConsonants);
