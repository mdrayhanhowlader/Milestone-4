// 2. Check whether the given file name is a javascript file or not 

// function isJavascriptFile(){
//     const fileName = "app.js" 

// } 

// isJavascriptFile()
//   return ext == null ? "" : ext[1];





// function isJavascriptFile(string)
// {
//   var ext = /^.+\.([^.]+)$/.exec(string);
//     const extension =  ext == null ? "" : ext[1];
//     if(extension === "js"){
//         return true;
//     }else {
//         return false;
//     }

// }

// console.log(isJavascriptFile("1.js"))


// function isJavaScriptFile(string) {
//     let lastThreeString = string.substring(string.length - 3);
//     console.log(lastThreeString)
//     if (lastThreeString === '.js') {
//         return true;
//     }
//     else {
//         return false;
//     }

// }

// console.log(isJavaScriptFile('.js'))


function isJavascriptFile(string)
{
  var ext = /^.+\.([^.]+)$/.exec(string);
    const extension =  ext == null ? "" : ext[1];
    if(extension === "pdf"){
        return true;
    }else {
        return false;
    }

}

console.log(isJavascriptFile("hello.pdf"))