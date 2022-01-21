package com.springtutorial.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "[ROLE]")
public class RoleEntity {

	@Transient
	private String[] ids;
	
	@Id
	private String id;
	
	@Column(name = "[NAME]", columnDefinition = "nvarchar(64)")
	private String name;
	
	@Column(name = "[CODE]", columnDefinition = "varchar(64) not null unique")
	private String code;
	
	@OneToMany(mappedBy = "role")
	@JsonManagedReference(value = "role")
	private List<AccountRole> accountRoleArr;
}
