# Define your compute function here.
# run python -m unittest test.hamming_test to ensure the
# unit tests pass and your code meets all of the conditions.
#

def compute(strand_one, strand_two):
    """
    Calculates the 'Hamming Distance' between two string values representing DNA strands.
    :param strand_one: string value representing the first strand passed to the function
    :param strand_two: string value representing the second strand passed to the function
    :return: an integer representing the 'Hamming Distance'
    """
    if len(strand_one) != len(strand_two):
        raise ValueError
    else:
        return sum(strand_one[i] != strand_two[i] for i in range(len(strand_one)))
