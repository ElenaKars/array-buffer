import Magician from '../characters/Magician';
import Daemon from '../characters/Daemon';

describe('Magician and Daemon', () => {
    test('should calculate attack without stoned effect', () => {
      const magician = new Magician(2);
      expect(magician.attack).toBe(90);
  
      const daemon = new Daemon(4);
      expect(daemon.attack).toBe(70);
    });
  
    test('should calculate attack with stoned effect', () => {
      const magician = new Magician(2);
      magician.stoned = true;
      expect(magician.attack).toBe(85);
  
      const daemon = new Daemon(5);
      daemon.stoned = true;
      expect(daemon.attack).toBe(48);
    });
  });