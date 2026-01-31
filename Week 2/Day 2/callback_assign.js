// Callback function example

const browser="Chrome"

function checkBrowserVersion(callback){
setTimeout(() => displayBrowserVersion(callback),2000)
}

function displayBrowserVersion(callback){
    console.log("Browser version using callback : "+browser)
}

checkBrowserVersion(displayBrowserVersion)



