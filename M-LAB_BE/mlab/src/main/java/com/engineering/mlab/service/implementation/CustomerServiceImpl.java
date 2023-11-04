package com.engineering.mlab.service.implementation;

import com.engineering.mlab.model.dto.CustomerDTO;
import com.engineering.mlab.model.entity.Customer;
import com.engineering.mlab.model.mapper.CustomerMapper;
import com.engineering.mlab.repository.CustomersDaoJpa;
import com.engineering.mlab.service.CustomerService;
import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomersDaoJpa customersDaoJpa;

    private final CustomerMapper customerMapper = Mappers.getMapper(CustomerMapper.class);

    @Override
    public CustomerDTO findByCode(String code) {
        Customer customer = customersDaoJpa.findByCode(code);
        if (customer != null) {
            return customerMapper.toDTO(customer);
        } else {
            return null;
        }
    }

    @Override
    public int deleteByCode(String code) {
        return customersDaoJpa.deleteByCode(code);
    }

    @Override
    public CustomerDTO save(CustomerDTO customerDTO) {
        Customer customer = customerMapper.toEntity(customerDTO);
        return customerMapper.toDTO(customersDaoJpa.save(customer));
    }

    @Override
    public List<CustomerDTO> findAll() {
        List<Customer> customers = customersDaoJpa.findAll();
        return customers.stream()
                .map(customerMapper::toDTO)
                .collect(Collectors.toList());
    }


}
