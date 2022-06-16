package com.notes.project.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.notes.project.models.Notes;
import com.notes.project.models.repository.NotesRepository;
import com.notes.project.services.NotesServices;

@RestController
@CrossOrigin
@RequestMapping("/")
public class NotesController {

	@Autowired
	private NotesRepository notesRepository;
	
	@Autowired
	private NotesServices notesServices;
	
	@GetMapping("/notes/{id}")
	public List<Notes> getAll(@PathVariable Integer id){
		return notesRepository.getAllNotes(id);
	}
	
	@PostMapping("/add/{id}")
	@ResponseBody
	public Notes add(@RequestBody Notes notes,@PathVariable Integer id) {
		notes.setUid(id);
		return notesServices.add(notes);
	 
	}
	
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable Integer id) {
		notesRepository.deleteById(id);
	}
	
	@PutMapping("/notes/{id}")
	public void updateUser(@PathVariable int id,@RequestBody Notes notes){
		Notes n = notesRepository.findById(id).get();
		
		if(notes.getTitle()!=null)
			n.setTitle(notes.getTitle());
		if(notes.getContent()!= null)
			n.setContent(notes.getContent());
		if(notes.getDate()!=null)
			n.setDate(notes.getDate());
				
		notesRepository.save(n);
	}
	
	
}
