package com.engineering.mlab.service;

import com.engineering.mlab.model.Solutions;

import java.util.List;

public interface SolutionService {

    Solutions findByCode(String code);

    int deleteByCode(String code);

    Solutions save(Solutions solutions);

    List<Solutions> findAll();

}
