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
insert into movies(title,release_date) values
('The Dark Knight','2008-07-18'),
('The Dark Knight Rises', '2012-07-20'),
('Inception', '2010-07-16'),
('Interstellar', '2014-11-07'),
('Dunkirk', '2017-07-21'),
('Tenet', '2020-09-03'),
('Mank', '2020-09-03'),
('Oppenheimer', '2023-07-21'),
('Barbie', '2023-07-21'),
('The Menu', '2023-04-07');

create table reviews(
    review_id integer primary key auto_increment,
    movie_id integer,
    review varchar(255),
    rating integer,
    user_id integer,
    modified DATETIME default CURRENT_TIMESTAMP,
    foreign key (movie_id) references movies(movie_id),
    foreign key (user_id) references users(id)
);

create table shares(
    review_id integer,
    user_id integer,
    foreign key (review_id) references reviews(review_id) ON DELETE CASCADE,
    foreign key (user_id) references users(id)
);


