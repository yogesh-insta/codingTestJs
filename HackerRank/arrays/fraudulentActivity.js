/**
 * Detect fraud given the list of expenditures and number of days
 * https://www.hackerrank.com/challenges/fraudulent-activity-notifications/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting
 **/
const lodash = require('lodash');
const data = require('./data.json');

function activityNotifications(expenditure, d) {
    let noticeCount = 0;
    const trail = expenditure.slice(0, d).sort((a, b) => a - b);
    let time = 0;
    for (let i = d; i < expenditure.length; i++) {
        if (expenditure[i] >= findLimit(trail, d)) {
            noticeCount++;
        }
        //delete the exp[i-d] from trail
        let index = lodash.sortedLastIndex(trail, expenditure[i - d]);
        trail.splice(index-1, 1);

        //insert exp[i] in trail
        index = lodash.sortedLastIndex(trail, expenditure[i]);
        trail.splice(index, 0, expenditure[i]);
    }
    console.info('Total time: ' + time);
    return noticeCount;
}


const findLimit = (arr, d) => {
    let median = 0;
    if (d % 2 === 0) {
        median = (arr[d / 2] + arr[(d / 2) - 1]);
    } else {
        median = arr[Math.floor(d / 2)] * 2;
    }
    return median;
}

//console.info(activityNotifications([1, 2, 3, 4, 4], 4));//0
//console.info(activityNotifications([2, 3, 4, 2, 3, 80, 8, 40, 5, 8, 50], 4));//2
const start = new Date().getTime();
console.info(activityNotifications(data, 10000));
console.info('Duration: ' + (new Date().getTime() - start));