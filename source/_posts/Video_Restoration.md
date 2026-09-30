---
title: Task-Uncertainty-Aware Video Restoration
date: 2026-02-13 10:00:00
tags: 【Research】
cover: /images/research/restoration.png
---
# Task-Uncertainty-Aware Video Restoration for Time-varying Unknown Degradations

Wenrui Li, Hongtao Chen, **Ruyi Zhang**, Zhe Yang, Wangmeng Zuo · [IEEE TMM · Accepted]{.label .success}

# Problem
Real-world videos suffer from **time-varying unknown degradations (TUD)**: the types and severities of corruption change unpredictably across frames. Uniformly averaging losses lets easy degradations dominate the gradients, so hard and composite degradations stay under-optimized.

![Uniform loss vs. task-uncertainty weighted loss](/images/research/restoration.png)

# Method: DOVENet
- Restoration is formulated as **MAP inference** with spatial priors and temporal consistency, implemented as an **unrolled network** with degradation-aware alignment and restoration updates.
- **Task-uncertainty regularization (TUR)** is extended to video: frame-specific uncertainty plus degradation presence masks produce adaptive loss reweighting that emphasizes hard cases, without changing inference.

:::success
DOVENet consistently improves performance and generalization on multiple TUD benchmarks while staying efficient and scalable.
:::

# My Contribution
Validation of the spatio-temporal uncertainty regularization and quantitative comparison across benchmarks.
