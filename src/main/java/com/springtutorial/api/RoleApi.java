package com.springtutorial.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springtutorial.entity.RoleEntity;
import com.springtutorial.model.FormLoginCustom;
import com.springtutorial.service.IRoleServ;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000")
public class RoleApi {

	@Autowired
	private IRoleServ roleServ;
	
	@GetMapping("/roles")
	public ResponseEntity<List<RoleEntity>> showRole() {
		return ResponseEntity.ok().body(roleServ.findAll());
	}
	
	@PostMapping("/role")
	public ResponseEntity<RoleEntity> doSave(@RequestBody RoleEntity role) {
		return ResponseEntity.ok().body(roleServ.save(role));
	}
	
	@PostMapping("/test")
	public ResponseEntity<String> doTest(@RequestBody FormLoginCustom test) {
		return ResponseEntity.ok().body(test.toString());
	}
	
	@PutMapping("/role")
	public ResponseEntity<RoleEntity> doUpdate(@RequestBody RoleEntity role) {
		return ResponseEntity.ok().body(roleServ.update(role));
	}
	
	@DeleteMapping("/role")
	public ResponseEntity<String> doDelete(@RequestBody RoleEntity role) {
		roleServ.deleteById(role.getId());
		return ResponseEntity.ok().body("ok");
	}
	
}
