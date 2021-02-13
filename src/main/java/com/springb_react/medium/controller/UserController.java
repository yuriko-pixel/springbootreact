package com.springb_react.medium.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.springb_react.medium.ResourceNotFoundException;
import com.springb_react.medium.entity.User;
import com.springb_react.medium.repository.UserRepository;

@Controller
@RequestMapping("/user")
public class UserController {
    private UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @PostMapping(value="/save",produces = "application/json")
    public String saveUser(@RequestBody User user){
    	System.out.println(user);
    	user.setId(1);
        this.userRepository.save(user);
        return "index";
    }

    @GetMapping("/all")
    public ResponseEntity<List<User>> getUsers(){
        return ResponseEntity.ok(
          this.userRepository.findAll()
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable(value = "id" ) Long id) throws Exception{
        User user = this.userRepository.findById(id).orElseThrow(
                ()-> new ResourceNotFoundException("User not found")
        );

        return  ResponseEntity.ok().body(user);
    }

    @PutMapping("/{id}")
    public User updateUser(@RequestBody User newUser, @PathVariable(value = "id") int id){
        return this.userRepository.findById((long) id)
                .map(user -> {
                    user.setName(newUser.getName());
                    user.setSurname(newUser.getSurname());
                    user.setEmail(newUser.getEmail());
                    user.setUsername(newUser.getUsername());
                    user.setPassword(newUser.getPassword());
                    return this.userRepository.save(user);
                })
                .orElseGet(()->{
                   newUser.setId(id);
                   return this.userRepository.save(newUser);
                });
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> removeUser(@PathVariable(value = "id") Long id) throws Exception{
        User user =this.userRepository.findById(id).orElseThrow(
                ()-> new ResourceNotFoundException("User not found"+id)
        );

        this.userRepository.delete(user);
        return ResponseEntity.ok().build();
    }




}