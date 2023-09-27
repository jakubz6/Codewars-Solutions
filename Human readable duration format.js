function formatDuration (seconds) {
  if (seconds === 0) return 'now';

  const time = {};
  let ans = '';
  let count = 0;

  time.year = (seconds - (seconds % (86400 * 365))) / (86400 * 365);
  seconds -= time.year * 31536000;
  time.day = (seconds - (seconds % (86400))) / (86400);
  seconds -= time.day * 86400;
  time.hour = (seconds - (seconds % (3600))) / (3600);
  seconds -= time.hour * 3600;
  time.minute = (seconds - (seconds % (60))) / (60);
  seconds -= time.minute * 60;
  time.second = seconds;

  for (let unit in time) {
    if (time[unit] === 0) {
      delete time[unit];
    } else {
      count++;
    }
  }

  let count1 = count;

  for (let unit in time) {
    if (count === 1) {
      if (time[unit] > 1) {
        ans += `${time[unit]} ${unit}s`;
      } else {
        ans += `${time[unit]} ${unit}`;
      }
      return ans;
    } else {
      switch (count1) {
        case 1:
            if (time[unit] > 1) {
                ans += `and ${time[unit]} ${unit}s`;
            } else {
                ans += `and ${time[unit]} ${unit}`;
            }
          break;
          
          case 2:
              if (time[unit] > 1) {
                ans += `${time[unit]} ${unit}s `;
            } else {
                ans += `${time[unit]} ${unit} `;
            }
          break;
        
        default:
            if (time[unit] > 1) {
                ans += `${time[unit]} ${unit}s, `;
            } else {
                ans += `${time[unit]} ${unit}, `;
            }
    }
    count1--;
    if (count1 == 0) {
        return ans;
    }
    }
  }
  return time;
}