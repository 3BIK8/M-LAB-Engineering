package com.engineering.mlab.repository;

import com.engineering.mlab.model.Customers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomersDaoJpa extends JpaRepository<Customers,Long> {

    Customers findByCode(String code);

    int deleteByCode(String code);

}
