/**
 * Comparators are used to compare two objects. In this challenge, you'll create a comparator and use it to sort an array. The Player class is provided in the editor below. It has two fields:
 * https://www.hackerrank.com/challenges/ctci-comparator-sorting/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting
 *
 */


interface Comparator<T> {
    compare(o1: T, o2: T): number;
}


class Checker implements Comparator<Player> {
    public compare(o1: Player, o2: Player): number {
        let result = 0;
        if (o1.score == o2.score) {
            if (o1.name == o2.name) {
                result = 0;
            } else {
                result = o1.name < o2.name ? -1 : 1;
            }
        } else {
            result = o1.score > o2.score ? -1 : 1;
        }
        return result;
    }
}

class Player {
    public name: string;
    public score: number;
    constructor(name: string, score: number) {
        this.name = name;
        this.score = score;
    }
}

const sort = (a: string[]) => {
    const players = [];
    for (let i = 1; i < a.length; i++) {
        const al = a[i].split(" ");
        players.push(new Player(al[0], Number(al[1])));
    }
    const result = sortArray(players, 0, players.length - 1);
    return result.map(v => {
        return `${v.name} ${v.score}`;
    });
};


const sortArray = (array: Player[], low: number, high: number) => {
    if (!array || !Array.isArray(array)) {
        throw new Error("invalid array");
    }

    if (low < high) {
        const pivotIndex: number = partition(array, low, high);
        sortArray(array, low, pivotIndex - 1);
        sortArray(array, pivotIndex + 1, high);
    }

    return array;
};

const partition = (array: Player[], low: number, high: number) => {
    // make last value as pivot
    const pivotValue = array[high];
    let i = low;
    // low to high - 1
    for (let j = low; j < high; j++) {
        if (new Checker().compare(array[j], pivotValue) == -1) {
            swap(array, i, j);
            i++;
        }
    }
    swap(array, i, high);
    return i;
};

const swap = (array: Player[], i: number, j: number) => {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
};

const result = sort(["5", "amy 100", "david 100",
    "heraldo 50",
    "aakansha 75",
    "aleksa 150"]);

for (let i = 0; i < result.length; i++) {
    console.info(result[i]);
}