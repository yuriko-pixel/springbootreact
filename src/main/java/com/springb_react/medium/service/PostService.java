package com.springb_react.medium.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springb_react.medium.entity.Post;
import com.springb_react.medium.repository.PostRepository;

@Service
public class PostService {

	@Autowired
	private PostRepository postRepository;

	public List<Post> getAllPosts() {
		List<Post> postList = new ArrayList<>();
    	Iterable<Post> iterable = postRepository.findAll();
    	iterable.forEach(postList::add);
    	return postList;
	}

	public void savePost(Post post) {
		postRepository.save(post);
	}

	public Post getPost(long id) {
		return postRepository.findOneById(id);
	}
}
