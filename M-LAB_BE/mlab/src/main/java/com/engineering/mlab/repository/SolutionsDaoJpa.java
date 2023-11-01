package com.engineering.mlab.repository;

import com.engineering.mlab.model.Solutions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SolutionsDaoJpa extends JpaRepository<Solutions,Long> {

    Solutions findByCode(String code);

    int deleteByCode(String code);

}
