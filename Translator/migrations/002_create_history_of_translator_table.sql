-- "History of the translator" визначення

CREATE TABLE "History of the translator" (
    history_id INTEGER PRIMARY KEY AUTOINCREMENT,
    translator_id INTEGER,
    input_text TEXT,
    output_text TEXT,
    translation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (translator_id) REFERENCES Translator(translator_id)
);