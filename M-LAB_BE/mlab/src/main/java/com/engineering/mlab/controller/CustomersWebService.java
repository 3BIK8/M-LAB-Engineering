package com.engineering.mlab.controller;

import com.engineering.mlab.model.dto.CustomerDTO;
import com.engineering.mlab.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/mlab/engineering/customer")
public class CustomersWebService {

    @Autowired
    private CustomerService customerService;

    @GetMapping("code/{code}")
    public CustomerDTO findByCode(@PathVariable String code) {
        return customerService.findByCode(code);
    }

    @DeleteMapping("code/{code}")
    public int deleteByCode(@PathVariable String code) {
        return customerService.deleteByCode(code);
    }

    @PostMapping("/")
    public CustomerDTO save(CustomerDTO customerDTO) {
        return customerService.save(customerDTO);
    }

    @GetMapping("/")
    public List<CustomerDTO> findAll() {
        return customerService.findAll();
    }

}
