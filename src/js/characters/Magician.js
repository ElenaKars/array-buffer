import Character from './Character.js';

export default class Magician extends Character {
  constructor(distance) {
    super(distance);
  }

  get attack() {
    return super.attack;
  }
}

