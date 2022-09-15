
interface Flavor {
    name: string,
    percent: number,
    ml?: number
}
interface Juice {
    ml : number,
    flavors : Array<Flavor>,
    nicotineml ? : number,
    nicotineMGperML : number,
    nicStrength: number
}
class Juice implements Juice {
    constructor(ml:number, flavors:Array<Flavor>, nicotineMGperML: number, nicStrength:number) {
        this.ml = ml
        this.flavors = flavors
        for (let F of flavors) {
            F.ml = this.ml*(F.percent * .01)
        }
        this.nicotineml = (this.ml*nicotineMGperML)/nicStrength
    }
}

const J = new Juice(500, [
        {
            name:'Strawberry (Ripe)', 
            percent: 8
        }, 
        {
            name:'Blueberry Extra', 
            percent: 4
        }, 
        {
            name:'Banana Cream', 
            percent: 3
        }
    ], 2, 100)

const J2 = new Juice(120, [
        {
            name:'Ripe Bananana', 
            percent: 9
        }, 
        {
            name:'Kiwi Double', 
            percent: 3
        }, 
        {
            name:'Grape', 
            percent: 3
        }
    ], 2, 100)
console.log(J2)