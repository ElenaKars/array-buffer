export default class Character {
  constructor(distance) {
    this.distance = distance;
    this.stoned = false;
    this._attack = null;
  }

  get attack() {
    let attack = 100;
    const reduction = (1 - 0.1 * (this.distance - 1));
    attack *= reduction;
    if (this.stoned) {
      const stonedReduction = Math.log2(this.distance) * 5;
      attack -= stonedReduction;
    }
    return Math.round(attack);
  }

  set stoned(value) {
    this._stoned = value;
  }

  get stoned() {
    return this._stoned;
  }
}