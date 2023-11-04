package com.engineering.mlab.repository;

import com.engineering.mlab.model.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomersDaoJpa extends JpaRepository<Customer,Long> {

    Customer findByCode(String code);

    int deleteByCode(String code);

}
