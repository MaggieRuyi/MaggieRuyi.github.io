---
title: Open-Vocabulary Audio-Visual Event Localization
date: 2026-01-18 10:00:00
tags: 【Research】
cover: /images/research/avel.png
---
# Hierarchical Semantic-Constrained Heterogeneous Graph for Audio-Visual Event Localization

Zhe Yang, **Ruyi Zhang**, Hongtao Chen, Wenrui Li, Hengyu Man · [IEEE TIP · Under Review]{.label .warning}

# Problem
**Open-vocabulary audio-visual event localization (OV-AVEL)** jointly models audio and visual cues to recognize and temporally localize events, including categories unseen during training. Existing methods learn joint representations in Euclidean space and struggle with (1) keeping audio-visual consistency across temporal scales without supervision for unseen classes, and (2) keeping semantics consistent between segment and video levels.

# Method: HSCHG
![Heterogeneous hierarchical graph](/images/research/avel.png)

- A **heterogeneous hierarchical graph** with audio/visual segment nodes and video-level nodes, connected by multi-directional temporal edges.
- **Dual-threshold gated fusion** that only brings in cross-modal information when alignment confidence is high.
- **Bidirectional semantic constraints** between segment- and video-level representations.
- Multi-level audio-visual features and text prototypes are mapped into **hyperbolic space**, with a hierarchical entailment loss that models video-segment relations.

![Illustration of OV-AVEL](/images/research/avel_ov.png)

# My Contribution
Model validation, hyperbolic-space visualization and curation of the **OV-AVEBench** dataset.
