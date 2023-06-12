package com.kreutz.instantblog.service;

import com.kreutz.instantblog.model.ERole;
import com.kreutz.instantblog.model.Role;
import com.kreutz.instantblog.model.User;
import com.kreutz.instantblog.model.repository.RoleRepository;
import com.kreutz.instantblog.model.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
@RequiredArgsConstructor
public class InitService {

    private final RoleRepository roleRepository;
    private final UserRepository userRepo;
    private final BCryptPasswordEncoder passwordEncoder;

    public void createUserEntries() {
        Role userRole = new Role(1, ERole.ROLE_USER);
        Role bloggerRole = new Role(2, ERole.ROLE_BLOGGER);
        User user = new User("user@instantblog.com", passwordEncoder.encode("user"));
        User blogger = new User("blogger@instantblog.com", passwordEncoder.encode("admin"));

        user.setRoles(Set.of(userRole));
        blogger.setRoles(Set.of(bloggerRole));

        roleRepository.save(userRole);
        roleRepository.save(bloggerRole);
        userRepo.save(user);
        userRepo.save(blogger);
    }

}
