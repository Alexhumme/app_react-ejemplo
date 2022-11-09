USE task-db;
CREATE TABLE `tasks`(
    "id" int(12) PRIMARY KEY NOT NULL,
    "title" varchar(200) NOT NULL,
    "content" varchar("255") NOT NULL,
    "img" varchar("200"),
    "done" boolean(true)
)