package com.springtutorial.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.springtutorial.entity.AccountEntity;
import com.springtutorial.repository.IAccountRepo;
import com.springtutorial.service.IAccountServ;

import net.bytebuddy.utility.RandomString;

@Service
public class AccountServ implements IAccountServ, UserDetailsService{

	@Autowired
	private IAccountRepo accountRepo;
	
	public String passwordEncoder(String password) {
		return new BCryptPasswordEncoder().encode(password);
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		AccountEntity account = accountRepo.findOneByUsername(username);
		if (account == null) {
			throw new UsernameNotFoundException("Username khong ton tai trong database!");
		}
		
		List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
		account.getAccountRoleArr().forEach(accountRole -> {
			authorities.add(new SimpleGrantedAuthority("ROLE_" + accountRole.getRole().getCode()));
		});
		
		UserDetails userDetails = new User(account.getUsername(), account.getPassword(), authorities);
		return userDetails;
	}
	
	@Override
	public AccountEntity findOneById(String id) {
		// TODO Auto-generated method stub
		return accountRepo.findOneById(id);
	}

	@Override
	public List<AccountEntity> findAll() {
		// TODO Auto-generated method stub
		return accountRepo.findAll();
	}

	@Override
	public AccountEntity save(AccountEntity account) {
		// TODO Auto-generated method stub
		account.setId(RandomString.make(4));
		if (!accountRepo.existsById(account.getId())) {
			account.setPassword(passwordEncoder(account.getPassword()));
			return accountRepo.save(account);
		}
		return null;
	}

	@Override
	public AccountEntity update(AccountEntity account) {
		// TODO Auto-generated method stub
		if (accountRepo.existsById(account.getId())) {
			account.setPassword(passwordEncoder(account.getPassword()));
			return accountRepo.save(account);
		}
		return null;
	}

	@Override
	public void deleteById(String id) {
		// TODO Auto-generated method stub
		accountRepo.deleteById(id);
	}

}
