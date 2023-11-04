package com.engineering.mlab.repository;

import com.engineering.mlab.model.entity.Offer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OffersDaoJpa extends JpaRepository<Offer,Long> {

    Offer findByCode(String code);

    int deleteByCode(String code);

}
