// https://www.codewars.com/kata/578553c3a1b8d5c40300037c

import java.util.ArrayList;
import java.util.Arrays;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class Kata_504_test {
  @Test
  void convertBinaryArrayToInt() {
    assertEquals(1, Kata_504.ConvertBinaryArrayToInt(new ArrayList<>(Arrays.asList(0,0,0,1))));
    assertEquals(15, Kata_504.ConvertBinaryArrayToInt(new ArrayList<>(Arrays.asList(1,1,1,1))));
    assertEquals(6, Kata_504.ConvertBinaryArrayToInt(new ArrayList<>(Arrays.asList(0,1,1,0))));
    assertEquals(9, Kata_504.ConvertBinaryArrayToInt(new ArrayList<>(Arrays.asList(1,0,0,1))));
  }
}