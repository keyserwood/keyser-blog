---
layout: post
title:  "Covid19 & Temperature!"
date:   2020-12-25 10:24:20 +0100
categories: data science
---

# Covid 19 & Température 

> Cette courte étude de data science a pour objectif de faire apparaitre un lien (s'il existe) entre les cas de covid19 et les données météorologiques.  Il faudra donc récupérer les historiques de températures, humidité et aux paramètres et les lier aux nombres de cas de covid.



## 1. Le problème du dataset 

> Les données métérologiques sont facilement accessibles sur internet, et même si certains sites laissent la possibilité d'y avoir accès via des calls API (https://openweathermap.org/) , ces jeux de données sont payants.

Grâce au site : https://www.meteoblue.com/fr/historyplus#try-for-free nous avons accès à l'historique des données météos pour la ville de Bâle, et nous allons nous intéresser aux cas de covid chez nos voisins helvète 🇨🇭.



## 2. Méthodologie