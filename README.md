# NBA_Final-Project - Part 2

## Project Overview

Our team is working on analyzing the NBA data from 2014-15 season. The main dataset was posted on [Kaggle.com](https://www.kaggle.com/dansbecker/nba-shot-logs) and contains a record of every shot by every player in every game of the 2014-15 season.

We have also added additional dataset showing historical data [1997-2020](https://data.world/sportsvizsunday/june-2020-nba-shots-1997-2019).

### Part 2 Submission Rubric

#### 1. Presentation: 
See also the [Main branch](https://github.com/Deving789/NBA_Final-Project/tree/main). 

For **deliverable 1** the team drafted the project, including the following: selected topic; provided reasons why we selected this topic; provided description of our source of data; provided questions we hope to answer with the data. For **deliverable 2** the team also included [PPT presentation](https://docs.google.com/presentation/d/1yyX7UKPuBxpFafK9zPFxsAPh2NvwZ-T5X8ihhU3aKJA/edit#slide=id.p1) in google sheets (work in progress)


--------

#### 2. Github

The team has this Github repository dedicated to the final project.

***Master Branch:***  - includes data resources, main working files and README.

***Individual Branches***Each team member has at least four commits from the duration of the first segment 

-----
#### 3. Machine Learning Model

Team members submit the code for the machine learning model. It's a work in progress and we are still deciding on what model is best to use.

[](https://github.com/Deving789/NBA_Final-Project/blob/main/Resampling.ipynb)

-------
#### 4. Database

Team presents a provisional database that stands in for the final database and accomplishes the following:
* DB stores static data for use during the project;
* DB interfaces with the project in some format (e.a [database connects to the model](https://github.com/Deving789/NBA_Final-Project/blob/triangle_database_mockup/NBA_project_SQL_connection.ipynb));

![](https://github.com/Deving789/NBA_Final-Project/blob/triangle_database_mockup/Images/pandas_sql_create_tables_load_data_success.PNG)

* DB includes at least two (2) tables;

![](https://github.com/Deving789/NBA_Final-Project/blob/triangle_database_mockup/Images/NBA_DB_tables_listed_pandas_to_sql.PNG)

* DB includes at least one join using the database language (not including any joins in Pandas)

![](https://github.com/Deving789/NBA_Final-Project/blob/triangle_database_mockup/Images/pandas_sql_tables_merge_on_id_success.PNG)

* DB includes at least one connection string (using SQLAlchemy)

`from sqlalchemy import create_engine`

`# Create the database engine `
`engine = create_engine(db_string)`

`#import 1st file - shot_logs`
`shot_log.to_sql(name="1_nba_shot_logs", con=engine,  if_exists='replace')`

* If use SQL database, provide ERD with relationships

-----------

**IMPORTANT** to note that some minor alreations were needed for some tables. This was done to update column names to make them more "sql-friendly".

![](https://github.com/Deving789/NBA_Final-Project/blob/triangle_database_mockup/Images/pandas_sql_table2_location_data_rename_columns_success.PNG)

------------------

#### 5. Dashboard

The team is working on creating a blueprint of the dashboard
