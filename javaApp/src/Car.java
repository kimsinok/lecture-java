// 자동차를 정의한 클래스
public class Car {
    //field
    //인스턴스 변수
    private String name;
    private int speed;

    //디폴트 생성자 메소드
    public Car() {
    }

    //매개변수 생성자 메소드
    public Car(String name, int speed) {
        this.name = name;
        this.speed = speed;
    }

    //속도를 높이다.
    public void accelerate(int speed) {
        this.speed = this.speed + speed;
        //this.speed += speed;
    }

    //속도를 낮추다
    public void decelerate(int speed) {
        this.speed -= speed;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getSpeed() {
        return speed;
    }

    public void setSpeed(int speed) {
        this.speed = speed;
    }  
    
    
    
}
