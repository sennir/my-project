Last login: Tue Feb  6 11:27:29 on ttys002
(base) sennirikassaari@Senni-MacBook-Pro-2 ~ % sqlite3 HealthDiary.db
SQLite version 3.45.1 2024-01-30 16:01:20
Enter ".help" for usage hints.
sqlite> CREATE TABLE DiaryEntries (
    entry_id INTEGER PRIMARY KEY,
    user_id INTEGER,
    entry_date DATE,
    mood TEXT,
    weight REAL,
    sleep_hours INTEGER,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
sqlite> .schema DiaryEntries
CREATE TABLE DiaryEntries (
    entry_id INTEGER PRIMARY KEY,
    user_id INTEGER,
    entry_date DATE,
    mood TEXT,
    weight REAL,
    sleep_hours INTEGER,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
sqlite> SELECT * FROM DiaryEntries LIMIT 10;
sqlite> INSERT INTO DiaryEntries (user_id, entry_date, mood, weight, sleep_hours, notes)
VALUES (1, '2024-01-01', 'Happy', 70.5, 8, 'Had a great day');
sqlite> SELECT * FROM DiaryEntries LIMIT 10;
1|1|2024-01-01|Happy|70.5|8|Had a great day|2024-02-06 10:14:07
sqlite> INSERT INTO DiaryEntries (user_id, entry_date, mood, weight, sleep_hours, notes, created_at) VALUES
  (1, '2024-01-10', 'Happy', 70.5, 8, 'Had a great day, felt energetic', '2024-01-10 20:00:00'),
  (1, '2024-01-11', 'Tired', 70.2, 6, 'Long day at work, need rest', '2024-01-11 20:00:00'),
  (2, '2024-01-10', 'Stressed', 65.0, 7, 'Busy day, a bit stressed out', '2024-01-10 21:00:00');
sqlite> SELECT * FROM DiaryEntries LIMIT 10;
1|1|2024-01-01|Happy|70.5|8|Had a great day|2024-02-06 10:14:07
2|1|2024-01-10|Happy|70.5|8|Had a great day, felt energetic|2024-01-10 20:00:00
3|1|2024-01-11|Tired|70.2|6|Long day at work, need rest|2024-01-11 20:00:00
4|2|2024-01-10|Stressed|65.0|7|Busy day, a bit stressed out|2024-01-10 21:00:00
sqlite> SELECT [ALL | DISTINCT] column1[, column2]
FROM table1[, table2]
[WHERE conditions]
[GROUP BY column-list]
[HAVING conditions]
[ORDER BY column-list [ASC | DESC]]
[LIMIT number];
Parse error: near "[, column2]": syntax error
  SELECT [ALL | DISTINCT] column1[, column2] FROM table1[, table2] [WHERE condit
                   error here ---^
sqlite> -- Create Users table
CREATE TABLE Users (
    user_id INTEGER PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Nutrition table
CREATE TABLE Nutrition (
    nutrition_id INTEGER PRIMARY KEY,
    user_id INTEGER,
    date DATE NOT NULL,
    meal_type VARCHAR(50),
    food_item VARCHAR(100),
    calories DECIMAL(8,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);
sqlite> -- Inserting mock data into Users table
INSERT INTO Users (username, password, email) VALUES
    ('user1', 'password1', 'user1@example.com'),
    ('user2', 'password2', 'user2@example.com');

-- Inserting mock data into Nutrition table
INSERT INTO Nutrition (user_id, date, meal_type, food_item, calories) VALUES
    (1, '2024-01-10', 'Breakfast', 'Oatmeal', 300),
    (1, '2024-01-10', 'Lunch', 'Grilled Chicken Salad', 500),
    (2, '2024-01-10', 'Breakfast', 'Avocado Toast', 400),
    (2, '2024-01-10', 'Lunch', 'Quinoa Bowl', 450);
sqlite> UPDATE Nutrition SET calories = 350 WHERE nutrition_id = 1;
sqlite> DELETE FROM Nutrition WHERE nutrition_id = 2;
sqlite> SELECT * FROM Nutrition WHERE user_id = 1 AND date = '2024-01-10';
1|1|2024-01-10|Breakfast|Oatmeal|350|2024-02-06 10:20:10
sqlite>
