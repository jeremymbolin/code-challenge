// Define your Hamming class here.
// `npm test` to ensure the unit tests pass and
// your code meets all of the conditions.
// You may use ES6 or ES5 to solve.

class Hamming {

    compute(first_strand, second_strand) {

        let computeResult = 0;

        if (first_strand.length !== second_strand.length)
            throw('DNA strands must be of equal length.'); // throw if invalid

        for (let i = 0; i < first_strand.length; i++) {

            if (first_strand[i] !== second_strand[i]) // compare equality of strings based on indexed position
                computeResult += 1; // increment result if the string values are different

        }

        return computeResult;
    }
}

module.exports = Hamming;