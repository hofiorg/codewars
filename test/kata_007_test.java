import static org.junit.Assert.*;

import org.junit.Test;


public class kata_007_test {
    @Test
    public void test() {
        System.out.println("printerError Fixed Tests");
        String s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
        assertEquals("3/56", kata_007.printerError(s));
    }
}