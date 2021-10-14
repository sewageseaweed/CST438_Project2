package com.groupO.project2.configurations;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@Configuration
@EnableMongoRepositories(basePackages = {"com.groupO.project2.repository.itemRepo"},
mongoTemplateRef = NewDb1Config.MONGO_TEMPLATE
)
public class NewDb1Config {
    protected static final String MONGO_TEMPLATE = "newdb1MongoTemplate";
}