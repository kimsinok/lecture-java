package generic;


// Generic Class
class Box<T > {   // Type Parameter

    private T item;

    public Box() {
        
    }

    public Box(T item) {
        this.item = item;
    }

    // setter method
    public void setItem(T item) {
        this.item = item;
    }

    // getter method
    public T getItem() {
        return this.item;
    }

}



public class GenericExam2 {    

    // Generic Method
    // public static <T extends Number> void printBox(Box<T> obj) {
    //     System.out.println(obj.getItem());
    // }

    // Generic Method : ? : Generic wild card
    public static void printBox(Box<? extends Number> obj) {
        System.out.println(obj.getItem());
    }


    public static void main(String[] args) {

        Box<Double> box1 = new Box<>(1.0);

        printBox(box1);

        Box<Integer> box2 = new Box<>(1);
        printBox(box2);
     
    }

}
