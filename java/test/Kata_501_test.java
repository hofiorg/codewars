// https://www.codewars.com/kata/56541980fa08ab47a0000040

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class Kata_501_test {
  @Test
  void test() {
    System.out.println("printerError Fixed Tests");
    String s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
    assertEquals("3/56", Kata_501.printerError(s));
  }
}