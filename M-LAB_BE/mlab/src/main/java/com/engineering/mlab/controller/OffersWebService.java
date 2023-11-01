package com.engineering.mlab.controller;

import com.engineering.mlab.model.Offers;
import com.engineering.mlab.service.OfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/mlab/engineering/offer")
public class OffersWebService {

    @Autowired
    private OfferService offerService;

    @GetMapping("code/{code}")
    public Offers findByCode(@PathVariable String code) {
        return offerService.findByCode(code);
    }

    @DeleteMapping("code/{code}")
    public int deleteByCode(@PathVariable String code) {
        return offerService.deleteByCode(code);
    }

    @PostMapping("/")
    public Offers save(Offers offers) {
        return offerService.save(offers);
    }

    @GetMapping("/")
    public List<Offers> findAll() {
        return offerService.findAll();
    }
}
