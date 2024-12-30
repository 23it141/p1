
const task = [
    {title:"uploading",status:"Completed",priority:5},
    {title:"downloading",status:"Pending",priority:4},
    {title:"Debugging",status:"Pending",priority:2}
]

const addTask = (task,new_task) =>{
    task.push(new_task)
}

addTask(task,{title:"Copying",status:"Pending",priority:1})
console.log(task)


const listByStatus = (task,status) => {
    return task.filter(task => task.status === status)
}

console.log(listByStatus(task,"Pending"))

const highestPrioriy = (task) => {
    return task.reduce((highest,task) => task.priority > highest.priority ? task : highest)
}

console.log(highestPrioriy(task))

const getMovies = (task) =>{
    return task.map((task)=> `TASK : ${task.title} , STATUS : ${task.status}`)
}

console.log(getMovies(task))

task.forEach(task => {
    console.log(`Title: ${task.title}, Status: ${task.status}, Priority: ${task.priority}`)
})
