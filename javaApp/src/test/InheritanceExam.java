package test;


// 사원 클래스 : Super class
// 추상 클래스
abstract class Employee {
    // field
    public String no;
    public String name;

    // 생성자 메소드
    Employee() {

    }
    
    Employee(String no, String name) {
        this.no = no;
        this.name = name;
    }

    // 추상 메소드
    public abstract int payCheck();


    // 구상 메소드    
    public void printEmployee() {
        System.out.println("사번 : " + no);
        System.out.println("이름 : " + name);
    }

} // end of Employee class


// 정규직 사원 : Sub class

class Regular extends Employee {
    // field
    private int pay;

    //생성자 메소드
    public Regular() {
        super(); //상위 클래스의 생성자 메소드 호츨
    }

    //생성자 메소드
    public Regular(String no, String name, int pay) {
        super(no,name);
        this.pay = pay;        
    }

    // 구상 메소드
    @Override
    public int payCheck() {
        return pay;
    }

    @Override
    public void printEmployee() {
        super.printEmployee();
        System.out.println("고정급 : " + pay);
    }    

    
} // end of Regular class


// 일용직 사원 : Sub class
// Daily , dailyPay, workday
class Daily extends Employee {
    //field
    private int workday;
    private int dailyPay;

    //생성자 메소드
    Daily() {
        super();
    }

    Daily(String no, String name, int workday, int dailyPay) {
        super(no, name);
        this.workday = workday;
        this.dailyPay = dailyPay;
    }

    @Override
    public int payCheck() {
      return workday * dailyPay;
    }

    @Override
    public void printEmployee() {        
        super.printEmployee();
        System.out.println("근무일수 : " + workday);
        System.out.println("일당급여 : " + dailyPay);
    }

    

} // end of Daily class



public class InheritanceExam {

    public static void main(String[] args) {

        // 사원 객체 생성
        // Employee emp = new Employee("E0000", "홍길동");
        // System.out.println(emp.payCheck());
        // emp.printEmployee();

        // 정규직 사원 객체 생성
        Regular emp1 = new Regular("E001", "일길동", 1000000);
        System.out.println(emp1.payCheck());
        emp1.printEmployee();


        
    }

}
