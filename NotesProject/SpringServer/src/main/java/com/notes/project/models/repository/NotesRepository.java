package com.notes.project.models.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.notes.project.models.Notes;

@Repository
public interface NotesRepository extends JpaRepository<Notes, Integer>{
	
	@Query(value = "select n from Notes n where n.uid = :uid")
	public List<Notes> getAllNotes(@Param("uid") Integer uid);
	

}
