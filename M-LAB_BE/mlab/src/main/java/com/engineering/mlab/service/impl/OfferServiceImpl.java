package com.engineering.mlab.service.impl;

import com.engineering.mlab.model.Offers;
import com.engineering.mlab.repository.OffersDaoJpa;
import com.engineering.mlab.service.OfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OfferServiceImpl implements OfferService {

    @Autowired
    private OffersDaoJpa offersDaoJpa;

    public Offers findByCode(String code) {
        return offersDaoJpa.findByCode(code);
    }

    public int deleteByCode(String code) {
        return offersDaoJpa.deleteByCode(code);
    }

    @Override
    public Offers save(Offers offers) {
        return offersDaoJpa.save(offers);
    }

    @Override
    public List<Offers> findAll() {
        return offersDaoJpa.findAll();
    }


}
