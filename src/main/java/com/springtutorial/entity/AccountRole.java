package com.springtutorial.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "[ACCOUNT_ROLE]")
public class AccountRole {

	@Id
	private String id;
	
	@ManyToOne
	@JoinColumn(name = "id_account")
	@JsonBackReference("account")
	private AccountEntity account;
	
	@ManyToOne
	@JoinColumn(name = "id_role")
	@JsonBackReference("role")
	private RoleEntity role;
	
	@Transient
	private String[] ids;
	
}
