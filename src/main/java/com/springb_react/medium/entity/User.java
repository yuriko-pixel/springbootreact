package com.springb_react.medium.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table(name = "m_user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "surname")
    private String surname;

    @Column(name = "email")
    private String email;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    public User(@JsonProperty("id") int id,
    			@JsonProperty("name") String name,
    			@JsonProperty("surname") String surname,
    			@JsonProperty("email") String email,
    			@JsonProperty("username") String username,
    			@JsonProperty("password") String password) {
    	this.id = id;
    	this.name = name;
    	this.surname = surname;
    	this.email = email;
    	this.username = username;
    	this.password = password;

    }

}