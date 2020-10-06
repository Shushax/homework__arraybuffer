import Character from './Character';

export class Magician extends Character {

    get stoned() {
        return this.attack;
    }
    
    set stoned(distance) {
        this.attack -= (Math.log(distance) - Math.log(2)) * 5;
        if (this.attack < 0) {
            throw new Error('Атака не может быть отрицательной!');
        }
    }  

}

export class Daemon extends Magician {

}