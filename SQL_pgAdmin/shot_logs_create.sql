CREATE TABLE shot_logs (
	GAME_ID INT,
	MATCHUP VARCHAR (60),
	LOCATION VARCHAR,
	W VARCHAR (1),
	FINAL_MARGIN INT,
	SHOT_NUMBER INT,
	PERIOD INT,
	GAME_CLOCK TIME,
	SHOT_CLOCK REAL,
	DRIBBLES INT,
	TOUCH_TIME REAL,
	SHOT_DIST REAL,
	PTS_TYPE INT,
	SHOT_RESULT VARCHAR (10),
	CLOSEST_DEFENDER VARCHAR (60),
	CLOSEST_DEFENDER_PLAYER_ID INT,
	CLOSE_DEF_DIST REAL,
	FGM INT,
	PTS INT,
	player_name VARCHAR (60),
	player_id INT,
);
