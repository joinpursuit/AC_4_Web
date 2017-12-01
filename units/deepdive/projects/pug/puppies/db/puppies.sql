DROP DATABASE IF EXISTS puppies;
CREATE DATABASE puppies;

\c puppies;

CREATE TABLE pups (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  breed VARCHAR,
  age INTEGER,
  sex VARCHAR,
  imageURL VARCHAR
);

INSERT INTO pups (name, breed, age, sex, imageURL)
  VALUES ('Tyler', 'Retrieved', 3, 'M', 'http://www.petsworld.in/blog/wp-content/uploads/2015/03/How-To-Make-Your-Puppy-Gain-Weight.jpg');