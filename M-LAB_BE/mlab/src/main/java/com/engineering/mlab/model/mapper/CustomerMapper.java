package com.engineering.mlab.model.mapper;

import com.engineering.mlab.model.dto.CustomerDTO;
import com.engineering.mlab.model.entity.Customer;
import org.mapstruct.Mapper;

@Mapper
public interface CustomerMapper {

    Customer toEntity(CustomerDTO customerDTO);
    CustomerDTO toDTO(Customer customer);
}
