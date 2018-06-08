#function switchcase : should return string with a capital letter every other.
# Like: "hElLo"

#function my_join : should join an array. If no separator is given should default
#to empty string.

#function my_rotate: rotates an array. Should default to 1 if no number of times
# is specified. my_rotate([1, 2, 3], 2) == [3, 1, 2].
#my_rotate([1, 2, 3], -2) == [2, 3, 1]

#function is_prime? : returns whether number is prime.

#function factors: returns factors.

#function prime_factors : returns factors that are prime.

# five_letter_flip : returns a string with all words that are five letters are more reversed.
# five_letter_flip("this sentence has backwards words") == "this ecnetnes has sdrawkcab sword"


# odd_one_out : return the integer in the array that is even or odd while the rest
# are the opposite. odd_one_out([1, 2, 3, 5, 7, 9]) == 2

# my_flatten : should return one array with all elements
# my_flatten([1, [2, 3, 4], 5, [6, 7, [8]]]) == [1, 2, 3, 4, 5, 6, 7, 8]


if __FILE__ == $PROGRAM_NAME
  p "switchcase: "
  p switchcase("HAPPY") == "hApPy"
  p
  p "my_join: "
  p my_join([1, "2", 3, "4"]) == "1234"
  p my_join([1, "2", 3, "4"], "+") == "1+2+3+4"
  p
  p "my_rotate: "
  p my_rotate([1, 2, 3], 2) == [3, 1, 2]
  p my_rotate([1, 2, 3], -2) == [2, 3, 1]
  p
  p "is_prime?: "
  p is_prime?(1) == false
  p is_prime?(2) == true
  p is_prime?(27) == false
  p is_prime?(43) == true
  p
  p "factors: "
  p factors(10) == [1, 2, 5, 10]
  p prime_factors(10) == [2, 5]
  p
  p "five_letter_flip: "
  p five_letter_flip("this sentence has backwards words") == "this ecnetnes has sdrawkcab sword"
  p
  p "odd_one_out:"
  p odd_one_out([1, 2, 3, 5, 7, 9]) == 2
  p odd_one_out([2, 5, 4, 6, 10]) == 5
  p
  p "flatten: "
  p flatten([1, [2, 3, 4], 5, [6, 7, [8]]]) == [1, 2, 3, 4, 5, 6, 7, 8]

end
