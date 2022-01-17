package com.springtutorial.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;

import com.springtutorial.model.AccountRoleCustom;
import com.springtutorial.service.IAccountRoleServ;

@RestController
@RequestMapping("/api")
public class AccountRoleApi {

	@Autowired
	private IAccountRoleServ accountRoleServ;
	
	@PostMapping(value = "/account-role")
	public ResponseEntity<String> doAddRolesToAddcount(@RequestPart("account-role") AccountRoleCustom accountRole) {
		accountRoleServ.editRoleToAccount(accountRole.getIdAccount(), accountRole.getRoles());
		return ResponseEntity.ok().body(accountRole.toString());
	}
	
}
