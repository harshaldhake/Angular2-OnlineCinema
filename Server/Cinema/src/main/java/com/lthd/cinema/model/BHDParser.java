package com.lthd.cinema.model;

import java.io.IOException;

import com.squareup.okhttp.FormEncodingBuilder;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.RequestBody;
import com.squareup.okhttp.Response;

public class BHDParser extends FilmParser{
	public BHDParser(String url) {
        super();
        this.url = url;
    }

    @Override
    public void parse() throws IOException {
    	OkHttpClient client = new OkHttpClient();
    	RequestBody body = new FormEncodingBuilder()
                .add("cinemaId", "1")
                .build();
    	Request request = new Request.Builder()
	      .url("https://www.galaxycine.vn/ajax/navQuickBooking/film")
	      .post(body)
	      .build();

		Response response = client.newCall(request).execute();
		System.out.println("ok\n");
		System.out.println(response.body().string());
    }
}
