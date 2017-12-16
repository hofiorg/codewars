// https://www.codewars.com/kata/56541980fa08ab47a0000040

public class Kata_501_best {
  public static String printerError(String s) {
    return s.replaceAll("[a-m]", "").length() + "/" + s.length();
  }
}
