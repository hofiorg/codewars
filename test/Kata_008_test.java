// https://www.codewars.com/kata/5390bac347d09b7da40006f6

import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;

public class Kata_008_test {
  private Kata_008 jadenCase = new Kata_008();

  @Test
  public void test() {
    assertEquals("toJadenCase doesn't return a valide JadenCase String! try again please :)", jadenCase.toJadenCase("most trees are blue"), "Most Trees Are Blue");
  }

  @Test
  public void testNullArg() {
    assertNull("Must return null when the arg is null", jadenCase.toJadenCase(null));
  }

  @Test
  public void testEmptyArg() {
    assertNull("Must return null when the arg is null", jadenCase.toJadenCase(""));
  }
}