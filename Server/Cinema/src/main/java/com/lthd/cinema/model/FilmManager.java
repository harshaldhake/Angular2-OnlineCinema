package com.lthd.cinema.model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.lthd.cinema.model.dao.Film;
import com.lthd.cinema.model.dao.SlideShow;

public class FilmManager {
	public static List<Film> films = new ArrayList();
	public static Map<String, List<SlideShow>> slideShows = new HashMap();
	
	public static void clearShowTime() {
		for (Film film : films)
			film.showTimes.clear();
	}
}
