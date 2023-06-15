create table post
(
    post_id      INT NOT NULL AUTO_INCREMENT,
    title        VARCHAR(255) NOT NULL,
    subtitle     VARCHAR(255) NOT NULL,
    img_modifier BLOB,
    author       VARCHAR(255) NOT NULL,
    author_img   BLOB,
    publish_date VARCHAR(255) NOT NULL,
    featured     TINYINT(1),
    most         TINYINT(1),
    PRIMARY KEY (post_id)
)   ENGINE = InnoDB
CHARACTER SET = utf8mb4
COLLATE utf8mb4_unicode_ci
;