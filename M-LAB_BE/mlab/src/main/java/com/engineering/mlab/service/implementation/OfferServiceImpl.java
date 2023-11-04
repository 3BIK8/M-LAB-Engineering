package com.engineering.mlab.service.implementation;

import com.engineering.mlab.model.entity.Offer;
import com.engineering.mlab.model.dto.OfferDTO;
import com.engineering.mlab.model.mapper.OfferMapper;
import com.engineering.mlab.repository.OffersDaoJpa;
import com.engineering.mlab.service.OfferService;
import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OfferServiceImpl implements OfferService {

    @Autowired
    private OffersDaoJpa offersDaoJpa;

    private final OfferMapper offerMapper = Mappers.getMapper(OfferMapper.class);

    @Override
    public OfferDTO findByCode(String code) {
        Offer offer = offersDaoJpa.findByCode(code);
        if (offer != null) {
            return offerMapper.toDTO(offer);
        } else {
            return null;
        }
    }

    @Override
    public int deleteByCode(String code) {
        return offersDaoJpa.deleteByCode(code);
    }

    @Override
    public OfferDTO save(OfferDTO offerDTO) {
        Offer offer = offerMapper.toEntity(offerDTO);
        return offerMapper.toDTO(offersDaoJpa.save(offer));
    }

    @Override
    public List<OfferDTO> findAll() {
        List<Offer> offers = offersDaoJpa.findAll();
        return offers.stream()
                .map(offerMapper::toDTO)
                .collect(Collectors.toList());
    }


}
