package com.springtutorial.api;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.exc.StreamWriteException;
import com.fasterxml.jackson.databind.DatabindException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.springtutorial.config.JwtConfig;
import com.springtutorial.model.FormLoginCustom;
import com.springtutorial.service.IAccountServ;
import com.springtutorial.service.IRoleServ;
import com.springtutorial.utils.JwtUtil;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", maxAge = 3600)
public class AuthController {

	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private JwtConfig jwtConfig;
	
	@PostMapping(value = "/login")
	public ResponseEntity<?> authenticationUser(@RequestBody FormLoginCustom loginCustom,
			HttpServletRequest request, 
			HttpServletResponse response) throws StreamWriteException, DatabindException, IOException {
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(
						loginCustom.getUsername(), 
						loginCustom.getPassword()
				));
		
		SecurityContextHolder.getContext().setAuthentication(authentication);
		String accessToken = new JwtUtil(jwtConfig).createJwt(request, authentication);
		
		HttpHeaders headers = new HttpHeaders();
		headers.add("Authorization", accessToken);
		
		Map<String, String> maps = new HashMap<String, String>();
		maps.put("accessToken", accessToken);
		
		new ObjectMapper().writeValue(response.getOutputStream(), maps);
		return new ResponseEntity<>(null, headers, HttpStatus.OK);
	}
	
	
}
