package com.springb_react.medium.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springb_react.medium.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
}
