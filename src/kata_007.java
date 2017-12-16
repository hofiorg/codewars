// https://www.codewars.com/kata/56541980fa08ab47a0000040

public class kata_007 {
  public static String printerError(String s) {
    return s.chars().filter(c -> c > 109).count() + "/" + s.length();
  }
}