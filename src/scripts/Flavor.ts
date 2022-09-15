export interface Flavor {
  name: string;
  desiredPercent: number;
  volumeNeededML: number | undefined;
  type: string | undefined
}

export class Flavor implements Flavor {
  constructor(name: string, desiredPercent: number, type:string | undefined) {
    this.name = name;
    this.desiredPercent = desiredPercent;
    this.volumeNeededML = undefined;
    this.type = type
  }
}
