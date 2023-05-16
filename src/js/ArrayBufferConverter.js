export default class ArrayBufferConverter {
    constructor() {
      this.buffer = null;
    }
  
    load(buffer) {
      this.buffer = buffer;
    }
  
    toString() {
      if (!this.buffer) {
        throw new Error('No data loaded');
      }
  
      const bufferView = new Uint16Array(this.buffer);
      let result = '';
  
      for (let i = 0; i < bufferView.length; i++) {
        result += String.fromCharCode(bufferView[i]);
      }
  
      return result;
    }
  }
  export function getBuffer() {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < data.length; i++) {
      bufferView[i] = data.charCodeAt(i);
    }
    return buffer;
  }