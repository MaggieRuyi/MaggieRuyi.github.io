---
title: "Count-Curriculum: Number-Free Figure Matching"
date: 2026-03-15 10:00:00
tags: 【Research】
sticky: true
cover: /images/research/countcurriculum.png
---
# Fine-Grained Cross-Modal Alignment for Unlinked Visual References in Scientific Papers

**Ruyi Zhang**, et al. · [Ready for Submission]{.label .warning} · [First Author]{.label .primary}

# Motivation
Matching a citation sentence to the figure or table it refers to is a basic step in academic document understanding. Most prior work takes a shortcut: it reads the figure number ("as shown in Figure 3"). That shortcut collapses when numbers are hidden, and the model has to actually understand the visual content.

We formalize this as **number-free figure matching**: given an anonymised citation sentence and all candidate figure/table images of a paper, predict which one is being cited.

# Benchmark
We build a benchmark of **1,165 arXiv papers** across **30+ disciplines**, containing **21,985 citation--figure pairs**. Baseline MLLMs score only **35--52%**, barely above random on long papers.

![Citation sentence counts per arXiv category](/images/research/countcurriculum_data.png)

# Method
**Count-Curriculum** is a three-stage, difficulty-progressive fine-tuning strategy:

- Training samples are partitioned by the number of candidate options: **Easy** (< 10), **Medium** (10--19), **Hard** (≥ 20).
- The model is trained from easy to hard, **replaying** previous-stage data to prevent catastrophic forgetting.
- Combined with **type-conditioned inference** and a **learning-rate decay** schedule (v4).

![Count-Curriculum training strategy](/images/research/countcurriculum.png)

# Results
:::success
Count-Curriculum v4 with **Qwen3-VL-8B** reaches **75.70%** overall accuracy on the anonymised test set -- **+23.4 pp** over the Qwen3-VL baseline and **+32.6 pp** over Qwen2.5-VL. The largest gain is on hard samples (**+24.6 pp** vs. direct QLoRA fine-tuning).
:::

[Qwen3-VL]{.label} [QLoRA]{.label} [Curriculum Learning]{.label} [Document Understanding]{.label}
