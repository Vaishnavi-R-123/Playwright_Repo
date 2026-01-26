

// Home Assignment - for Conditional Statements 

// Decides which browser to launch using if-else statements.

let browserName ="Edge"

if(browserName=="Chrome")
{
    console.log("Launching Chrome Browser")
}
else{
    console.log("Launching Default Browser")
}

// Chooses which set of tests to run using a switch statement

let testType = "Regression"

switch(testType)
{
    case "Smoke":
        console.log("Running Smoke Tests....")
        break

    case "Sanity":
        console.log("Running Sanity Tests....")
        break

    case "Regression":
        console.log("Running Regression Tests...." )
        break

    default:
        console.log("Running Default Smoke Tests....")
}