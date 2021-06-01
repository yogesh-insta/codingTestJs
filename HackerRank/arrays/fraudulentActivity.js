/**
 * Detect fraud given the list of expenditures and number of days
 * https://www.hackerrank.com/challenges/fraudulent-activity-notifications/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting
 **/

const data = require('./data.json');

function activityNotifications(expenditure, d) {
    let noticeCount = 0;
    const trail = expenditure.slice(0, d).sort((a, b) => a - b);
    for (let i = d; i < expenditure.length; i++) {
        if (expenditure[i] >= findLimit(trail)) {
            noticeCount++;
        }
        //delete the exp[i-d] from trail
        let index = search(trail, expenditure[i - d]);
        //console.info('deleting from ' + index);
        trail.splice(index, 1);

        //insert exp[i] in trail
        index = search(trail, expenditure[i]);
        //console.info('inserting at ' + index);
        trail.splice(index, 0, expenditure[i]);
    }
    return noticeCount;
}


const search = (array, element) => {
    if (!array || !Array.isArray(array)) {
        throw new Error('invalid array')
    }
    let low = 0, high = array.length, result;
    while (result === undefined && low < high) {
        let m = Math.floor(low + (high - low) / 2);
        array[m] === element ? result = m : array[m] < element ? low = m + 1 : high = m - 1;
    }
    return result || low;
}

const findLimit = (arr) => {
    let median = 0;
    if (arr.length % 2 === 0) {
        median = Math.ceil(arr[arr.length / 2] + arr[(arr.length / 2) + 1]) / 2;
    } else {
        median = arr[Math.floor(arr.length / 2)];
    }
    const limit = median * 2;
    return limit;
}

//console.info(activityNotifications([1, 2, 3, 4, 4], 4));//0
//console.info(activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5));//2
console.info(activityNotifications(data, 10000));
