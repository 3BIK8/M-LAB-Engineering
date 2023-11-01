package com.engineering.mlab.service;

import com.engineering.mlab.model.Customers;

import java.util.List;

public interface CustomerService {

    Customers findByCode(String code);

    int deleteByCode(String code);

    Customers save(Customers customers);

    List<Customers> findAll();

}
