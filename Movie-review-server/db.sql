create database movie_db;
       use movie_db;

create table users(
    id integer primary key auto_increment,
    first_name varchar(50),
    last_name varchar(50),
    email varchar(50),
    password varchar(200),
    mobile varchar(15),
    dob DATE
);

create table movies(
    movie_id integer primary key auto_increment,
    title varchar(50),
    release_date DATE
);

create table reviews(
    review_id integer primary key auto_increment,
    movie_id integer,
    review varchar(255),
    rating integer,
    user_id integer,
    modified DATE default CURRENT_TIMESTAMP,
    foreign key (movie_id) references movies(movie_id),
    foreign key (user_id) references users(id)
);

create table shares(
    review_id integer,
    user_id integer,
    foreign key (review_id) references reviews(review_id),
    foreign key (user_id) references users(id)
);


