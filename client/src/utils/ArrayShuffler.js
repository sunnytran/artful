
export default class ArrayShuffler {
    static shuffle(array) {
			let i = array.length;
			while (i--) {
				const ri = Math.floor(Math.random() * (i + 1));
				[array[i], array[ri]] = [array[ri], array[i]];
			}
			return array;
    }
}

