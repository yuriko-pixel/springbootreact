package com.springb_react.medium.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.springb_react.medium.entity.Post;

@Repository
public interface PostRepository extends CrudRepository<Post, Long>{
	public Post findOneById(long id);
}