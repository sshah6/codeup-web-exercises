// (async()=>{

// async function githubUsers(userName){
//     try{
//         let apiCall = await fetch(`https://api.github.com/users/${userName}/events`,{headers: {'Authorization': `token ${keys.github}`}})
//         // console.log(apiCall);
//         let data = await apiCall.json();
//         return data;
//         // [0].created_at.slice(0, 10);
//     }catch(error){
//         console.log(error);
//     }
// }
   
// let waiting = await githubUsers('songjuOhh');

// console.log(waiting);

// })();

function githubUsers(userName){
     return fetch(`https://api.github.com/users/${userName}/events`,{headers: {'Authorization': `token ${keys.github}`}})
    .then(response => {
       return response.json()    
    }).then((data) => {    
        return data[0].created_at.slice(0, 10);
    })
    .catch(error => console.error(error));
}

// githubUsers('sshah6').then(console.log); 


const wait = (sec)=>{
    return new Promise((resolve, notResolved)=>{
         setTimeout(() => {
            if(sec > 1000){
                resolve("Resolved");
            }else if(sec <= 1000){
                notResolved("Not resolved");
            }
        }, sec);
    });
};

// wait(3000).then(() => console.log("hggg"));
const makeWait = wait(500);
// console.log(makeWait);
makeWait.then(message => console.log(message));
// console.log(makeWait);
makeWait.catch(message => console.log(message));


