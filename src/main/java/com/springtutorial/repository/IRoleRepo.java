package com.springtutorial.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springtutorial.entity.RoleEntity;

public interface IRoleRepo extends JpaRepository<RoleEntity, String>{

	public RoleEntity findOneById(String id);
	
}
