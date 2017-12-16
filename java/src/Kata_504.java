// https://www.codewars.com/kata/578553c3a1b8d5c40300037c

import java.util.List;

public class Kata_504 {
  public static int ConvertBinaryArrayToInt(List<Integer> binary) {
    int result = 0;
    for (int i = 0; i < binary.size(); i++) {
      result += binary.get(i) * (int) Math.pow(2, binary.size() - 1 - i);
    }
    return result;
  }
}

