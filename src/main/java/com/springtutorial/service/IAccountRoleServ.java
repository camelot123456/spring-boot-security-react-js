package com.springtutorial.service;

import java.util.List;

import com.springtutorial.entity.AccountRole;

public interface IAccountRoleServ {
	
	public AccountRole findOneById(String id);

	public void editRoleToAccount(String idAccount, List<String> idRoles);
	
	public AccountRole findOneByIdAccountAndIdRole(String idAccount, String idRole);

}
