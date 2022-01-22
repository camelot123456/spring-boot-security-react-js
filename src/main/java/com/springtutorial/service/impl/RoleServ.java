package com.springtutorial.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.springtutorial.entity.RoleEntity;
import com.springtutorial.repository.IRoleRepo;
import com.springtutorial.service.IRoleServ;

import net.bytebuddy.utility.RandomString;

@Service
public class RoleServ implements IRoleServ{

	@Autowired
	private IRoleRepo roleRepo;
	
	@Override
	public RoleEntity findOneById(String id) {
		// TODO Auto-generated method stub
		return roleRepo.findOneById(id);
	}

	@Override
	public List<RoleEntity> findAll() {
		// TODO Auto-generated method stub
		return roleRepo.findAll();
	}

	@Override
	public RoleEntity save(RoleEntity role) {
		// TODO Auto-generated method stub
		role.setId(RandomString.make(4));
		if (!roleRepo.existsById(role.getId())) {
			return roleRepo.save(role);
		}
		return null;
	}

	@Override
	public RoleEntity update(RoleEntity role) {
		// TODO Auto-generated method stub
		if (roleRepo.existsById(role.getId())) {
			return roleRepo.save(role);
		}
		return null;
	}

	@Override
	public void deleteById(String id) {
		// TODO Auto-generated method stub
		System.out.println(id);
		roleRepo.deleteById(id);
	}

	@Override
	public void delete(String[] ids) {
		// TODO Auto-generated method stub
		for (String id : ids) {
			roleRepo.deleteById(id);
		}
	}

	@Override
	public Page<RoleEntity> findAllByKeyword(int currentPage, int sizePage, String sortField, String sortDir, String keyword) {
		// TODO Auto-generated method stub
		Sort sort = Sort.by(sortField);
		sort = sortDir.equals("acs") ? sort.ascending() : sort.descending();
		PageRequest pageRequest = PageRequest.of(currentPage, sizePage);
		if (keyword.equals("") || keyword == null) {
			return roleRepo.findAll(pageRequest);
		}
		return roleRepo.search(keyword, pageRequest);
	}

}
