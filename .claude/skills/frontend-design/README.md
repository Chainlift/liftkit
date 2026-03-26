# frontend-design Skill

A [Claude Code](https://docs.anthropic.com/en/docs/claude-code) skill that guides creation of distinctive, production-grade frontend interfaces with high design quality. Avoids generic "AI slop" aesthetics and produces visually striking, memorable code.

## Dependencies

| Dependency | Version | Required |
|---|---|---|
| [Claude Code](https://docs.anthropic.com/en/docs/claude-code) | Latest | Yes |
| Node.js | >= 18.0.0 | Recommended |
| npm | >= 9.0.0 | Recommended |

### Supported Frameworks

This skill generates code for any frontend framework. No specific framework is required, but output quality is optimized for:

- **HTML / CSS / JavaScript** (vanilla)
- **React** (with Next.js, Vite, etc.)
- **Vue**

### Optional Dependencies for Enhanced Output

| Package | Purpose |
|---|---|
| [motion](https://www.npmjs.com/package/motion) | Advanced animations in React projects |
| [Google Fonts](https://fonts.google.com/) | Distinctive typography choices |
| [LiftKit](https://github.com/chainlift/liftkit) | Design system with golden ratio scaling and optical symmetry |

## Installation

### 1. Install Claude Code

If you haven't installed Claude Code yet:

```bash
npm install -g @anthropic-ai/claude-code
```

### 2. Add the Skill to Your Project

#### Option A: Clone This Repository

If you're already using LiftKit:

```bash
git clone https://github.com/chainlift/liftkit.git
cd liftkit
```

The skill is located at `.claude/skills/frontend-design/SKILL.md` and will be automatically discovered by Claude Code when you start a session in the project directory.

#### Option B: Copy the Skill into Your Own Project

1. Create the skill directory in your project:

   ```bash
   mkdir -p .claude/skills/frontend-design
   ```

2. Copy the `SKILL.md` file:

   ```bash
   cp path/to/liftkit/.claude/skills/frontend-design/SKILL.md \
      .claude/skills/frontend-design/SKILL.md
   ```

3. Start Claude Code in your project:

   ```bash
   claude
   ```

The skill will be auto-discovered — no additional configuration is needed.

### 3. Verify Installation

Start Claude Code and type:

```
/frontend-design
```

If the skill appears in the slash command list, installation is complete.

## Usage

### Invoke via Slash Command

```
/frontend-design Build a pricing page for a SaaS analytics platform
```

### Invoke Naturally

Simply ask Claude Code to build a frontend component, page, or application. The skill is automatically triggered when the request matches its description.

```
Build a landing page for a coffee roastery with a dark, editorial aesthetic
```

### Example Prompts

| Prompt | Expected Aesthetic |
|---|---|
| `Build a dashboard for a music streaming app` | Bold, immersive, dark theme with vibrant accents |
| `Create a portfolio site for an architect` | Minimal, grid-heavy, monochrome with precise spacing |
| `Design a checkout flow for a luxury watch brand` | Refined, serif typography, muted gold accents |
| `Make a 404 page for a retro gaming site` | Pixel art, CRT effects, neon color palette |

## What the Skill Does

1. **Design Thinking** — Analyzes purpose, audience, and constraints before writing code
2. **Aesthetic Direction** — Commits to a bold, intentional design direction (brutalist, editorial, retro-futuristic, etc.)
3. **Code Generation** — Produces production-grade, functional code with:
   - Distinctive typography (no generic fonts)
   - Cohesive color palettes with CSS variables
   - Meaningful motion and micro-interactions
   - Unexpected spatial composition
   - Rich visual details (textures, gradients, shadows)

## License

Apache License 2.0 — see [LICENSE](../../../LICENSE) for complete terms.
