// https://www.codewars.com/kata/54da5a58ea159efa38000836

import java.util.Arrays;

public class Kata_009 {
  public static int findIt(int[] numbers) {
    return Arrays.stream(numbers).filter(num ->
      Arrays.stream(numbers).filter((a) -> a == num).count() % 2 != 0
    ).findFirst().getAsInt();
  }
}

