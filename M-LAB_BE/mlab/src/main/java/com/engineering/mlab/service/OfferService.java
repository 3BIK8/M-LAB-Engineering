package com.engineering.mlab.service;

import com.engineering.mlab.model.dto.OfferDTO;

import java.util.List;

public interface OfferService {

    OfferDTO findByCode(String code);

    int deleteByCode(String code);

    OfferDTO save(OfferDTO offerDTO);

    List<OfferDTO> findAll();

}
