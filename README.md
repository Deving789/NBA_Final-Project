# NBA_Final-Project

## Project Goal

Our goal is to determine if there is any correlation between our features(SHOT_DIST,CLOSE_DEF_DIST,Height(CD)..) selected and if the player is successful or in not making the basket(SHOT_RESULT). If there is a correlation, we would like to see what other features from different data not in our current set have a strong correlation to the shot_result output such as advanced player metrics. We selected this topic because we want to see what the potential outcomes are based on the data we have chosen. Furthermore, we feel that based on this data we can predict how certain players will perform by the spacing they create from the nearest defender.

-----------------------------

## Questions we want to answer
- Is there strong correlations between defender height and a shot being missed?
- Is there a strong correlation for a player making a basket if the closest defender is more than 6 feet away from the shooter?
- Is there a connection between being on the home team for star players to have a better shooting percentage?
- Do we need to add more data to get a high accuracy score when using a machine learning model?

---------------------------

## Group communication protocols

- Throughout this project the group has constantly made contact through the slack app. 
- This includes sharing information that we find online, code & arranging meetings at least once a week.

[Team's checklist/tracker](https://docs.google.com/spreadsheets/d/16IAsTHPIFMQN9qWJECUgzDWPtO0-ripUfGFg-LowBZY/edit#gid=1386834576&fvid=406798157) 

**Team Responsibilties**\
***Devin*** - project leader\
***Brian*** - contributor (circle)\
***Larysa*** - contributor (triangle)

--------------------------

## Getting started

We began the project by importing the shots_log.csv and the players_stats.csv into our jupyter notebook(project_x). We noticed that the MATCHUP column had data that would be tough to sort because it was not in the correct format. In order to change this we used to methods to clean up the column .str.split and .to_datetime. Once the data was in the correct format we were able to complete our first merge between the two csv's.

<img width="1365" alt="Screen Shot 2021-01-19 at 9 48 12 AM" src="https://user-images.githubusercontent.com/67278193/105397026-8cf2d280-5bee-11eb-84fb-ab50341f9abe.png">

## Exploratory Data 

For the data portion of this project we used SQL, R & Python. If you take a look at our project_x file, what can be seen is our merging of the shots_log and players_stats data sets. Why did we do this? The shots log data set only shows the height, weight of the shooter. That is not enough for the reader to see the whole story. After our merge we are able to see all of the physical information about the defender(Height, Weight etc.)***(show merge) 

The main library we used with python was pandas to import, clean and merge the data. With our merged data we are able to search for correlations to see what features had an impact on the shot result column. After our merge we decided to look at team statistics such as PACE, offensive efficiency and many other metrics.

--------------------------------

## Data Analysis & Machine Learning

<img width="963" alt="Screen Shot 2021-01-21 at 1 41 42 PM" src="https://user-images.githubusercontent.com/67278193/105396986-819fa700-5bee-11eb-80be-459e926d1ad7.png">

Per our observations, there is no real correlation between defender height and a shot being made. What we can find is there seems to be a good coorelation between being the home team and having a higher shooting percentage.


### Resampling method -- first try with merged data sets shots_log and player_stats

<img width="1320" alt="Initial resampling" src="https://user-images.githubusercontent.com/67278193/102673006-77f2d180-4160-11eb-87ce-c05a6edf0bbf.png">

For the machine learning part of the project we used the imbalanced-learn library with a sampling method(OverSampler). We chose the oversampling method because we figured this would be a good way to start. This may change once we complete the project. The benefits of the random oversampler is that it rebalances the distribution in an imbalanced set. Before beginning our process we had to split the data into train and test sets with our Y variable being the SHOT_RESULT column
The benefits of using this model is that it makes our dataset more balanced

### Easy Ensemble Classifier with Forest Classifier

For the second try, we decided to use this method to test our data set with machine learning. First we split our data into train and test sets before chosing our balanced random forest classisifer model. Although this model is used typically for an imbalanced variable we thought that it could potentially increase our accuracy score so we thought it was neccessary to use it. Unfortunately there was not an increase in the accuracy score, the only significant correlation to our shot_result column was the CLOSE_DEF_DIST and 3 point attempts. 


**For more information click below**

[![](https://github.com/Deving789/NBA_Final-Project/blob/triangle_database_mockup/Images/click_small.PNG)](https://github.com/Deving789/NBA_Final-Project/tree/Circle_MachineLearning)

----------------------------

## Database

The team connected pandas with SQL and created databse called NBA_DB that can store the working data. 

![](https://github.com/Deving789/NBA_Final-Project/blob/main/Images/NBA_DB_tables_listed_pandas_to_sql.PNG)

![](https://github.com/Deving789/NBA_Final-Project/blob/main/Images/pandas_sql_table1_shot_logs_check_success.PNG)


**More details** 

[![](https://github.com/Deving789/NBA_Final-Project/blob/triangle_database_mockup/Images/click_small.PNG)](https://github.com/Deving789/NBA_Final-Project/tree/triangle_database_mockup)

----------------------------

## Project dashboard

-- Using HTML we created a website for the end user to look at. On this HTML page you can see the names of our group members, the technologies we used, a carousel of images(including from our project) and even a section where you can look up any player or team from the 2014-15 season. The search section even allows you to download your searched critera via JSON or Excel. To see our website please scroll down to the bottom of this readme file.

----------------------------

## Conclusion

The result of a players shot is extremely tough to predict -- overall throughout NBA history the average field goal percentage has always been below 50%. Even if a player has a wide open bucket it is not a gurantee that they will make it. Our conclusion from the 2014-15 season is for a team to get their best results they need to create as many fast break points as they can get and take as many wide open 3 point looks as possible. The Warriors forever broke the mold of the average superstar team by running, spreading the floor and shooting a high volume of 3 pointers to maxmize their number of possesions, scoring efficiency resulting in points that created more wins and a path to a championship season. 

----------------------------

## Resources

Dataset that with 2014-15 NBA shot log data and player stats. 

Data Source: [Kaggle](https://www.kaggle.com/drgilermo/nba-players-stats-20142015)

- [shot_logs.csv](https://github.com/Deving789/NBA_Final-Project/blob/main/shot_logs.csv)
- [players_stats.csv](https://github.com/Deving789/NBA_Final-Project/blob/main/players_stats.csv)
- [nba_team_advanced_stats.csv](https://github.com/Deving789/NBA_Final-Project/blob/main/nba_team_advanced_stats.csv)

------------

## Presentation 

[![](https://github.com/Deving789/NBA_Final-Project/blob/triangle_database_mockup/Images/click_small.PNG)](https://docs.google.com/presentation/d/1KEXZdf1LI4lkU6TMExpXh0-VfxjO-HPlHMOZO_PCLw4/edit#slide=id.gb7869bb50a_0_233)


## Take a look at our website! 

[![](https://github.com/Deving789/NBA_Final-Project/blob/triangle_database_mockup/Images/click_small.PNG)](https://deving789.github.io/NBA_Final-Project/)

