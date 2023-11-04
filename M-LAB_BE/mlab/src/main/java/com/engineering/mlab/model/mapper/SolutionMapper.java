package com.engineering.mlab.model.mapper;

import com.engineering.mlab.model.dto.SolutionDTO;
import com.engineering.mlab.model.entity.Solution;
import org.mapstruct.Mapper;

@Mapper
public interface SolutionMapper {

    Solution toEntity(SolutionDTO solutionDTO);
    SolutionDTO toDTO(Solution solution);
}
