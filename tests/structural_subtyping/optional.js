/* @flow */

interface HasOptional {
  a: string,
  b?: number,
};

var test1: HasOptional = { a: "hello" }

var test2: HasOptional = {}; // Error: missing property a

var test3: HasOptional = { a: "hello", b: true }; // Error: boolean ~> number

// hmm but this seems annoying
var test4: HasOptional = { a: "hello", b: 4 }; // Error: number ~> void

var test5: HasOptional = ({ a: "hello" }: {| a: string, b?: number |});

var test6: HasOptional = ({ a: "hello", b: 4 }: {| a: string, b: number |}); // Error



// With plain object types, an object literal is accepted like this:
var test_: { b?: number } = { b: 4 };
// ... but not if cast to say it really does have that property:
var test__: { b?: number } = ({ b: 4 }: { b: number });
