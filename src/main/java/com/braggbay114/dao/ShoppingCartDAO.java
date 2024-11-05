package com.braggbay114.dao;

import java.util.List;

import com.braggbay114.dao.GenericDAO;
import com.braggbay114.domain.ShoppingCart;





public interface ShoppingCartDAO extends GenericDAO<ShoppingCart, Integer> {
  
	List<ShoppingCart> findAll();
	






}


