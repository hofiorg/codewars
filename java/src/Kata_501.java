// https://www.codewars.com/kata/56541980fa08ab47a0000040

public class Kata_501 {
  public static String printerError(String s) {
    return s.chars().filter(c -> c > 109).count() + "/" + s.length();
  }
}