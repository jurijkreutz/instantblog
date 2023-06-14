package com.kreutz.instantblog.service;

import com.kreutz.instantblog.model.Post;
import com.kreutz.instantblog.model.repository.PostRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.time.Instant;
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

    public Optional<Post> findPostById(int postId) {
        return postRepository.findById(postId);
    }

    public Post createPost(Post post) {
        post.setDate(Instant.now().getEpochSecond());
        if (post.getImageUrl().equals("")) {
            post.setImageUrl(null);
        }
        return postRepository.save(post);
    }

    public void addLike(Post post) {
        post.setLikes(post.getLikes()+1);
        postRepository.save(post);
    }
}
