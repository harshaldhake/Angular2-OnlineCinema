package com.lthd.cinema.model.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Film {
	public String name;
	public String genere;
	public String time;
	public String release;
	public String img;	
	public Map<String, List<String>> showTimes;
	
	public Film() {
		showTimes = new HashMap();
	}
}
