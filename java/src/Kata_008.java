// https://www.codewars.com/kata/5390bac347d09b7da40006f6

import java.util.Arrays;
import java.util.stream.Collectors;

public class Kata_008 {
  public String toJadenCase(String phrase) {
    if(phrase == null || phrase.length() < 1)
      return null;

    return Arrays.stream(phrase.split(" "))
        .map((v) -> Character.toUpperCase(v.charAt(0)) + v.substring(1))
        .collect(Collectors.joining(" "));
  }
}

