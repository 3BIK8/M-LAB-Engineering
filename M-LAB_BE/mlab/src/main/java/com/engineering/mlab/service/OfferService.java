package com.engineering.mlab.service;

import com.engineering.mlab.model.Offers;

import java.util.List;

public interface OfferService {

    Offers findByCode(String code);

    int deleteByCode(String code);

    Offers save(Offers offers);

    List<Offers> findAll();

}
