class Array
  #method returns 0 if empty, otherwise returns sum of the entire array.
  def sum

  end

  #method should return a new array of all values squared
  def squared
  end

  def my_reverse
  end

  def my_uniq

  end

  # write your own each method. Test that it works!
  def my_each(&prc)
  end

  def my_map(&prc)
  end

  def my_select(&prc)
  end

  # should use first element in the array as accumulator unless one is given
  def my_reject(&prc)
  end

  def my_all?(&prc)
  end

  def my_any?(&prc)
  end


  #function will be called on a matrix.
# matrix = [
#   [0, 1, 2],
#   [3, 4, 5],
#   [6, 7, 8]
# ]
#
# matrix.my_transpose
#  # => [[0, 3, 6],
#  #    [1, 4, 7],
#  #    [2, 5, 8]]
# ```
  def my_transpose

  end
  # BONUS: Make a my_reduce! 

end

class Hash
  # write a function that returns a new hash that contains keys that
  # are only in one ore the other
  def differnce(other_hash)
  end

  #write a function that returns a new hash that contains the keys/values
  #that both hashes share.
  def shared(other_hash)
  end

end


if __FILE__ == $PROGRAM_NAME
  p [1, 2, 3, 4, 5].sum == 15
  p [].sum == 0
  p [1, 2, 3, 4, 5].squared == [1, 4, 9, 16, 25]
  p [1, 2, 3, 4, 5].my_reverse == [1, 2, 3, 4, 5].reverse
  p [1, 1, 2, 3, 3, 4].my_uniq == [1, 2, 3, 4]
   test = [1, 2, 3, 4, 5]
   test.my_each { |el| el * 2 }
  p test == [1, 2, 3, 4, 5]

  p [1, 2, 3].my_map {|el| el * 2 } == [2, 4, 6]
  p [1, 2, 3, 4].my_select { |el| el % 2 == 0} == [2, 4]
  p [1, 2, 3, 4].my_reject { |el| el % 2 == 0} == [1, 3]
  p [2, 4, 6, 8, 10].my_all { |el| el % 2 == 0} == true
  p [2, 3, 6, 8, 10].my_all { |el| el % 2 == 0} == false
  p [2, 4, 6, 8, 10].my_any { |el| el % 2 != 0} == false
  p [2, 3, 6, 8, 10].my_any { |el| el % 2 != 0} == true
  matrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ]
  p matrix.my_transpose == [[0, 3, 6],[1, 4, 7], [2, 5, 8]]

  hash_one = { a: "alpha", b: "beta" }
  hash_two = { b: "bravo", c: "charlie" }
  p hash_one.difference(hash_two) == { a: "alpha", c: "charlie" }

  hash_one = { a: "alpha", b: "beta" }
  hash_two = { b: "beta", c: "charlie" }
  p hash_one.shared(hash_two) == {b: "beta"}


end
