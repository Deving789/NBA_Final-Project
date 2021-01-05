# Read in Csv
shots_df <- read.csv("shot_logs.csv", header=TRUE)
players_df <- read.csv("players_stats.csv", header=TRUE)

#
library(HannayIntroStats)
data("shot_logs_2014")
##make sure that the wins column is treated as a categorical variable (factor)
shots_df $W=as.factor(shots_df$W) 

##check the type of data stored in this column
class(shots_df$W)

##give the options for a categorical variable
levels(shots_df$W)

#create a histogram of shot distance
hist(shots_df$SHOT_DIST, freq=TRUE, main="Distances of NBA Shots 2015", xlab='Distance (ft)', ylab='Number of Shots', col="light blue")

#getting a list of total shots made/missed by home and away teams
table(shots_df$LOCATION, shots_df$SHOT_RESULT)
#oddly enough the home team has a better made to missed ratio-- Home court advantage?







