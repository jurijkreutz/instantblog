package com.kreutz.instantblog.model.repository;

import com.kreutz.instantblog.model.ERole;
import com.kreutz.instantblog.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {

    Optional<Role> findByName(ERole name);

}
