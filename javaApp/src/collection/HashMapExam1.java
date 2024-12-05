package collection;

import java.util.HashMap;

public class HashMapExam1 {

    public static void main(String[] args) {
        
        HashMap<String, Contact> map = new HashMap<>();

        Contact contact1 = new Contact("java@gmail.com", "일길동", "011-1111-1111");
        Contact contact2 = new Contact("spring@gmail.com", "이길동", "011-2222-1111");
        Contact contact3 = new Contact("react@gmail.com", "삼길동", "011-3333-1111");
        Contact contact4 = new Contact("java@gmail.com", "홍길동", "011-1234-1234");
        
        map.put(contact1.getEmail(), contact1);        
        map.put(contact2.getEmail(), contact2);
        map.put(contact3.getEmail(), contact3);
        map.put(contact4.getEmail(), contact4);

        Contact contact = map.get("java@gmail.com");

        if (contact != null) {
            System.out.println(contact.getEmail());
            System.out.println(contact.getName());
            System.out.println(contact.getPhone());
        } else {
            System.out.println("연락처 정보가 없습니다.");
        }

    }
}


