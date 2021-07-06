export interface Tasks {
    name:string,
    title:string,
    despo:string,
    tags:[
        {chips:string}
    ],
    start_date:Date,
    end_date: Date,
}
