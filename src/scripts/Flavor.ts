export interface Flavor {
  name: string;
  ratio: number;
  volumeNeededML: number | undefined;
  type: string | undefined
}

export class Flavor implements Flavor {
  constructor(name: string, ratio: number, type:string | undefined) {
    this.name = name;
    this.ratio = ratio;
    this.volumeNeededML = undefined;
    this.type = type
  }
}
