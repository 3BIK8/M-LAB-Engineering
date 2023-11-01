package com.engineering.mlab.controller;

import com.engineering.mlab.model.Solutions;
import com.engineering.mlab.service.SolutionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/mlab/engineering/solution")
public class SolutionsWebService {

    @Autowired
    private SolutionService solutionService;

    @GetMapping("code/{code}")
    public Solutions findByCode(@PathVariable String code) {
        return solutionService.findByCode(code);
    }

    @DeleteMapping("code/{code}")
    public int deleteByCode(@PathVariable String code) {
        return solutionService.deleteByCode(code);
    }

    @PostMapping("/")
    public Solutions save(Solutions solutions) {
        return solutionService.save(solutions);
    }

    @GetMapping("/")
    public List<Solutions> findAll() {
        return solutionService.findAll();
    }
}
