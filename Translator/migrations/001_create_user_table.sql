-- "User" визначення

CREATE TABLE User (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    translator_access INTEGER DEFAULT 0,
    registration_access INTEGER DEFAULT 1,
    login_access INTEGER DEFAULT 1,
    password_creation_access INTEGER DEFAULT 1,
    translation_history_access INTEGER DEFAULT 0
);