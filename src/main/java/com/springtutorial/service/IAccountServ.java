package com.springtutorial.service;

import java.util.List;

import com.springtutorial.entity.AccountEntity;

public interface IAccountServ {

	public AccountEntity findOneById(String id);
	
	public List<AccountEntity> findAll();
	
	public AccountEntity save(AccountEntity account);
	
	public AccountEntity update(AccountEntity account);
	
	public void deleteById(String id);
	
}
