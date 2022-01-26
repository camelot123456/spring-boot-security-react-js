package com.springtutorial.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PaginationCustom {

	private long totalElement;
	private int totalPage;
	private String field;
	private String dir;
	private int currentPage;
	private int sizePage;
	private String keyword;
}
