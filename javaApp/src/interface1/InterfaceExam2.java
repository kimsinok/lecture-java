
package interface1;

interface Shape {

    //둘레의 길이를 구하다.
    double getCircumferene();

    //넓이를 구하다.
    double getArea();
    
}


class Circle implements Shape {

    // instance field
    private double radius; 

    // constructor method
    public Circle() {
    }

    public Circle(double radius) {
        this.radius = radius;
    }


    @Override
    public double getArea() {        
        return Math.PI * this.radius * this.radius;
    }

    @Override
    public double getCircumferene() {      
        return 2 * Math.PI * this.radius;
    }    

}


class Rectangle implements Shape {
    // instance field
    private double width;
    private double height;

        
    public Rectangle() {

    }

    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }

    @Override
    public double getArea() {
        return this.width * this.height;
    }

    @Override
    public double getCircumferene() {
        return (this.width + this.height) * 2;
    }

}


public class InterfaceExam2 {

    public static void printShape(Shape obj) {
        System.out.printf("둘레의 길이 : %.3f%n",obj.getCircumferene());
        System.out.printf("넓이 : %.3f%n", obj.getArea());
    }


    public static void main(String[] args) {
        
        Circle  circle = new Circle(5.3);
        printShape(circle);

        Rectangle rectangle = new Rectangle(1.5, 2.0);
        printShape(rectangle);

    }

}
