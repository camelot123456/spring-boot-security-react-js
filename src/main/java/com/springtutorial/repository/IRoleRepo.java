package com.springtutorial.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.springtutorial.entity.RoleEntity;

public interface IRoleRepo extends JpaRepository<RoleEntity, String>{

	public RoleEntity findOneById(String id);
	
	@Query(value = "select * from [role] r "
			+ "where r.id like %?1% "
			+ "or r.name like %?1% "
			+ "or r.code like %?1%"
			,nativeQuery = true)
	public Page<RoleEntity> search(String keyword, Pageable pageable);
	
}
