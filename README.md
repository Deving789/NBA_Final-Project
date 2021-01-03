# NBA_Final-Project

## Project Goal

Our goal is to determine if there is any correlation between with our features(SHOT_DIST,CLOSE_DEF_DIST,Height(CD)..)selected and if the player is successful or not making the basket(SHOT_RESULT). If there is a correlation we would like to see what other features from different data not in our current set have a strong correlation to the shot_result output such as advanced player metrics. We selected this topic because we want to see what the potenial outcomes are based on the data we have chosen. Furthermore, we feel that based on this data we can predict how certain players will perform by the spacing they create from the nearest defender.


## Questions we want to answer
- Is there strong correlations between defender height and a shot being missed?

- Is there a strong correlation of a player making a basket if the closest defender is more than 6 feet away from the shooter?

- Does being on the home team give star players a better shooting percentage?

- Do we need to add more data to get a high accuracy score when using a machine learning model?

## Group communication protocols

- Throughout this project the group has constantly made contact through the slack app. 
- This includes sharing information that we find online, code & arranging meetings at least once a week.

## Exploratory Data 

For the data portion of this project we used SQL, R & Python. The main library we used with python was pandas to import, clean and merge the data. With our merged data we are able to search for correlations to see what features had an impact on the shot result column. 


## Data Analysis

There is no real correlation between defender height and a shot being made. What we can find is there seems to be a good coorelation between being the home team and having a higher shooting percentage.


## Resampling method -- first try with merged data sets shots_log and player_stats
<img width="1320" alt="Initial resampling" src="https://user-images.githubusercontent.com/67278193/102673006-77f2d180-4160-11eb-87ce-c05a6edf0bbf.png">

## Project dashboard

Our project dashboard will be an HTML file that will show us will allow the end user to search a player by name so they can see every shot visualized on the half-court that the chosen player has. The HTML file will also show pictures of the analysis and machine learning portion that we did.


## Resources

Dataset that with 2014-15 NBA shot log data and player stats. 

Data Source: [Kaggle](https://www.kaggle.com/drgilermo/nba-players-stats-20142015)

- [shot_logs.csv](https://github.com/Deving789/NBA_Final-Project/blob/main/shot_logs.csv)

- [players_stats.csv](https://github.com/Deving789/NBA_Final-Project/blob/main/players_stats.csv)

- [nba_team_advanced_stats.csv](https://github.com/Deving789/NBA_Final-Project/blob/main/nba_team_advanced_stats.csv)

----------
## Team Responsibilties

**Devin** - leader

**Brian** - contributor (circle)

**Larysa** - contributor (triangle)

