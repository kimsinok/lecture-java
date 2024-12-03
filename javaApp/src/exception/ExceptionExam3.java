package exception;

// import java.lang.*;

public class ExceptionExam3 {

    public static void main(String[] args) {

        String str = null;        
        try {            
            System.out.println(str.length());
        } catch (Exception e) {            
            System.out.println("Null 입니다.");
        }

        System.out.println("Exit!!");

    }

}
