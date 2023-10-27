---
title: Features for Estimating Autonomous Vehicle Poses
date: 2022-05-30 12:07:27
tags: 【System】
cover: https://raw.githubusercontent.com/MaggieRuyi/MaggieRuyi.github.io/src/image/vis.jpeg
--- - - - - - - - - - - - - - - - - - - - - - -
# Features for Estimating Autonomous Vehicle Poses
---
## Problem Explaination
implement and compare three different strategies for matching visual
features in a series of images captured during the navigation of an autonomous vehicle (AV).
These features are used in estimating poses (i.e., camera trajectories) based on a visual
odometry algorithm. Below are some terms and their definitions to help clarify some concepts
in autonomous robot navigation.
Odometry is the use of sensors to estimate a robot's change in position relative to a known
position. Visual odometry (VO) is a specific type of odometry where only cameras are used as
sensors, as opposed to using, e.g., global positioning system (GPS) sensors or light detection
and ranging (LIDAR) sensors. It is based on the analysis of a sequence of camera images.
Simultaneous localisation and mapping (SLAM) is a task whereby a robot needs to build a
map of its current environment while at the same time trying to determine its position relative
to that map.


! [](https://raw.githubusercontent.com/MaggieRuyi/MaggieRuyi.github.io/src/image/vis1.jpeg)