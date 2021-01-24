### NBA_Final-Project


Based on our final data, we do not see much correlation between shot result and closest defender distance, as we thought at the beginning of the project. Based on the data we have, the most impact on whether the shot will be successful or not, is actually a shot distance.

![](https://github.com/Deving789/NBA_Final-Project/blob/Circle_MachineLearning/Images/3.shot_result_corr_cols.PNG)

-----

We looked at the data multiple ways, inclusing feature selection, 
correlation matrix, and graphs (for visual comprehencion). 
 
![](https://github.com/Deving789/NBA_Final-Project/blob/Circle_MachineLearning/Images/corr_matrix_merge.png)

------

![](https://github.com/Deving789/NBA_Final-Project/blob/Circle_MachineLearning/Images/Shot%20Distance%20-%20Close%20Defender%20Distance.png)

-------

![](https://github.com/Deving789/NBA_Final-Project/blob/Circle_MachineLearning/Images/Shot%20Distance%20by%20Range.png)

------

As a result, we ran multiple machine learning models, but the most accuracy we were able to achieve with the Easy Ensemble. We received 60% accuracy level and given the data we have, this was a the best so far.

![](https://github.com/Deving789/NBA_Final-Project/blob/Circle_MachineLearning/Images/3.easy_ensemble_mlm.PNG)

------

**Model with adding more data showing player's exact location on court**

We were able to add new features showing palyer's exact location on court during shit attempt. It boosted our accuracy to 65%.


![](https://github.com/Deving789/NBA_Final-Project/blob/Circle_MachineLearning/Images/new_model_location_64accuracy.PNG)

--------


**Looking at the different season**

We were also able to get the exact the same data for the prior 2013-14 NBA season and it showed the same result and features as the most important.

![](https://github.com/Deving789/NBA_Final-Project/blob/Circle_MachineLearning/Images/new_model_location_64accuracy_1314season.PNG)

***Close defender's distance per our data and model had only about 11% impact/importance***

---------

## Conclusion

While we weren't able to get the answer we expected and what features were actually the most important, we saw the strongest correlation between the shot result success and the actual shot distance. This also doen't mean that the data we had was completely bad or imballanced. Based on some of the correlations we saw, it could be helpful in answering some other questions (based on our observations, it would be distance related). 

Unfortunately one of the downsides of using any freely available data, is its reliability and integrity. A lot of NBA data and metrics is proprietory and we believe there is more KPIs that could help boosting accuracy of our predicting model. Ideally we would like to collect as much data as possible and run our analysis again.

![](https://cdn.mos.cms.futurecdn.net/DFpakzWmfkhQsuU3N6hnd3.jpg)






