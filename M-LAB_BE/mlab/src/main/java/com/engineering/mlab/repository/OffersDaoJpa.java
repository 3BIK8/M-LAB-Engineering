package com.engineering.mlab.repository;

import com.engineering.mlab.model.Offers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OffersDaoJpa extends JpaRepository<Offers,Long> {

    Offers findByCode(String code);

    int deleteByCode(String code);

}
