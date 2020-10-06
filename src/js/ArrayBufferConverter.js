export function getBuffer() {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    return (input => {
      const buffer = new ArrayBuffer(data.length * 2);
      const bufferView = new Uint16Array(buffer);
      for (let i = 0; i < input.length; i++) {
        bufferView[i] = input.charCodeAt(i);
      }
      return bufferView;
    })(data);
  }

  export class ArrayBufferConverter {

    load() {
        return getBuffer();
    }

    toString() {
        const charCode = this.load();
        let string;
        for (let i = 0; i < charCode.length; i++ ) {
            string += String.fromCharCode(charCode[i]);
        }
        return string;
    }

  }