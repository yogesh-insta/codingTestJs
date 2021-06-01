/**
 * It is New Year's Day and people are in line for the Wonderland rollercoaster ride.
 * Each person wears a sticker indicating their initial position in the queue from 1 to n.
 * Any person can bribe the person directly in front of them to swap positions,
 * but they still wear their original sticker. One person can bribe at most two others.
 * Determine the minimum number of bribes that took place to get to a given queue order.
 * Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.
 */


const minimumBribes = (q) => {
    let swaps = 0;
    for (let i = 0; i < q.length; i++) {
        if (q[i] - (i + 1) > 2) {
            swaps = 'Too chaotic';
            break;
        } else {
            // check if q[j] has jumped ahead of q[i]
            let maxAdvance = q[i] - 2 > 0 ? q[i] - 2 : 0;
            for (let j = maxAdvance; j < i; j++) {
                q[j] > q[i] ? swaps++ : null;
            }
        }
    }
    console.info(swaps);
}

//minimumBribes([2,5,1,3,4]);
minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]);//3