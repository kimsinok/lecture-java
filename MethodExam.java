/*
 * static(클래스) 메소드 
 */

public class MethodExam {

    // 두 정수의 합을 구하는 메소드 구현부
    public static int add(int a, int b) {
        return a + b;
    }

    // 두 정수의 곱을 구하는 메소드 구현부
    public int multiply(int a, int b) {
        return a * b;
    }


    public static void main(String[] args) {
        // 메소드 호출부
        int result1 = add(1, 3);
        System.out.println("result1 : " + result1);

        int result2 = MethodExam.add(1, 3);
        System.out.println("result2 : " + result2);        
        
        MethodExam obj = new MethodExam();
        System.out.println(obj.multiply(1, 2)); 

        
    }

}
