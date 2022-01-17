package com.springtutorial.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "[ACCOUNT]")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AccountEntity {

	@Id
	private String id;
	
	@Column(name = "[NAME]", columnDefinition = "nvarchar(64)")
	private String name;
	
	@Column(name = "[USERNAME]", columnDefinition = "varchar(255) not null unique")
	private String username;
	
	@Column(name = "[PASSWORD]", columnDefinition = "varchar(255) not null")
	private String password;
	
	@OneToMany(mappedBy = "account", fetch = FetchType.EAGER)
	@JsonManagedReference(value = "account")
	private List<AccountRole> accountRoleArr;
	
	
}
