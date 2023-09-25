
// class in typeScript
export class Player {
    private name: string;
    private age: number;
    readonly country: string;

    constructor(n: string, age: number, country: string){
        this.name = n;
        this.age = age;
        this.country = country;
    }

    play(){
        return `${this.name} is plying from ${this.country}`
    }
}