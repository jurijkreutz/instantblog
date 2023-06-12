package com.kreutz.instantblog.service;

import com.kreutz.instantblog.model.Post;
import com.kreutz.instantblog.model.repository.PostRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;

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
        return postRepository.save(new Post(post.getTitle(), post.getContent(), Instant.now().getEpochSecond()));
    }

}
