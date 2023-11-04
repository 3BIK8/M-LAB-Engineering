package com.engineering.mlab.service;

import com.engineering.mlab.model.dto.SolutionDTO;

import java.util.List;

public interface SolutionService {

    SolutionDTO findByCode(String code);

    int deleteByCode(String code);

    SolutionDTO save(SolutionDTO solutionDTO);

    List<SolutionDTO> findAll();

}
