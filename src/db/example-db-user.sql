CREATE USER 'student1'@'localhost' IDENTIFIED BY 'healthnut';
GRANT ALL PRIVILEGES ON `HealthDiary`.* TO 'student1'@'localhost';
FLUSH PRIVILEGES;
