package com.springtutorial.filter;

import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.springtutorial.config.JwtConfig;
import com.springtutorial.entity.AccountEntity;

@CrossOrigin("http://localhost:3000")
public class CustomJwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter{
	
	private final AuthenticationManager authenticationManager;
	private final JwtConfig jwtConfig;
	
	public CustomJwtAuthenticationFilter(AuthenticationManager authenticationManager, JwtConfig jwtConfig) {
		// TODO Auto-generated constructor stub
		this.authenticationManager = authenticationManager;
		this.jwtConfig = jwtConfig;
	}

	
	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
			throws AuthenticationException {
		// TODO Auto-generated method stub
		try {
			AccountEntity account = new ObjectMapper().readValue(request.getInputStream(), AccountEntity.class);
			Authentication authentication = new UsernamePasswordAuthenticationToken(
					account.getUsername(), 
					account.getPassword());
			response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
			response.setHeader("Access-Control-Allow-Credentials ", "true");
			response.setHeader("Access-Control-Allow-Methods ", "GET, POST, OPTIONS");
			response.setHeader("Access-Control-Allow-Headers ", "Origin, Content-Type, Accept");
			return authenticationManager.authenticate(authentication);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			throw new RuntimeException(e);
		}
	}
	
	@Override
	protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
			Authentication authResult) throws IOException, ServletException {
		// TODO Auto-generated method stub
		User user = (User) authResult.getPrincipal();
		Algorithm algorithm = Algorithm.HMAC256(jwtConfig.getSecretKey().getBytes());
		Map<String, Object> maps = new HashMap<String, Object>();
		maps.put("fullname", "Nguyen Sy Bao");
		maps.put("avatar", "https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80");
		maps.put("age", 12);
		
		String accessToken = JWT.create()
				.withSubject(user.getUsername())
				.withExpiresAt(new Date(System.currentTimeMillis() + 2 * 60 *1000))
				.withIssuer(request.getRequestURL().toString())
				.withClaim("roles", user.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList()))
				.withClaim("maps", maps)
				.sign(algorithm);
		response.setHeader("access_token", jwtConfig.getTokenPrefix() + accessToken);
	}
	
}
