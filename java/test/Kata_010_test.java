// https://www.codewars.com/kata/578553c3a1b8d5c40300037c

import java.util.ArrayList;
import java.util.Arrays;

import static org.junit.Assert.assertEquals;

public class Kata_010_test {
  @org.junit.Test
  public void convertBinaryArrayToInt() {
    assertEquals(1, Kata_010.ConvertBinaryArrayToInt(new ArrayList<>(Arrays.asList(0,0,0,1))));
    assertEquals(15, Kata_010.ConvertBinaryArrayToInt(new ArrayList<>(Arrays.asList(1,1,1,1))));
    assertEquals(6, Kata_010.ConvertBinaryArrayToInt(new ArrayList<>(Arrays.asList(0,1,1,0))));
    assertEquals(9, Kata_010.ConvertBinaryArrayToInt(new ArrayList<>(Arrays.asList(1,0,0,1))));
  }
}