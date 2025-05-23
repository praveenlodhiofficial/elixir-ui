declare module '@studio-freight/lenis' {
  export default class Lenis {
    constructor(options?: {
      duration?: number;
      easing?: (t: number) => number;
      smooth?: boolean;
      wheelMultiplier?: number;
    });

    scroll: number;
    raf(time: number): void;
    scrollTo(target: number | string, options?: {
      duration?: number;
      easing?: (t: number) => number;
      onComplete?: () => void;
    }): void;
    on(event: string, callback: () => void): void;
    off(event: string, callback: () => void): void;
    destroy(): void;
  }
}