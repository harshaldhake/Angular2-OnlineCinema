package com.lthd.cinema.model;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.json.*;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;

import com.lthd.cinema.model.dao.Film;

public class CGVParser extends FilmParser{
	public CGVParser(String url) {
        super();
        this.url = url;
    }

    @Override
    public void parse() throws IOException {
    	Document doc = Jsoup.connect("https://www.cgv.vn/vn/theaters/showtimes/index/city/vn-08/name").get();
        Elements elements = doc.select("ul[class=theatre-tabs]").get(3).children();
        
        for (int i = 1; i < elements.size(); i++) {
        	String dataShowTimes = elements.get(i).child(0).attr("onclick");
            dataShowTimes = dataShowTimes.substring(dataShowTimes.indexOf("https"), dataShowTimes.lastIndexOf("'")).replaceFirst("','", "?form_key=");
            String cine = elements.get(i).child(0).text();
            
            URL _url = new URL(dataShowTimes);
            URLConnection urlconnection = _url.openConnection();
            BufferedReader in = new BufferedReader(new InputStreamReader(urlconnection.getInputStream(), "UTF-8"));
            String inputLine;
            StringBuilder sb = new StringBuilder();
            while ((inputLine = in.readLine()) != null)
            	sb.append(inputLine);
            in.close();
            
            Map<String, String> showtime = new HashMap<String, String>();
        	JSONObject obj = new JSONObject(sb.toString());
        	JSONObject data = obj.getJSONObject("data");
        	Iterator<String> date = data.keySet().iterator();
        	while (date.hasNext()) {
        		String d = date.next();
        		System.out.println(d);
        		try {
        			JSONObject dateObj = data.getJSONObject(d);
            		Iterator<String> films = dateObj.keySet().iterator();
            		while (films.hasNext()){
            			String f = films.next();
                		System.out.println(f);
            			JSONObject filmObj = dateObj.getJSONObject(f);
            			filmObj = filmObj.getJSONObject(filmObj.keySet().iterator().next());
            			
            			JSONObject movie = filmObj.getJSONObject("movie");
            			Film film = null;
            			String filmName = movie.getString("name");
                		for (int j = 0; j < FilmManager.films.size(); j++)
                			if (FilmManager.films.get(j).name.equals(filmName)) {
                				film = FilmManager.films.get(j);
                				break;
                			}
                		if (film == null) 
                			continue;
                		 
                		JSONObject session = filmObj.getJSONObject("session");
                		session = session.getJSONObject(session.keySet().iterator().next());
                		List<String> times = new ArrayList();
                		Iterator<String> st = session.keySet().iterator();
                		while (st.hasNext()) {
                			String time = st.next();
                			times.add(session.getJSONObject(time).getString("time"));
                		}
                			//times.add(String.valueOf(Long.valueOf(time)*1000 - 7*60*60*1000));
                		film.showTimes.put(cine, times);
            		}
        		}
        		catch (Exception ex) {
        			System.out.println(ex);
        		}
        	}
        }
    }
    
    public void getListFilm() throws IOException {
    	FilmManager.films.clear();
    	Document doc = Jsoup.connect(url).get();
        Elements elements = doc.select("ul[class=products-grid products-grid--max-4-col]").get(0).children();
       
        for (int i = 0; i < elements.size(); i++) {
        	Film film = new Film();
        	try{
        		if (elements.get(i).select("h2[class=product-name]").size() > 0)
        			film.name = elements.get(i).select("h2[class=product-name]").get(0).child(0).attr("title");
        		if (elements.get(i).select("a[class=product-image]").size() > 0)
	        		film.img = elements.get(i).select("a[class=product-image]").get(0).child(0).attr("src");
        		if (elements.get(i).select("div[class=movie-genre]").size() > 0)
		        	film.genere = elements.get(i).select("div[class=movie-genre]").get(0).child(1).text();  
		        if (elements.get(i).select("div[class=movie-actress]").size() > 0)
		        	film.time = elements.get(i).select("div[class=movie-actress]").get(0).child(1).text(); 
		        if (elements.get(i).select("div[class=movie-release]").size() > 0)
		        	film.release = elements.get(i).select("div[class=movie-release]").get(0).child(1).text(); 
        	}
        	catch (Exception ex) {
        		System.out.println(ex);
        	}
	        
        	FilmManager.films.add(film);
        }
    	
    }
}
