package com.springtutorial.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import com.springtutorial.filter.CustomJwtAuthenticationFilter;
import com.springtutorial.filter.CustomJwtAuthorizaionFilter;
import com.springtutorial.service.impl.AccountServ;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SpringSecurityConfig extends WebSecurityConfigurerAdapter{

	private final AccountServ accountServ;
	private final PasswordEncoder passwordEncoder;
	private final JwtConfig jwtConfig;
	
	
	
	public SpringSecurityConfig(AccountServ accountServ, PasswordEncoder passwordEncoder, JwtConfig jwtConfig) {
		this.accountServ = accountServ;
		this.passwordEncoder = passwordEncoder;
		this.jwtConfig = jwtConfig;
	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		// TODO Auto-generated method stub
		auth.userDetailsService(accountServ).passwordEncoder(passwordEncoder);
	}
	
	@Bean
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
		// TODO Auto-generated method stub
		return super.authenticationManagerBean();
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		// TODO Auto-generated method stub
		CustomJwtAuthenticationFilter customJwtAuthenticationFilter = new CustomJwtAuthenticationFilter(authenticationManagerBean(), jwtConfig);
		customJwtAuthenticationFilter.setFilterProcessesUrl("/api/login");
		
		http
			.cors()
			.and()
			.csrf().disable()
			.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
			.and()
			.authorizeRequests()
			.antMatchers("/login**", "/logout**")
			.permitAll()
			.and()
			.addFilter(customJwtAuthenticationFilter)
			.addFilterBefore(new CustomJwtAuthorizaionFilter(), CustomJwtAuthenticationFilter.class)
			.logout()
				.logoutRequestMatcher(new AntPathRequestMatcher("/logout", "GET"))
				.logoutUrl("/logout")
				.deleteCookies("JSESSIONID");
		
	}
	
}
