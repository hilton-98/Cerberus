package com.expense_hound.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.expense_hound.backend.entity.User;
import com.expense_hound.backend.repository.UserRepository;

@Service
public class UserService {
   
   @Autowired
   private UserRepository userRepository;

    public List<User> getAllUsers() {
         System.out.println("Hello world");
         System.out.println(userRepository.findAll());
        return userRepository.findAll();
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }
}
