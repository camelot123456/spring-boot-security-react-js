package com.springtutorial.api;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.exc.StreamWriteException;
import com.fasterxml.jackson.databind.DatabindException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.springtutorial.entity.RoleEntity;
import com.springtutorial.model.FormLoginCustom;
import com.springtutorial.model.PaginationCustom;
import com.springtutorial.service.IRoleServ;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", maxAge = 3600)
public class RoleApi {

	@Autowired
	private IRoleServ roleServ;

	@GetMapping("/roles")
	public void showRole(HttpServletResponse response)
			throws StreamWriteException, DatabindException, IOException {
		String sortField = "id";
		String sortDir = "asc";
		int sizePage = 4;
		int currentPage = 0;
		
		Page<RoleEntity> roles = handlePaged(currentPage, sizePage, sortField, sortDir, "", response);
		Map<String, Object> mapper = new HashMap<String, Object>();
		mapper.put("paged", new PaginationCustom(
				roles.getTotalElements(),
				roles.getTotalPages(),
				sortField,
				sortDir,
				currentPage,
				sizePage,
				""));
		mapper.put("roles", roles.getContent());
		new ObjectMapper().writeValue(response.getOutputStream(), mapper);
	}

	@GetMapping(value = {"/roles/page/{currentPage}"})
	public Page<RoleEntity> handlePaged(@PathVariable("currentPage") int currentPage,  
			@Param("sizePage") int sizePage,
			@Param("sortField") String sortField, 
			@Param("sortDir") String sortDir, 
			@Param("keyword") String keyword,
			HttpServletResponse response) throws StreamWriteException, DatabindException, IOException {
		
		Page<RoleEntity> roles = roleServ.findAllByKeyword(currentPage, sizePage, sortField, sortDir, keyword);
		Map<String, Object> mapper = new HashMap<String, Object>();
		mapper.put("paged", new PaginationCustom(
				roles.getTotalElements(),
				roles.getTotalPages(),
				sortField,
				sortDir,
				currentPage,
				sizePage,
				keyword));
		mapper.put("roles", roleServ.findAllByKeyword(currentPage, sizePage, sortField, sortDir, keyword).getContent());
		new ObjectMapper().writeValue(response.getOutputStream(), mapper);
		return roles;
	}

	@GetMapping("/role/{id}")
	public ResponseEntity<RoleEntity> showRoleById(@PathVariable("id") String id) {
		return ResponseEntity.ok().body(roleServ.findOneById(id));
	}

	@PostMapping("/role")
	public ResponseEntity<RoleEntity> doSave(@RequestBody RoleEntity role) {
		return ResponseEntity.ok().body(roleServ.save(role));
	}

	@PutMapping("/role")
	public ResponseEntity<RoleEntity> doUpdate(@RequestBody RoleEntity role) {
		return ResponseEntity.ok().body(roleServ.update(role));
	}

	@DeleteMapping("/role/{id}")
	public ResponseEntity<HttpStatus> doDelete(@PathVariable("id") String id) {
		roleServ.deleteById(id);
		return ResponseEntity.ok().body(HttpStatus.NO_CONTENT);
	}

	@DeleteMapping("/role")
	public ResponseEntity<HttpStatus> doDeleteMany(@RequestBody RoleEntity role) {
		roleServ.delete(role.getIds());
		return ResponseEntity.ok().body(HttpStatus.NO_CONTENT);
	}

}
