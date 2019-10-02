
const GC2019Service = {
    addComment(comment){
        let bReturn = false;
        //for( let key in temp){
        //  console.log(`Key = ${key}, Val = ${temp[key]}`);
        //}
        if( typeof comment !== 'undefined'){
            if(comment.hasOwnProperty('itemKey')){
                bReturn = true;
            }
        }

        return bReturn;
    }
}// End GC2019Service

module.exports = GC2019Service