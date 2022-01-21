package com.springtutorial.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springtutorial.entity.AccountEntity;
import com.springtutorial.service.IAccountServ;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", maxAge = 3600)
public class AccountApi {

	@Autowired
	private IAccountServ accountServ;
	
	@GetMapping("/accounts")
	@PreAuthorize(value = "hasAnyRole('ROLE_USER')")
	public List<AccountEntity> showAccount() {
		return accountServ.findAll();
	}
	
	@PostMapping("/account")
	public ResponseEntity<AccountEntity> doSave(@RequestBody AccountEntity account) {
		return ResponseEntity.ok().body(accountServ.save(account));
	}
	
	@PutMapping("/account")
	public ResponseEntity<AccountEntity> doUpdate(@RequestBody AccountEntity account) {
		return ResponseEntity.ok().body(accountServ.update(account));
	}
	
	@DeleteMapping("/account")
	public ResponseEntity<String> doDelete(@RequestBody AccountEntity account) {
		accountServ.deleteById(account.getId());
		return ResponseEntity.ok("ok");
	}
	
}
