package com.springtutorial.utils;

import java.sql.Date;
import java.time.LocalDate;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletRequest;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.springtutorial.config.JwtConfig;

public class JwtUtil {

	private final JwtConfig jwtConfig;
	
	public JwtUtil(JwtConfig jwtConfig) {
		// TODO Auto-generated constructor stub
		this.jwtConfig = jwtConfig;
	}
	
	public String createJwt(HttpServletRequest request, Authentication authentication) {

		Algorithm algorithm = Algorithm.HMAC256(jwtConfig.getSecretKey().getBytes());
		
		String accessToken = JWT.create()
				.withSubject(authentication.getName())
				.withExpiresAt(Date.valueOf(LocalDate.now().plusDays(jwtConfig.getTokenExpirationAfterDays())))
				.withClaim("roles", authentication.getAuthorities()
						.stream()
						.map(GrantedAuthority::getAuthority)
						.collect(Collectors.toList()))
				.withIssuedAt(new java.util.Date())
				.withIssuer(request.getRequestURL().toString())
				.sign(algorithm);
		
		return jwtConfig.getTokenPrefix() + accessToken;
	}
	
}
