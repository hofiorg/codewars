// https://www.codewars.com/kata/54da5a58ea159efa38000836

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class Kata_503_test {
  @Test
  void findTest() {
    assertEquals(5, Kata_503.findIt(new int[]{20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5}));
    assertEquals(-1, Kata_503.findIt(new int[]{1,1,2,-2,5,2,4,4,-1,-2,5}));
    assertEquals(5, Kata_503.findIt(new int[]{20,1,1,2,2,3,3,5,5,4,20,4,5}));
    assertEquals(10, Kata_503.findIt(new int[]{10}));
    assertEquals(10, Kata_503.findIt(new int[]{1,1,1,1,1,1,10,1,1,1,1}));
    assertEquals(1, Kata_503.findIt(new int[]{5,4,3,2,1,5,4,3,2,10,10}));
  }
}