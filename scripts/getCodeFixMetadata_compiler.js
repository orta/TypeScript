// @ts-check

// Create a TypeScript program which has a custom 'add code fix'
// function at runtime, you can see this file inside getCodeFixMetadata_runtime.ts

// This lets the runtime script access all the runtime information about codefixes.

const { readdirSync, readFileSync } = require("fs");
const os = require("os");
const { join } = require("path");
const { execSync } = require("child_process");

const ts = require("../built/local/typescript");

// Setup files which have to exist in the JS runtime
const files = [
    "./src/compiler/types.ts",
    "./src/compiler/core.ts",
    "./src/compiler/diagnosticInformationMap.generated.ts",
    "./scripts/getCodeFixMetadata_runtime.ts"
];

// Add all codefixes
const codefixes = readdirSync("./src/services/codefixes");
codefixes.forEach(c => {
    if (c.endsWith(".ts")) files.push(`./src/services/codefixes/${c}`);
});

// Add all refactors
const refactors = readdirSync("./src/services/refactors");
refactors.forEach(r => {
    if (r.endsWith(".ts")) files.push(`./src/services/refactors/${r}`);
});

// Compile all these files into a single file which handles namespaces
const tmpFile = join(os.tmpdir(), "getCodeFixMetadata_compiled.js");
const program = ts.createProgram(files, { outFile: tmpFile });
program.emit();

// Run that single file
const results = execSync("node " + tmpFile, { encoding: "utf8" });
console.log("stdout:", results);

