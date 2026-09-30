---
title: Task-Uncertainty-Aware Video Restoration
title_zh: "任务不确定性感知的视频复原"
description: "DOVENet restores videos with time-varying unknown degradations via an unrolled MAP network and task-uncertainty regularization that emphasizes hard cases."
description_zh: "DOVENet 通过展开式 MAP 网络与任务不确定性正则化，复原具有时变未知退化的视频，并重点优化困难样本。"
date: 2026-02-13 10:00:00
tags: 【Research】
cover: /images/research/restoration.png
---
<div class="lang-en">

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

</div>
<div class="lang-zh">

# Task-Uncertainty-Aware Video Restoration for Time-varying Unknown Degradations

Wenrui Li, Hongtao Chen, **Ruyi Zhang**, Zhe Yang, Wangmeng Zuo · [IEEE TMM · 已接收]{.label .success}

# 研究问题
真实场景中的视频常受到**时变未知退化（TUD）**的影响：退化的类型和程度在帧与帧之间不可预测地变化。若对各类损失简单取平均，梯度会被容易的退化主导，困难退化与复合退化则长期得不到充分优化。

![均匀损失与任务不确定性加权损失的对比](/images/research/restoration.png)

# 方法：DOVENet
- 将复原问题建模为结合空间先验与时间一致性的 **MAP 推断**，并以**展开式网络**实现，其中包含退化感知的对齐与复原更新模块。
- 将**任务不确定性正则化（TUR）**推广到视频：利用帧级不确定性与退化存在掩码自适应地重新加权损失，突出困难样本，且不改变推理过程。

:::success
DOVENet 在多个 TUD 基准上持续提升了复原性能与泛化能力，同时保持高效、可扩展。
:::

# 我的贡献
负责时空不确定性正则化的验证，以及在多个基准上的定量对比实验。

</div>
