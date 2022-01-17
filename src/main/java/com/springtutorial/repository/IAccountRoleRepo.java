package com.springtutorial.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.springtutorial.entity.AccountRole;

public interface IAccountRoleRepo extends JpaRepository<AccountRole, String>{

	public AccountRole findOneById(String id);
	
	@Query(value = "select ar.* "
			+ "from account_role ar inner join account a "
			+ "on ar.id_account = a.id inner join [role] r "
			+ "on ar.id_role = r.id "
			+ "where a.id = ?1 and r.id = ?2",
			nativeQuery = true)
	public AccountRole findOneByIdAccountAndIdRole(String idAccount, String idRole);
	
}
