package com.lthd.cinema.model.dao;

import com.mongodb.BasicDBObject;
import com.mongodb.DBCollection;

public class SesstionTimesDAO {
	private final static DBCollection collection = MongoUtils.db.getCollection("Film"); 
	
	public static String getAttribute(String user_id, String[] ...attributes) {
		try {
			BasicDBObject query = new BasicDBObject()
					.append("base_user_info.user_id", user_id);
			BasicDBObject fields = new BasicDBObject()
					.append("_id", 0);
			
			if (attributes.length > 0)
				for(String att : attributes[0])
					fields.append(att, 1);
			
			return collection.findOne(query, fields).toString();
		}
		catch (Exception ex) {
			System.out.println(ex);
			return "null";
		}
	}
	
	public static void update(Object[] filmNames) {
		BasicDBObject fields = new BasicDBObject() 
				.append("list", filmNames);
		collection.insert(fields);
	}
}
