import { describe, it, expect, vi } from 'vitest';
import { convert_seconds, Timer } from './timer.js';

describe('convert_seconds', () => {
  it('should convert seconds to MM:SS format', () => {
    expect(convert_seconds(0)).toBe('0:00');
    expect(convert_seconds(5)).toBe('0:05');
    expect(convert_seconds(65)).toBe('1:05');
    expect(convert_seconds(600)).toBe('10:00');
  });
});

describe('Timer class', () => {
  it('should initialize with given seconds and not start automatically', () => {
    const mockElement = { innerText: '' };
    const timer = new Timer(60, mockElement);

    expect(timer.seconds).toBe(60);
    expect(timer.current).toBe(60);
    expect(timer.state).toBe("Stopped");
  });

  it('should count down correctly once when countDown() is called', () => {
    const mockElement = { innerText: '' };
    const timer = new Timer(10, mockElement);

    timer.countDown();
    expect(timer.current).toBe(9);
    expect(mockElement.innerText).toBe('0:09');
  });
});

