/// <reference path='fourslash.ts' />

import assert = require("assert");

//@Filename: 30898.tsx
////
//// const a = (
////   <div
//// >x
////       
////   </div>
//// )
//// 

const edits = format.document();

// const a = (|    <div|>x|       |   </div>| )
verify.currentFileContentIs(`
const a = (
    <div
    >x
        
  </div>
)
`)


assert.strictEqual(edits, 
[
  {
    "newText": "    ", // before the <div
    "span": {
      "start": 13,
      "length": 2
    }
  },
  {
    "newText": "    ", // after the >x
    "span": {
      "start": 20,
      "length": 0
    }
  },
  {
    "newText": "             ", // takes 5 spaces, and replaces with 13
    "span": {
      "start": 23,
      "length": 5
    } 
  },
  {
    "newText": "", // replaces 6 spaces with none
    "span": {
      "start": 23,
      "length": 6
    }
  }
]
);
