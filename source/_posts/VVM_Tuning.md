---
title: Generalize LMMs to Versatile Visual Modalities
title_zh: "将多模态大模型泛化到多样视觉模态"
description: "VVM-Tuning uses fabricated modality synthesis and modality contexts to help LMMs generalize zero-shot to unseen visual modalities such as thermal, depth and X-ray."
description_zh: "VVM-Tuning 借助合成模态与模态上下文，使多模态大模型能够零样本泛化到热红外、深度、X 光等未见视觉模态。"
date: 2026-03-05 10:00:00
tags: 【Research】
cover: /images/research/vvm.png
---
<div class="lang-en">

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

</div>
<div class="lang-zh">

# Generalize LMMs to Versatile Visual Modalities via Fabricated Modality Synthesis

S. Yuan, Y. Li, **Ruyi Zhang**, et al. · [ECCV 2026 · 已接收]{.label .success}

# 核心思想
多模态大模型（LMM）在 RGB 图像上表现出色，但其向**未见视觉模态**（热红外、深度、X 光等）泛化的能力仍鲜有研究。我们认为，不同的视觉模态本质上是对同一物理世界的不同采样。因此，良好的泛化既需要对场景语义的**模态无关感知**，也需要对模态特有外观的**适应能力**。

![核心思想概览](/images/research/vvm.png)

# 方法：VVM-Tuning
- **模态合成**：从 RGB 场景合成外观多样的图像，使模型学会将不变的语义与变化的外观解耦。
- **模态上下文**：在提示中加入模态描述，并通过指令微调将外观变化映射回模态属性，从而在推理时实现**零样本**适应。
- **VVM-Bench**：包含 6 种真实与合成模态的基准，用于评测语义感知与模态理解能力。

![模态合成流程](/images/research/vvm_pipeline.png)

# 实验结果
:::success
仅在合成模态上训练，**5 个受测 LMM**（LLaVA-1.5、Qwen-2.5-VL、Qwen-3-VL 等）在真实模态和新的合成模态上均取得一致提升，且无需任何目标模态内的训练。
:::

# 我的贡献
负责模态合成流程的设计以及零样本泛化实验。

</div>
