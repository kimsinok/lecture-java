

public class Test {
    
    public static void main(String[] args) {

        Account src = new Account("1111", "일길동", "aaaa", 10000);

        Account copy = src;        

        System.out.println(src.getPwd());

        copy.setPwd("bbbb");

        System.out.println(src.getPwd());

        

    }

}
