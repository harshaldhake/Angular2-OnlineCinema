package com.lthd.cinema.controller;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;

@Path("/SlideShow")
public class SlideShowController {
	
	@Path("{cinema}")
	@GET
	@Produces(MediaType.APPLICATION_JSON + ";charset=utf-8")
	public String get(@PathParam("cinema") String cinema) {
		Document doc = Jsoup.connect("https://www.cgv.vn/vn/").get();
        Elements elements = doc.select("ul[class=slideshow]").get(0).children();
       
        for (int i = 0; i < elements.size(); i++) {
		
	
	}
}
