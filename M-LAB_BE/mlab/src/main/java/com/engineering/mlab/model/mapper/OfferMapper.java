package com.engineering.mlab.model.mapper;

import com.engineering.mlab.model.dto.OfferDTO;
import com.engineering.mlab.model.entity.Offer;
import org.mapstruct.Mapper;

@Mapper
public interface OfferMapper {

    Offer toEntity(OfferDTO offerDTO);
    OfferDTO toDTO(Offer offer);
}
