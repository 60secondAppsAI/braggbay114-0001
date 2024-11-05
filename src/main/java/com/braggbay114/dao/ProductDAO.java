package com.braggbay114.dao;

import java.util.List;

import com.braggbay114.dao.GenericDAO;
import com.braggbay114.domain.Product;





public interface ProductDAO extends GenericDAO<Product, Integer> {
  
	List<Product> findAll();
	






}


