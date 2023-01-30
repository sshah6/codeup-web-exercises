const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//(1)
const userMoreThan3Langs = users.filter((user)=>{
return user.languages.length >= 3;
});
// console.log(userMoreThan3Langs);

//(2)
const usersEmail = users.map((user) =>{
    return user.email;
});
// console.log(usersEmail);

//(3)
const averageExp = users.reduce((prev, curr)=>{
    return prev + curr.yearsOfExperience / users.length; 
},0);
// console.log(averageExp);

//(4)

// const longestEmail = usersEmail.reduce((prev, curr)=>{   
//     return prev.length>= curr.length ? prev : curr;   
// });   

const longestEmail = users.reduce((longEmail, user) =>{
    if(user.email.length > longEmail.length){
        longEmail = user.email;
    }
    return longEmail;
}, '');
console.log(longestEmail);

//(5)
const userNames = users.reduce((str, user)=>{
    str += user.name + ', ';
    return str;
},'Your instructors are: ').slice(0, -2) + '.';
// console.log(userNames);

//(6 BONUS)

// const uniqueLangs = users.reduce((prev, curr, i)=>{
//     return curr.languages;
// });
// console.log(uniqueLangs);
