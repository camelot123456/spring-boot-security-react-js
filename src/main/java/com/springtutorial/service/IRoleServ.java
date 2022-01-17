package com.springtutorial.service;

import java.util.List;

import com.springtutorial.entity.RoleEntity;

public interface IRoleServ {

	public RoleEntity findOneById(String id);
	
	public List<RoleEntity> findAll();
	
	public RoleEntity save(RoleEntity role);
	
	public RoleEntity update(RoleEntity role);
	
	public void deleteById(String id);
	
}
