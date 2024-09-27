SELECT * FROM freedb_Ada_Moon_Wedding.Event;
CREATE TABLE guests(
idGuest int primary KEY auto_increment,
NAME VARCHAR (45) NOT NULL
);

SELECT * FROM Event;
SELECT * FROM guests;
SELECT guests.name, Event.date
FROM Event INNER JOIN guests
ON  idGuest = fkGuest;

ALTER TABLE Event ADD COLUMN fkGuest int;

ALTER TABLE Event ADD FOREIGN KEY (fkGuest) references guests (idGuest);

ALTER TABLE guests DROP COLUMN fkGuest;
ALTER TABLE Event DROP COLUMN guestName;