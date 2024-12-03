package exception;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class ExceptionExam1 {

    public static void main(String[] args) {

        BufferedReader br = null;
        try {             
            String fileName = "c:\\a\\hello1.txt";    
            br = new BufferedReader(new FileReader(fileName));

            String line = null;
            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }   
        } catch (FileNotFoundException ex) {
            //ex.printStackTrace();
            System.out.println("File not exist!!");           
        } catch (IOException ex1) {
            ex1.printStackTrace();
        }        
        finally {
            try {
               if (br != null) {
                    br.close();
               }
            } catch (Exception e) {
                e.printStackTrace();
            }            
        }           
        System.out.println("Exit!!");
    }
}
