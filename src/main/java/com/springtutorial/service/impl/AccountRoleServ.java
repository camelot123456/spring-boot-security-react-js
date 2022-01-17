package com.springtutorial.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springtutorial.entity.AccountEntity;
import com.springtutorial.entity.AccountRole;
import com.springtutorial.entity.RoleEntity;
import com.springtutorial.repository.IAccountRepo;
import com.springtutorial.repository.IAccountRoleRepo;
import com.springtutorial.repository.IRoleRepo;
import com.springtutorial.service.IAccountRoleServ;

import net.bytebuddy.utility.RandomString;

@Service
public class AccountRoleServ implements IAccountRoleServ {

	@Autowired
	private IAccountRepo accountRepo;

	@Autowired
	private IRoleRepo roleRepo;

	@Autowired
	private IAccountRoleRepo accountRoleRepo;

	@Override
	public AccountRole findOneById(String id) {
		// TODO Auto-generated method stub
		return accountRoleRepo.findOneById(id);
	}

	@Override
	public void editRoleToAccount(String idAccount, List<String> idRoles) {
		// TODO Auto-generated method stub
		AccountEntity account = accountRepo.findOneById(idAccount);
		for (AccountRole accountRole : account.getAccountRoleArr()) {
			accountRoleRepo.delete(accountRole);
		}
		for (String idRole : idRoles) {
			RoleEntity role = roleRepo.findOneById(idRole);
			AccountRole accountRoleNew = new AccountRole();
			accountRoleNew.setAccount(account);
			accountRoleNew.setRole(role);
			accountRoleNew.setId(RandomString.make(4));
			accountRoleRepo.save(accountRoleNew);
		}
	}

	@Override
	public AccountRole findOneByIdAccountAndIdRole(String idAccount, String idRole) {
		// TODO Auto-generated method stub
		return accountRoleRepo.findOneByIdAccountAndIdRole(idAccount, idRole);
	}

}
