import { getBuffer, ArrayBufferConverter } from '../ArrayBufferConverter';

test('string', () => {
    let obj = new ArrayBufferConverter();
    const received = obj.toString();
    const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

    expect(received).toBe(expected);
})