import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;

public class Kata_505 {
  public static String high(String s) {
    return Collections.max(Arrays.asList(s.split(" ")), Comparator.comparing(Kata_505::toNr));
  }

  private static Integer toNr(String s) {
    return s.chars().map(c -> c - 96 ).sum();
  }
}
