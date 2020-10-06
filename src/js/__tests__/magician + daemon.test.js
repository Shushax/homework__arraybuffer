import { Daemon, Magician } from '../magician + daemon';

test('create Magician', () => {
    const received = new Magician();
    const expected = {
        attack: 25,
        defence: 35
    }

    expect(received).toEqual(expected);
});

test('magician with stoned', () => {
    let person = new Magician;
    const received = person.stoned;
    const expected = 25;

    expect(received).toBe(expected);
})