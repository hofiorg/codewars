// https://www.codewars.com/kata/5ae05c229c54affeeb00013c

import static org.junit.Assert.assertEquals;

public class Kata_505_test {
  @org.junit.Test
  public void high() {
    assertEquals("taxi", Kata_505.high("man i need a taxi up to ubud"));
    assertEquals("volcano", Kata_505.high("what time are we climbing up to the volcano"));
    assertEquals("semynak", Kata_505.high("take me to semynak"));
  }
}