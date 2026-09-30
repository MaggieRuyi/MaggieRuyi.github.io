---
title: Features for Estimating Autonomous Vehicle Poses
date: 2022-05-30 12:07:27
tags: 【System】
cover: https://raw.githubusercontent.com/MaggieRuyi/MaggieRuyi.github.io/src/image/vis.jpeg
title_zh: 用于估计自动驾驶车辆位姿的视觉特征
description: "Implementing and comparing three strategies for matching visual features across image sequences from an autonomous vehicle, used for visual odometry pose estimation."
description_zh: "实现并比较三种在自动驾驶车辆图像序列中匹配视觉特征的策略，用于基于视觉里程计的位姿估计。"
---
<div class="lang-en">

# Features for Estimating Autonomous Vehicle Poses
---
## Problem Explanation
Implement and compare three different strategies for matching visual
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


![](https://raw.githubusercontent.com/MaggieRuyi/MaggieRuyi.github.io/src/image/vis1.jpeg)

</div>
<div class="lang-zh">

# 用于估计自动驾驶车辆位姿的视觉特征
---
## 问题说明
本项目实现并比较三种不同的视觉特征匹配策略，用于处理自动驾驶车辆（AV）在导航过程中拍摄的一系列图像。
这些特征被用于基于视觉里程计（visual odometry）算法的位姿估计（即相机轨迹估计）。下面给出一些术语及其定义，帮助理解自主机器人导航中的相关概念。
里程计（Odometry）是指利用传感器估计机器人相对于某个已知位置的位置变化。视觉里程计（VO）是一种特定的里程计，它只使用相机作为传感器，而不使用诸如全球定位系统（GPS）传感器或激光雷达（LIDAR）传感器等。它基于对相机图像序列的分析。
同步定位与建图（SLAM）是指机器人在构建当前环境地图的同时，确定自身相对于该地图位置的任务。


![](https://raw.githubusercontent.com/MaggieRuyi/MaggieRuyi.github.io/src/image/vis1.jpeg)

</div>
