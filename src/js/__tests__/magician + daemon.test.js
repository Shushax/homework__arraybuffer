import { Daemon, Magician } from '../magician + daemon';

test('class Daemon stoned', () => {

    let daedra = new Daemon;
    daedra.distance = 2;
    daedra.attack = 70;
    daedra.stoned = 5;
    const expected = 5;

    expect(daedra.stoned).toBe(expected);
});

test('class Daemon attack', () => {
    let daedra = new Daemon;
    daedra.distance = 2;
    const received = daedra.attack;

    const expected = 90;

    expect(received).toBe(expected);
})