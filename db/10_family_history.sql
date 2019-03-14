DROP TABLE IF EXISTS parent_child, person;

CREATE TABLE person (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    birth_date DATE
);

CREATE TABLE parent_child (
    id SERIAL PRIMARY KEY,
    parent_id INTEGER REFERENCES person(id) NOT NULL,
    child_id INTEGER REFERENCES person(id) NOT NULL
);

INSERT INTO person (first_name, last_name, birth_date) VALUES (
    'Nellie',
    'Nicholes',
    11-12-1993
), (
    'Scott',
    'Nicholes',
    09-08-1993
), (
    'Echo',
    'Nicholes',
    13-01-2019
);

INSERT INTO parent_child (parent_id, child_id) VALUES (
    1,
    1
), (
    2,
    1
);