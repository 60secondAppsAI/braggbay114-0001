package com.braggbay114.dao;

import java.util.List;

import com.braggbay114.dao.GenericDAO;
import com.braggbay114.domain.CartItem;





public interface CartItemDAO extends GenericDAO<CartItem, Integer> {
  
	List<CartItem> findAll();
	






}


