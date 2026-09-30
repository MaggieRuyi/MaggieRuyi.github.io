---
title: "ControlScene: Controllable Text-to-3D Scene Generation"
date: 2026-03-19 10:00:00
tags: 【Research】
sticky: true
cover: /images/research/controlscene.png
---
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
