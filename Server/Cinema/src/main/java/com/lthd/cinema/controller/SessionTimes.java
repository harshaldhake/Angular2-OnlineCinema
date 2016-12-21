package com.lthd.cinema.controller;

import java.io.IOException;
import java.util.Map;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.lthd.cinema.model.BHDParser;
import com.lthd.cinema.model.CGVParser;
import com.lthd.cinema.model.FilmManager;
import com.lthd.cinema.model.FilmParser;
import com.lthd.cinema.model.GalaxyParser;
import com.lthd.cinema.model.dao.Film;
import com.lthd.cinema.model.dao.SesstionTimesDAO;

@Path("/Cinema")
public class SessionTimes {
	
	@Path("{cinema}")
	@GET
	@Produces(MediaType.APPLICATION_JSON + ";charset=utf-8")
	public String get(
			@PathParam("cinema") String cinema) throws IOException {
		FilmParser cgv = new CGVParser("https://www.cgv.vn/vn/movies/now-showing.html");
		((CGVParser)cgv).getListFilm();
		
		cgv.parse();
		
		String s = "";
		for(Film film : FilmManager.films){
			s += film.name + "\n" + film.img + "\n" + film.genere + "\n" + film.time + "\n" + film.release + "\n";
			for (String key : film.showTimes.keySet()) {
				s += key + "\n";
				for (String time : film.showTimes.get(key))
					s += time + " ";
				s += "\n";
			}
			s += "\n";
		}
		
		return s;
	}
}
