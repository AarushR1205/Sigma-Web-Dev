// function getData(data,getNextData){
//     setTimeout(()=>{
//         console.log(data);
//         if(getNextData){
//             getNextData();
//         }
//     },3000)
// }

// Callback Hell Example
// console.log("Fetching data 1...");
// getData(1,()=>{
//     console.log("Fetching data 2...");
//     getData(2,()=>{
//         console.log("Fetching data 3...");
//         getData(3,()=>{
//             console.log("All data received");
//         })
//     })
// })

function getData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(data);
            resolve("All Data fetched");
            reject("Error while fetching data");
        }, 3000)
    })
}

// Promise Chaining Example
// console.log("Fetching data 1...");
// getData(1)
//     .then(() => {
//         console.log("Fetching data 2...");
//         return getData(2);
//     }).then(() => {
//         console.log("Fetching data 3...");
//         return getData(3);
//     }).then((res) => {
//         console.log(res);
//     })

// Async Await Example
// async function fetchData() {
//     console.log("Fetching data 1...");
//     await getData(1);
//     console.log("Fetching data 2...");
//     await getData(2);
//     console.log("Fetching data 3...");
//     await getData(3);
//     console.log("All data received");
// }
// fetchData();

// let url = "https://jsonplaceholder.typicode.com/comments";
// async function fetchComments() {
//     let response=await fetch(url);
//     let data=response.json();
//     console.log(data);
// }
// fetchComments()

fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(json => console.log(json))



git clone "URL"
git status 
-> untracked files (git doesn't track those files)
->modified files (changed files)
->unmodified files (unchanged files)
-> staged files (ready to commit)

git add . (to add all files from working directory to git staging area)
git add "filename" (to add specific file to git staging area)

git commit -m "message" (to commit the staged files to local repository with a message)
git push origin main (to push the committed files to remote repository / upload local repo content to remote repo)

git init (to initialize a git repository in current directory)
git remote add origin "url" (to link local repo to remote repo)
git remote -v (to check remote repo linked to local repo)

git Workflow:
1. github repository
2. git clone "url"
3. changes in working directory
4. git add .
5. git commit -m "message"
6. git push origin main

git branches 

git branch "branch name" (to check branch)
git branch -M "branch name" (to rename branch)
git checkout "branch name" (to switch to specific branch)
git checkout -b "branch name" (to create and switch to new branch) 
git checkout -d "branch name" (to delete branch)

git pull origin main (to pull the latest changes from remote repository to local repository)
git merge "branch name" (to merge specific branch to current branch)
git merge (to merge changes from one branch to another)

Undoing Changes:

case 1: staged changes 
git reset "file name" (to unstage specific file)
git reset . (to unstage all files)

case 2: commited changes
for 1 commit=>
git reset HEAD~1 (to undo last commit and move changes to staging area)
for multiple commits=>
    git reset "commit hash" 
    git reset --hard "commit hash" (to undo commits permanently)

FORK 