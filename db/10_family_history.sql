CREATE TABLE person (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
);

CREATE TABLE parent_child (
    id SERIAL PRIMARY KEY,
    parent_id INTEGER REFERENCES person(id) NOT NULL,
    child_id INTEGER REFERENCES person(id) NOT NULL
);