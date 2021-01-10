# NBA_Final-Project - Part 1

## Project Overview

Our team is working on analyzing the NBA data from 2014-15 season. The main dataset was posted on [Kaggle.com](https://www.kaggle.com/dansbecker/nba-shot-logs) and contains a record of every shot by every player in every game of the 2014-15 season.

We have also added additional dataset showing historical data [1997-2020](https://data.world/sportsvizsunday/june-2020-nba-shots-1997-2019).

### Part 1 Submission Rubric

#### 1. Presentation: 
See also the [Main branch](https://github.com/Deving789/NBA_Final-Project/tree/main). 

For deliverable 1 the team drafted the project, including the following: selected topic; provided reasons why we selected this topic; provided description of our source of data; provided questions we hope to answer with the data.

For deliverable 2 the team also included [PPT presentation](https://docs.google.com/presentation/d/1yyX7UKPuBxpFafK9zPFxsAPh2NvwZ-T5X8ihhU3aKJA/edit#slide=id.p1) in google sheets (work in progress)


--------

#### 2. Github

The team has this Github repository dedicated to the final project.

***Master Branch:***  - includes data resources, main working files and README.

***Individual Branches***Each team member has at least four commits from the duration of the first segment 

-----
#### 3. Machine Learning Model

The team presents a provisional machine learning model that stands in for the final machine learning model and accomplishes the following:

✓ Takes in data in from the provisional database (upload csv to python)

![](https://github.com/Deving789/NBA_Final-Project/blob/triangle_database_mockup/Images/file_upload_to_python.PNG)

✓ Outputs label(s) for input data (create dataframe(s))

-------
#### 4. Database

Team presents a provisional database that stands in for the final database and accomplishes the following:
* DB stores static data for use during the project;
* DB interfaces with the project in some format (e.a database connects to the model);

![](https://github.com/Deving789/NBA_Final-Project/blob/triangle_database_mockup/Images/pandas_sql_create_tables_load_data_success.PNG)

* DB includes at least two (2) tables;

![](https://github.com/Deving789/NBA_Final-Project/blob/triangle_database_mockup/Images/NBA_DB_tables_listed_pandas_to_sql.PNG)

* DB includes at least one join using the database language (not including any joins in Pandas)

![](https://github.com/Deving789/NBA_Final-Project/blob/triangle_database_mockup/Images/pandas_sql_tables_merge_on_id_success.PNG)

* DB includes at least one connection string (using SQLAlchemy)

`from sqlalchemy import create_engine`

* If use SQL database, provide ERD with relationships

---------

## Iniatial Data Observations

The team looked at the correlation between all columns we have in the dataset. More details in the [main branch](https://github.com/Deving789/NBA_Final-Project). 

1. [players_stats.csv](https://github.com/Deving789/NBA_Final-Project/blob/triangle_database_mockup/Resources/players_stats.csv)

![](https://github.com/Deving789/NBA_Final-Project/blob/triangle_database_mockup/Images/players_stats_correlation_matrix.PNG)
-------

2. [shot_log.csv](https://github.com/Deving789/NBA_Final-Project/blob/triangle_database_mockup/Resources/shot_logs.csv)

![](https://github.com/Deving789/NBA_Final-Project/blob/triangle_database_mockup/Images/shot_log_correlation_matrix.PNG)









