package com.braggbay114.dao;

import java.util.List;

import com.braggbay114.dao.GenericDAO;
import com.braggbay114.domain.ProductCategory;





public interface ProductCategoryDAO extends GenericDAO<ProductCategory, Integer> {
  
	List<ProductCategory> findAll();
	






}


