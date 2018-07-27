// https://www.codewars.com/kata/5390bac347d09b7da40006f6

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class Kata_502_test {
  private Kata_502 jadenCase = new Kata_502();

  @Test
  void test() {
    assertEquals("Most Trees Are Blue", jadenCase.toJadenCase("most trees are blue"), "toJadenCase doesn't return a valide JadenCase String! try again please :)");
  }

  @Test
  void testNullArg() {
    assertNull(jadenCase.toJadenCase(null), "Must return null when the arg is null");
  }

  @Test
  void testEmptyArg() {
    assertNull(jadenCase.toJadenCase(""), "Must return null when the arg is null");
  }
}