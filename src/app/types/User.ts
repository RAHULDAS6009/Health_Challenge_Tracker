
export interface Workout{
    type: string;
    minutes:number
}
export interface User{
    id?:string;
    name:string;
    workouts:Workout[]
}