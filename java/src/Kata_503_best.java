// https://www.codewars.com/kata/54da5a58ea159efa38000836

import java.util.Arrays;

public class Kata_503_best {
  public static int findIt(int[] A) {
    int xor = 0;
    for (int i = 0; i < A.length; i++) {
      xor ^= A[i];
    }
    return xor;
  }
}

