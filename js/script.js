

/*

    $.ajax({
        success:function(){

            $.ajax({
                success:function(){

                    $.ajax(){

                    }
                
                }

            })
        
        }
        
    })


*/


/*

    promise1.then().then().catch()

*/



var userLoggedIn=true;

function checkUserLoggedIn(){

    var promise=new Promise((resolve, reject)=>{

        // Wait for 1 sec
        setTimeout(()=>{
    
            // Promise is resolved
            if(userLoggedIn){
                resolve("User Logged In");
            }else{
                // Reject
                reject();
            }
    
        }, 1000);
    
    });

    return promise;

}

setTimeout(()=>{
    userLoggedIn=true;
}, 500);


checkUserLoggedIn().then((successMsg)=>{
    console.log(successMsg);
}).catch(()=>{
    console.log("User Not Logged In");
})


// checkUserLoggedIn().then(fetchUserFeed).then(fetchUserFriends).then(fetchUserMessages);


