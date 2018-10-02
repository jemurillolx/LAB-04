const  miparser = (miparam) => {
    let arrayDummy = new Array();
    for (let i = 0; i< miparam.length; i++) {
          let char1 = miparam.charAt(i);
          let char2;
          if( char1 == "[" || char1 == "(" ||char1 == "{") {
             arrayDummy.push(char1);
           }  else {
              if (char1 == "]"){
                  char2 = arrayDummy.pop();
                  if(char2 != "["){
                      return false;
                  }
              }else{
                  if (char1 == ")"){
                      char2 = arrayDummy.pop()
                      if(char2 != "(")
                      {
                        return false;
                      }
                  }else{
                    if (char1 == "}"){
                        char2 = arrayDummy.pop()
                        if(char2 != "{")
                        {
                          return true;
                        }
                  }
              }
           }
     } 
 }
 if(arrayDummy.length > 0)
 {
    return false;
 }else{
    return true;
 }
} 


var fs = require('fs');

    let fileName = 'file.txt'

    var array = fs.readFileSync(fileName).toString().split("\n");
    let content = "";
    for (let i in array) {
        content += array[i];
    }

    console.log("input: " + content);
 let resp = miparser(content);
    if (resp) {
        console.log("Sintax error");

    } else {
        console.log("Great sintax!");
    }