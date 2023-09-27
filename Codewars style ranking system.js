class User {
  constructor() {
      this.rank = -8;
      this.progress = 0;
  }

  incProgress(activityRank) {
      const ranks = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8];

      if (!ranks.includes(activityRank)) throw console.error("invalid activity rank");

      if (activityRank === this.rank) {
          this.progress += 3;
      } 
      
      else if (ranks[ranks.indexOf(activityRank) + 1] === ranks[ranks.indexOf(this.rank)]) {
          this.progress += 1;
      } 
      
      else if (activityRank > this.rank) {
          if (activityRank > 0 && this.rank < 0) {
              let diff = Math.abs(activityRank - this.rank) - 1;
              this.progress += 10 * diff * diff
          } 
          
          else {
              let diff = Math.abs(activityRank - this.rank);
              this.progress += 10 * diff * diff;
          }
      }

      let rankUp = (this.progress - this.progress % 100) / 100;

      if (ranks.indexOf(this.rank) + rankUp > 15) {
          this.rank = 8;
      }

      else {
          this.rank = ranks[ranks.indexOf(this.rank) + rankUp];
      }
    
      if (this.rank === 8) {
          this.progress = 0;
      } else {
          this.progress = this.progress % 100;
      }
  }
}