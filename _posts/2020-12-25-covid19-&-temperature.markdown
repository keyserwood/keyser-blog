---
layout: post
title:  "Covid19 & Temperature!"
date:   2020-12-25 10:24:20 +0100
categories: data science
---
# Covid 19 & Température 

> Cette courte étude de data science a pour objectif de faire apparaitre un lien (s'il existe) entre les cas de covid19 et les données météorologiques.  Il faudra donc récupérer les historiques de températures, humidité et aux paramètres et les lier aux nombres de cas de covid.



## 1. Le problème du dataset 

> Les données métérologiques sont facilement accessibles sur internet, et même si certains sites laissent la possibilité d'y avoir accès via des calls API ([Open weather map)](https://openweathermap.org/) , ces jeux de données sont payants.

Grâce au site [Meteo blue](https://www.meteoblue.com/fr/historyplus#try-for-free) nous avons accès à l'historique des données météos pour la ville de Bâle, et nous allons nous intéresser aux cas de covid chez nos voisins helvète 🇨🇭. 



## 2. Méthodologie

### 2.1. - Clean le dataset 

> Après avoir chargé les différents fichiers, on manipule les fichiers de cas et d'historiques météorologiques afin de les rassembler ensemble en un seul et même tableau de données. 

![dataframe](/keyser-blog/assets/images/dataframe.png)

#### Evolution du nombre d'hospitalisés

![image-20201225111846583](/keyser-blog/assets/images/hospitalized.png)

#### Evolution du nombre de cas 

![image-20201225111906906](/keyser-blog/assets/images/nb_cases.png)

#### Evolution du nombre de décès 

![image-20201225111927765](/keyser-blog/assets/images/nb_deces.png)

### 2.2. - Première corrélation

#### Température et nombre d'hospitalisés

On peut afficher pour le moment les premières corrélations entre les données :

![image-20201225111351995](/keyser-blog/assets/images/corr_matrix.png)

> On observe une première corrélation importante et significative entre la température et le nombre d'hospitalisés (Temperature & Hospitalized) : -0.66.

![image-20201225111609242](/keyser-blog/assets/images/temperature_hospitalized._1png)

#### Améliorer la corrélation 

> Comme nous pouvons le voir sur le graphique où la température et le nombre de cas sont mis à l'échelle, il existe de fortes variations d'un jour à l'autre. Notre objectif est de garder plutôt une tendance mieux représentative à la fois de l'évolution de la température et de l'évolution de l'épidémie.

![image-20201225112405652](/keyser-blog/assets/images/temperature_hospitalized_scaled.png)

##### Utiliser une moyenne mobile sur 3 jours. 

> La moyenne mobile sur 3 jours va permettre de lisser au mieux chacune des courbes et mieux traduire l'évolution des tendances. 
>
> **MA** : Mean Average

![image-20201225112523465](/keyser-blog/assets/images/temperature_hospitalized_ma3.png)



## 3. Prédiction 

> Maintenant que nous avons pu voir la relation entre témpérature et nombre de cas (ici hospitalisés), nous allons pouvoir mettre un modèle de regression en place, ici un [RandomForestRegressor](https://medium.com/datadriveninvestor/random-forest-regression-9871bc9a25eb).

#### Entraînement du modèle 

> Grâce à scikit learn, nous mettons en place le RFR et entraînons ce dernier sur notre jeu de données lissés. 

#### Hospitalisés 



![image-20201225113442334](/keyser-blog/assets/images/pred_hospitalized.png)

#### Nombre de cas 

![image-20201225114502683](/keyser-blog/assets/images/pred_cases.png)

#### Nombre de décès

![image-20201225114510801](/keyser-blog/assets/images/pred_death.png)

### Prédiction sur le nouveau jeu de données 

> En se basant sur les données météorologiques de l'année passée, nous pouvons tenter de prédire avec la même méthodologie le nombre de personnes hospitalisés sur les mois à venir. 

##### Température sur les mois à venir :

![image-20201225114933675](/keyser-blog/assets/images/temperature_next.png)

> Les températures restants relativement faibles à Bâle sur les mois à venir, cela laisse présager une stagnation, voire une augmentation avec les fêtes du nombre de cas. 

##### Nombre de personnes hospitalisés sur les mois à venir : 



![image-20201225114755541](/keyser-blog/assets/images/pred_hospi_2.png)



## 4. Conclusion 



Ce court travail d'analyse de données met en évidence la forte connivence entre température et l'épidémie de coronavirus. Alors que nous entrons dans les mois les plus froid de l'année, malgré l'arrivée d'un vaccin, il semble peu probable que l'épidémie recule sur les 3 prochains mois. 



Sur ce **Joyeux Noël** !!! 

![image-20201225114755541](/keyser-blog/assets/images/end_gif.gif)