export interface Workout{
    type:'Cycling' | 'Swimming' | 'Yoga' | 'Running';
    minutes:number
}
export interface User{
    id?:number;
    name:string;
    workouts:Workout[]
}