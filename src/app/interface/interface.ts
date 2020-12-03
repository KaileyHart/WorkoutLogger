

export interface Details {
    id: string,
    items: Workout[];
    type: string;
    date: string;

}

export interface Workout {
    type: string;
    id:string;
    distance: number;
    length: number;
    calories: number;
    speed: number;
    hr: number;
    reps: number;
    sets: number;
    weight: number;
    date: string;
}