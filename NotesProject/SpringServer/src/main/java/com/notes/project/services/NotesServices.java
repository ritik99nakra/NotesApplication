package com.notes.project.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.notes.project.models.Notes;
import com.notes.project.models.repository.NotesRepository;

@Service
public class NotesServices {

	@Autowired
	private NotesRepository notesRepository;
	
	public Notes add(Notes notes) {
		return notesRepository.save(notes);
	}

}
