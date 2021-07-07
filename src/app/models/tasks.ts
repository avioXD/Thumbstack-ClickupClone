export interface Tasks {
    _id:string
    status: string,
    task_for:string
    title: string,
    description: string,
    date_range:{
        start: Date, end: Date
    }
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
    tags:any,
    subtasks?:[Task],
    priority:string,
    sprintPoints:number,
    milestone:number,
}
