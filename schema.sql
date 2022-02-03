CREATE DATABASE hosting_companies;

USE hosting_companies;

CREATE TABLE companies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    company VARCHAR(45)
);

CREATE TABLE servers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    server VARCHAR(45),
	ip VARCHAR(45),
	company_id INT,
	status BOOLEAN DEFAULT 0,
	date DATETIME DEFAULT NOW(),
	FOREIGN KEY (company_id) REFERENCES companies(id)
);

INSERT INTO companies (company)
VALUES ("Microsoft"), ("IBM"), ("GoDaddy"), ("DigitalO");

INSERT INTO servers (server, ip, company_id, status)
VALUES
("Server A", "106.219.83.239", 1, 0),
("Server B", "123.57.219.171", 2, 1),
("Server C", "126.36.96.223", 3, 0),
("Server D", "230.204.71.199", 4, 1);