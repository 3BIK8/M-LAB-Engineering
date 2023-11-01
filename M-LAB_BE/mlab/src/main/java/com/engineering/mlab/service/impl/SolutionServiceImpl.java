package com.engineering.mlab.service.impl;

import com.engineering.mlab.model.Solutions;
import com.engineering.mlab.repository.SolutionsDaoJpa;
import com.engineering.mlab.service.SolutionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SolutionServiceImpl implements SolutionService {

    @Autowired
    private SolutionsDaoJpa solutionsDaoJpa;

    @Override
    public Solutions findByCode(String code) {
        return solutionsDaoJpa.findByCode(code);
    }

    @Override
    public int deleteByCode(String code) {
        return solutionsDaoJpa.deleteByCode(code);
    }

    @Override
    public Solutions save(Solutions solutions) {
        return solutionsDaoJpa.save(solutions);
    }

    @Override
    public List<Solutions> findAll() {
        return solutionsDaoJpa.findAll();
    }

}
