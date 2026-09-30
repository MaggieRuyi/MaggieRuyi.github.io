---
title: Generalize LMMs to Versatile Visual Modalities
date: 2026-03-05 10:00:00
tags: 【Research】
cover: /images/research/vvm.png
---
# Generalize LMMs to Versatile Visual Modalities via Fabricated Modality Synthesis

S. Yuan, Y. Li, **Ruyi Zhang**, et al. · [ECCV 2026 · Accepted]{.label .success}

# Idea
Large Multimodal Models (LMMs) are strong on RGB images, but their ability to generalize to **unseen visual modalities** (thermal, depth, X-ray and more) is largely unexplored. We argue that different visual modalities are just different samplings of the same physical world. Good generalization therefore needs both **modality-agnostic perception** of scene semantics and **adaptability** to modality-specific appearance.

![An overview of our idea](/images/research/vvm.png)

# Method: VVM-Tuning
- **Modality synthesis**: synthesize diverse appearance-varied images from RGB scenes, so the model learns to disentangle invariant semantics from varying appearance.
- **Modality contexts**: add modality descriptions to the prompt and use instruction tuning to map appearance variations back to modality attributes, enabling **zero-shot** adaptation at inference.
- **VVM-Bench**: a benchmark with 6 real and synthetic modalities for semantic perception and modality understanding.

![Modality synthesis pipeline](/images/research/vvm_pipeline.png)

# Results
:::success
Trained only on synthetic modalities, **5 tested LMMs** (LLaVA-1.5, Qwen-2.5-VL, Qwen-3-VL, ...) improve consistently on both real-world and novel synthetic modalities, without any in-modality training.
:::

# My Contribution
Design of the modality synthesis pipeline and zero-shot generalization experiments.
