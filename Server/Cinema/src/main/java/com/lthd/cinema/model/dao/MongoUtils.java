package com.lthd.cinema.model.dao;

import com.mongodb.DB;
import com.mongodb.MongoClient;

public class MongoUtils {
	private final static String HOST = "localhost";
	private final static int PORT = 27017;
	private final static String DB_NAME = "Cinema";

	public static DB db = new MongoClient(HOST, PORT).getDB(DB_NAME); 
}
