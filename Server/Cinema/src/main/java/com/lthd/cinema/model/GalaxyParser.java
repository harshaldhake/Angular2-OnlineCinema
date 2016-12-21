package com.lthd.cinema.model;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;

import com.squareup.okhttp.FormEncodingBuilder;
import com.squareup.okhttp.Headers;
import com.squareup.okhttp.MediaType;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.RequestBody;
import com.squareup.okhttp.Response;

import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by TuNam1995 on 19/05/2016.
 */
public class GalaxyParser extends FilmParser{

    public GalaxyParser(String url) {
        super();
        this.url = url;
    }

    @Override
    public void parse() throws IOException {
       /* Document doc = Jsoup.connect(url).get();
        Elements elements = doc.select("li[class=col-4]");

        for (int i = 0; i < elements.size(); i++) {
        	String srcImageFilm = elements.get(i).child(0).child(0).attr("src");
        	
	        if (srcImageFilm.contains(" "))
	            srcImageFilm = srcImageFilm.replaceAll(" ", "%20");

	        filmImages.add(srcImageFilm);
	        filmNames.add(elements.get(i).child(0).attr("title"));
	        
	        String urlShowTimes = elements.get(i).child(0).attr("href");

	        Document doc2 = Jsoup.connect(urlShowTimes).get();
	        Elements elements2 = doc2.select("strong").get(0).parent().parent().children();
	        
	        String info = "";
            for (int j = 0; j < elements2.size(); j++)
                if (elements2.get(j).nodeName().equals("p"))
                    info += elements2.get(j).text() + "\n";

            filmInfos.add(info);
	        
	        Elements titles = doc2.select("h2[class=silver-title]");
            Elements content = doc2.select("div[class=silver-content]");
            Map<String, String> showtime = new HashMap<String, String>();
            for (int j = 0; j < titles.size(); j++) {
            	if (titles.get(j).text().equals("Galaxy Bến Tre") 
    	        		|| titles.get(j).text().equals("Galaxy Đà Nẵng") 
    	        		|| titles.get(j).text().equals("Galaxy Mipec Long Biên"))
    	        	continue;
            	String time = "";
                for (int k = 0; k < content.get(j).children().size(); k++) {
                    time += content.get(j).child(k).child(0).text() + "\n";
                    time += content.get(j).child(k).child(1).text() + "\n";
                }
                showtime.put(titles.get(j).text(), time);
            }
            showtimes.add(showtime);
        }*/
    }
}
