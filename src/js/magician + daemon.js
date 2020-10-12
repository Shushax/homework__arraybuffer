import Character from './Character';

export class Magician extends Character {

    get stoned() {
        return this._stoned;
    }
    
    set stoned(value) {
        this._stoned = value;
    }  

    get attack() {
        const attack = this._attack - (Math.log2(this.distance) * 5);
        return (attack > 0) ? attack : 0;
    } 
    
    set attack(value) {
        this._attack = value;
    }

}

export class Daemon extends Magician {

}