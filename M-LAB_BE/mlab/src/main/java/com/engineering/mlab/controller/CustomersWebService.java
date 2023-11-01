package com.engineering.mlab.controller;

import com.engineering.mlab.model.Customers;
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
    public Customers findByCode(@PathVariable String code) {
        return customerService.findByCode(code);
    }

    @DeleteMapping("code/{code}")
    public int deleteByCode(@PathVariable String code) {
        return customerService.deleteByCode(code);
    }

    @PostMapping("/")
    public Customers save(Customers customers) {
        return customerService.save(customers);
    }

    @GetMapping("/")
    public List<Customers> findAll() {
        return customerService.findAll();
    }

}
