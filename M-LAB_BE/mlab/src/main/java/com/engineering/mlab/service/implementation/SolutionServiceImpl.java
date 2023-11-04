package com.engineering.mlab.service.implementation;

import com.engineering.mlab.model.dto.SolutionDTO;
import com.engineering.mlab.model.entity.Solution;
import com.engineering.mlab.model.mapper.SolutionMapper;
import com.engineering.mlab.repository.SolutionsDaoJpa;
import com.engineering.mlab.service.SolutionService;
import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SolutionServiceImpl implements SolutionService {

    @Autowired
    private SolutionsDaoJpa solutionsDaoJpa;

    private final SolutionMapper solutionMapper = Mappers.getMapper(SolutionMapper.class);

    @Override
    public SolutionDTO findByCode(String code) {
        Solution solution = solutionsDaoJpa.findByCode(code);
        if (solution != null) {
            return solutionMapper.toDTO(solution);
        } else {
            return null;
        }
    }

    @Override
    public int deleteByCode(String code) {
        return solutionsDaoJpa.deleteByCode(code);
    }

    @Override
    public SolutionDTO save(SolutionDTO solutionDTO) {
        Solution solution = solutionMapper.toEntity(solutionDTO);
        return solutionMapper.toDTO(solutionsDaoJpa.save(solution));
    }

    @Override
    public List<SolutionDTO> findAll() {
        List<Solution> solutions = solutionsDaoJpa.findAll();
        return solutions.stream()
                .map(solutionMapper::toDTO)
                .collect(Collectors.toList());
    }

}
