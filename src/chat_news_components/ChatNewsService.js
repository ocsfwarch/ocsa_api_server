const fs = require('fs');
const fileUrl = './chat_news_comments.txt';

const ChatNewsService = {
  setError(strValue){
    this.strErr = strValue;
  },
  getError(){
    return this.strErr;
  },
  getComments(){
    return new Promise(function(resolve, reject){
      let strReturn = "{\"comments\":[]}";
      fs.readFile(fileUrl, {encoding:'utf8',flag:'r'}, (err, data) => {
        if(err){
          reject(strReturn);
        }else{
          data = ChatNewsService.checkForComma(data);
          strReturn = `{\"comments\":[${data}]}`;
          resolve(JSON.stringify(strReturn));
        }
      });  
    });
  },
  addComment(comment){
      let bReturn = false;
      //for( let key in temp){
      //  console.log(`Key = ${key}, Val = ${temp[key]}`);
      //}
      if( typeof comment !== 'undefined'){
          if(comment.hasOwnProperty('itemKey')){
            if(comment.hasOwnProperty('strDate')){
              if(comment.hasOwnProperty('strComment')){
                const strComment = JSON.stringify(comment) + ",";
                fs.writeFile(fileUrl, strComment, {encoding:'utf8',flag:'a'}, (err) => {
                  if(err){
                    this.setError("Failed to save comment");
                  }else{
                    bReturn = true;
                  }
                }); 
              }
            }
          }
      }

      return bReturn;
  },// End addComment
  checkForComma(strValue){
    var nLen = 0;
    var strChar = "";
    
      // Remove the last comma    
          nLen = strValue.length;
          if(nLen > 0)
          {
            strChar = strValue.substring((nLen - 1), nLen);
            if(strChar == ","){
                strValue = strValue.substring(0, (nLen - 1));
              }
          }
      
      return(strValue);
  },
}// End ChatNewsService

module.exports = ChatNewsService;