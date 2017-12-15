public class kata_007_best {
  public static String printerError(String s) {
    return s.replaceAll("[a-m]", "").length() + "/" + s.length();
  }
}
