CREATE TABLE nba_historical_14_15 (
	"Game ID" INT,
	"Game Event ID" INT,
	"Player ID" INT,
	"Player Name" VARCHAR (60),
	"Team ID" INT,
	"Team Name" VARCHAR (60),
	"Period" INT, 
	"Minutes Remaining" INT,
	"Seconds Remaining" INT,
	"Action Type" VARCHAR,
	"Shot Type" VARCHAR,
	"Shot Zone Basic" VARCHAR,
	"Shot Zone Area" VARCHAR,
	"Shot Zone Range" VARCHAR,
	"Shot Distance" INT,
	"X Location" INT,
	"Y Location" INT,
	"Shot Made Flag" INT,
	"Game Date" INT, --keep as int for ease of grouping by seasons
	"Home Team" VARCHAR,
	"Away Team" VARCHAR,
	"Season Type" VARCHAR
	--PRIMARY KEY ("Player ID")
);