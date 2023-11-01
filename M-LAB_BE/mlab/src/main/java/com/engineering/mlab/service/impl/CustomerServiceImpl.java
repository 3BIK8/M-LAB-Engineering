package com.engineering.mlab.service.impl;

import com.engineering.mlab.model.Customers;
import com.engineering.mlab.repository.CustomersDaoJpa;
import com.engineering.mlab.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomersDaoJpa customersDaoJpa;

    @Override
    public Customers findByCode(String code) {
        return customersDaoJpa.findByCode(code);
    }

    @Override
    public int deleteByCode(String code) {
        return customersDaoJpa.deleteByCode(code);
    }

    @Override
    public Customers save(Customers customers) {
        return customersDaoJpa.save(customers);
    }

    @Override
    public List<Customers> findAll() {
        return customersDaoJpa.findAll();
    }


}
