---
title: "ControlScene: Controllable Text-to-3D Scene Generation"
title_zh: "ControlScene：可控的文本到三维场景生成"
description: "ControlScene uses LLM-driven structured layout priors and the LayoutVerse-20K dataset to generate semantically faithful, spatially coherent and controllable 3D scenes."
description_zh: "ControlScene 借助大语言模型驱动的结构化布局先验与 LayoutVerse-20K 数据集，生成语义忠实、空间合理且可控的三维场景。"
date: 2026-03-19 10:00:00
tags: 【Research】
sticky: true
cover: /images/research/controlscene.png
---
<div class="lang-en">

# ControlScene: Controllable Text-to-3D Scene Generation via Structured Layout Priors

**Ruyi Zhang**, et al. · [CAAI Trans. · Accepted]{.label .success} · [First Author]{.label .primary}

# Motivation
Text-to-3D scene generation makes 3D content creation as easy as writing a sentence, with uses in VR, games, interior design and simulation. Existing methods, however, often produce scenes that are not semantically faithful, not spatially coherent and hard to control, mainly because they lack grounded spatial reasoning and fine-grained structural supervision.

# LayoutVerse-20K
We introduce **LayoutVerse-20K**, a large-scale benchmark of **20,000 manually annotated samples**. Each sample includes a text prompt, layout metadata, a graph-structured layout, a scene graph and the corresponding 3D scene (panorama, multi-view images and 3D Gaussian Splatting).

![Overview of LayoutVerse-20K](/images/research/controlscene.png)

# Method
**ControlScene** injects layout-level structure into the generation process so that LLMs jointly reason about **semantics** and **spatial composition**.

![Overview of the ControlScene framework](/images/research/controlscene_framework.png)

- **LLM-driven structured layout generation** from natural language.
- Two task-specific metrics, **category plausibility** and **layout plausibility**, which compare generated outputs against commonsense priors from Top-K reference samples.
- An **interactive UI** for real-time layout customization.

# Results
:::success
ControlScene outperforms baseline methods in spatial realism, semantic consistency and user controllability, providing a solid foundation for grounded, language-driven 3D scene generation.
:::

[3D Gaussian Splatting]{.label} [LLM]{.label} [Scene Graph]{.label} [Layout]{.label}

</div>
<div class="lang-zh">

# ControlScene: Controllable Text-to-3D Scene Generation via Structured Layout Priors

**Ruyi Zhang**, et al. · [CAAI Trans. · 已接收]{.label .success} · [第一作者]{.label .primary}

# 研究动机
文本到三维场景生成让三维内容创作变得像写一句话一样简单，可应用于虚拟现实、游戏、室内设计和仿真等领域。然而，现有方法生成的场景往往语义不够忠实、空间不够连贯且难以控制，其主要原因在于缺乏有依据的空间推理和细粒度的结构监督。

# LayoutVerse-20K 数据集
我们提出了大规模基准 **LayoutVerse-20K**，包含 **20,000 个人工标注样本**。每个样本包括文本提示、布局元数据、图结构布局、场景图以及对应的三维场景（全景图、多视角图像和 3D Gaussian Splatting）。

![LayoutVerse-20K 概览](/images/research/controlscene.png)

# 方法
**ControlScene** 将布局层面的结构信息注入生成过程，使大语言模型能够同时对**语义**与**空间构成**进行推理。

![ControlScene 框架概览](/images/research/controlscene_framework.png)

- 基于大语言模型、从自然语言出发的**结构化布局生成**。
- 两个面向该任务的评价指标：**类别合理性**与**布局合理性**，通过与 Top-K 参考样本中的常识先验进行比较来评估生成结果。
- 支持实时布局定制的**交互式界面**。

# 实验结果
:::success
ControlScene 在空间真实感、语义一致性和用户可控性方面均优于基线方法，为有依据的、语言驱动的三维场景生成奠定了坚实基础。
:::

[3D Gaussian Splatting]{.label} [大语言模型]{.label} [场景图]{.label} [布局]{.label}

</div>
