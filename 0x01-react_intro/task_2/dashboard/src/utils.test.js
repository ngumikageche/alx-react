import { getFooterCopy, getFullYear, getLatestNotification } from "./utils.js";

describe('Testing getFullYear function', () => {
    it('should return the current year', () => {
      const currentYear = new Date().getFullYear();
      expect(getFullYear()).toBe(currentYear);
    });
  });

  describe('Testing getFooterCopy function', () => {
    it('should return the correct string when the argument is true', () => {
      const isTrue = true;
      const expectedString ='Holberton School';
      expect(getFooterCopy(isTrue)).toBe(expectedString);
    });
  
    it('should return the correct string when the argument is false', () => {
      const isFalse = false;
      const expectedString = 'Holberton School main dashboard';
      expect(getFooterCopy(isFalse)).toBe(expectedString);
    });
  });

  describe('Testing getLatestNotification function', () => {
    it('should return the correct string for getLatestNotification', () => {
      const latestNotification = '<strong>Urgent requirement</strong> complete by EOD';
      expect(getLatestNotification()).toBe(latestNotification);
    });
  });
  