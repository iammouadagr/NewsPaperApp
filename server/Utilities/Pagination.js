function pagination(page,limit,model){

        let startIndex = null;
        if(page==1){
            startIndex = 1;
        }else{
            startIndex = (page - 1) * limit;
        }
        
        const endIndex = page * limit;

       
        const results ={}

        if(endIndex< model.length){
            results.next = {
                page : page + 1,
                limit : limit
            }
        }

        if(startIndex > 0){
            results.previous = {
                page : page - 1,
                limit : limit
            }
        }

        results.data = model.slice(startIndex,endIndex);
       

        

        return results;
    }



module.exports.pagination = pagination;