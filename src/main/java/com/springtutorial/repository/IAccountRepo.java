package com.springtutorial.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springtutorial.entity.AccountEntity;

public interface IAccountRepo extends JpaRepository<AccountEntity, String>{

	public AccountEntity findOneById(String id);
	
	public AccountEntity findOneByUsername(String username);
	
}
