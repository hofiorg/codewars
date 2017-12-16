// https://www.codewars.com/kata/578553c3a1b8d5c40300037c

import java.util.List;

public class Kata_010_best {
  public static int ConvertBinaryArrayToInt(List<Integer> binary) {
    return binary.stream().reduce((x, y) -> x * 2 + y).get();
  }
}
