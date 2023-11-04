package com.engineering.mlab.repository;

import com.engineering.mlab.model.entity.Solution;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SolutionsDaoJpa extends JpaRepository<Solution,Long> {

    Solution findByCode(String code);

    int deleteByCode(String code);

}
