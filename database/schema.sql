DROP TABLE IF EXISTS todos;

PRAGMA foreign_keys=OFF;

BEGIN TRANSACTION;

CREATE TABLE todos (
  task text NOT NULL
);

INSERT INTO todos VALUES('Greet world.');
INSERT INTO todos VALUES('echo');
INSERT INTO todos VALUES('Come up with original app idea.');

COMMIT;
