export function convert_seconds(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remaining = seconds % 60;
    return minutes + ":" + remaining.toString().padStart(2, "0");
  }
  
  export class Timer {
    constructor(seconds, display_dom) {
      // If seconds is not a number, default to 10 minutes
      if (isNaN(seconds)) {
        seconds = 600;
      }

      this.seconds = seconds;
      this.state = "Stopped";
      this.current = this.seconds;
      this.starttime = null;
      this.elapsed = 0;
      this.timer_loop = null;
      this.sync_counter = 0;
      this.display_dom = display_dom;
    }
  
    startTimer() {
      this.starttime = new Date().getTime();
      this.timer_loop = setInterval((timer) => {
        if (timer.sync_counter % 10 == 0) {
          timer.timerSync();
          timer.sync_counter = 0;
        } else {
          timer.countDown();
        }
        timer.sync_counter++;
      }, 1000, this);
    }
  å
    countDown() {
      this.current -= 1;
      if (this.display_dom) {
        this.display_dom.innerText = convert_seconds(this.current);
      }
      this.finished();
    }
  
    timerSync() {
      const elapsed = new Date().getTime() - this.starttime;
      this.elapsed = Math.floor(elapsed / 1000);
      this.current = this.seconds - this.elapsed;
      if (this.display_dom) {
        this.display_dom.innerText = convert_seconds(this.current);
      }
      this.finished();
    }
  
    finished() {
      if (this.current <= 0) {
        clearInterval(this.timer_loop);
        console.log("Timer should stop now.");
      }
    }
  }
  