package com.springtutorial.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.springtutorial.entity.RoleEntity;
import com.springtutorial.service.IRoleServ;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", maxAge = 3600)
public class RoleApi {

	@Autowired
	private IRoleServ roleServ;
	
	@GetMapping("/roles")
	public ResponseEntity<List<RoleEntity>> showRole() {
		return ResponseEntity.ok().body(roleServ.findAll());
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
	
}
