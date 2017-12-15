public class kata_007 {
  public static String printerError(String s) {
    return s.chars().filter(c -> c > 109).count() + "/" + s.length();
  }
}