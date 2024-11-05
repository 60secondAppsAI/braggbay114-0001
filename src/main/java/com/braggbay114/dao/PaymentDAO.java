package com.braggbay114.dao;

import java.util.List;

import com.braggbay114.dao.GenericDAO;
import com.braggbay114.domain.Payment;





public interface PaymentDAO extends GenericDAO<Payment, Integer> {
  
	List<Payment> findAll();
	






}


