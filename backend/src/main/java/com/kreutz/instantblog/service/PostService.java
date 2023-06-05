package com.kreutz.instantblog.service;

import com.kreutz.instantblog.model.Post;
import com.kreutz.instantblog.model.repository.PostRepository;
import jakarta.transaction.Transactional;
import org.hibernate.ObjectNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class PostService {

    private final PostRepository postRepository;

    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    public Post createPost(Post post) {
        postRepository.save(new Post(post.getTitle(), post.getContent(), new Date()));
        return post;
    }

}
