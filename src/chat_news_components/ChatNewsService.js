const fs = require('fs');
const fileUrl = './chat_news_comments.txt';

const ChatNewsService = {
  setError(strValue){
    this.strErr = strValue;
  },
  getError(){
    return this.strErr;
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
                fs.writeFile(fileUrl, JSON.stringify(comment), {encoding:'utf8',flag:'a'}, (err) => {
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
  }
}// End ChatNewsService

module.exports = ChatNewsService;