package com.kreutz.instantblog.config;

import com.kreutz.instantblog.config.jwt.AuthEntryPointJwt;
import com.kreutz.instantblog.config.jwt.JwtAuthFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;

import java.util.List;

import static org.springframework.security.authorization.AuthorityAuthorizationManager.hasRole;

@Configuration
@EnableWebSecurity
@Order(Ordered.HIGHEST_PRECEDENCE)
@RequiredArgsConstructor
public class SecurityConfig {


    private final JwtAuthFilter jwtAuthFilter;

    private final AuthenticationProvider authenticationProvider;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http, AuthEntryPointJwt unauthorizedHandler) throws Exception{
        http
                .cors().configurationSource(request -> {
                    var cors = new CorsConfiguration();
                    cors.setAllowedOrigins(List.of("http://localhost:5173", "http://localhost:5174"));
                    cors.setAllowedMethods(List.of("GET","POST", "PUT", "PATCH", "DELETE", "OPTIONS"));
                    cors.setAllowedHeaders(List.of("*"));
                    return cors;
                })
                .and()
                    .csrf(csrf -> csrf.disable())
                        .exceptionHandling().authenticationEntryPoint(unauthorizedHandler)
                .and()
                    .authorizeHttpRequests()
                        .requestMatchers( "/error")
                            .permitAll()
                        .requestMatchers(HttpMethod.POST, "/api/auth/**")
                            .permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/posts")
                            .permitAll()
                        .requestMatchers(HttpMethod.PATCH, "/api/posts/{postId}/like")
                            .permitAll()
                        .requestMatchers(HttpMethod.POST, "/api/posts")
                            .access(hasRole("BLOGGER"))
                        .anyRequest()
                            .authenticated()
                .and()
                    .sessionManagement()
                    .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                    .authenticationProvider(authenticationProvider)
                    .addFilterAfter(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }

}
