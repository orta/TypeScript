/*
  This is a two-step script, it is ran by:

  node scripts/getCodeFixMetadata_compiler.js

  Which creates a custom build of the compiler where the function
  registerCodeFix is used to register a codefix. By overriding that
  function the script can create a list of all codefixes.

*/

const allCodeFixes = []
const allRefactors = []

function registerCodeFix(metadata) {
    allCodeFixes.push({ ids: metadata.fixIds || [], codes: metadata.errorCodes })
}

function registerRefactor(name, refactor) {
    allRefactors.push({ name })
}

process.on('exit', () => {
    console.log("Refactors:")
    console.log(allRefactors)
    console.log("Code fixes:")
    console.log(allCodeFixes)
})

