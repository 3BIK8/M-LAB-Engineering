package com.engineering.mlab.service;

import com.engineering.mlab.model.dto.CustomerDTO;

import java.util.List;

public interface CustomerService {

    CustomerDTO findByCode(String code);

    int deleteByCode(String code);

    CustomerDTO save(CustomerDTO customerDTO);

    List<CustomerDTO> findAll();

}
