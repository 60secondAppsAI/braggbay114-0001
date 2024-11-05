package com.braggbay114.dao;

import java.util.List;

import com.braggbay114.dao.GenericDAO;
import com.braggbay114.domain.Review;





public interface ReviewDAO extends GenericDAO<Review, Integer> {
  
	List<Review> findAll();
	






}


