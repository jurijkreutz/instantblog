package com.kreutz.instantblog.endpoint;

import com.kreutz.instantblog.model.Post;
import com.kreutz.instantblog.service.PostService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/posts")
public class PostEndpoint {

    private final PostService postService;

    public PostEndpoint(PostService postService) {
        this.postService = postService;
    }

    @GetMapping
    public List<Post> getAllPosts() {
        return postService.getAllPosts();
    }

    @PostMapping
    public Post createPost(@RequestBody Post post) {
        return postService.createPost(post);
    }

}
