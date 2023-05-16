import Character from './Character.js';

export default class Daemon extends Character {
  constructor(distance) {
    super(distance);
  }

  get attack() {
    return super.attack;
  }
}
