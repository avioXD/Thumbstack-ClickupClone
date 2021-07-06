export interface Tasks {
    _id:string
    status: string,
    task_for:string
    title: string,
    description: string,
    assigned_date: Date,
    finishing_date: Date,
    time_estimates:string,
    assigned_by:{
        _id: string,
        role: string,
    }
    asigned_to:[
        {
            id:string,
            role:string,
        }
    ],
    tags:[
        {
            tag:string
        }
    ],
    subtasks:[
        Tasks
    ],
    priority:string,
    sprintPoints:number,
    milestone:number,
}
