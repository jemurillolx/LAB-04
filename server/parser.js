const correctString = (miparam) => {
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
                      return "Sintax error";
                  }
              }else{
                  if (char1 == ")"){
                      char2 = arrayDummy.pop()
                      if(char2 != "(")
                      {
                        return "Sintax error";
                      }
                  }else{
                    if (char1 == "}"){
                        char2 = arrayDummy.pop()
                        if(char2 != "{")
                        {
                          return "Sintax great!";
                        }
                  }
              }
           }
     } 
 }
 if(arrayDummy.length > 0)
 {
    return "Sintax error";
 }else{
    return "Sintax great!";
 }
} 
