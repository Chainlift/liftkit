<!-- markdownlint-disable -->
<br />
<div align="center">
  <a href="https://github.com/chainlift/liftkit">
    <img src="https://cdn.prod.website-files.com/657f62adb6ceeafe578853be/68748d8bdb8b734290a3db92_h-lockup-transparent.svg" height="100em" alt="chainlift-liftkit">
  </a>
  <p>🎢</p>
  <p>
    <strong>
      完璧主義者のためのUIフレームワーク
    </strong>
  </p>

[![css][css-shield]][css-url]
[![NextJS][nextjs-shield]][nextjs-url]

[![GPL2 License][license-shield]][license-url]
[![Issues][issues-shield]][issues-url]

</div>
<!-- markdownlint-restore -->

[English](README.md) | **日本語**

# :grey_question: LiftKit とは？

LiftKit は、意識せずともより良いデザインを実現できる UI フレームワークです。その核心にあるのは、スケーリング、スペーシング、カラーに関する計算式からなるプラットフォームに依存しないシステムであり、高度なデザイン原則を自動的に適用します。ユーティリティクラスを使うだけで、LiftKit が裏側で黄金比スケーリング、光学的な対称性、コントラスト比チェックを適用してくれます。

## 概要

- 以下の説明は、当社のウェブサイトの方が読みやすくなっています: [ドキュメントを見る](https://www.chainlift.io/liftkit/get-started)

### 公式リポジトリ

これは公式リポジトリです。現在、Tailwind なしの Next.js のみをサポートしています。このプロジェクトは Chainlift によってメンテナンスされていますが、Chainlift 自体もパートタイムのコントリビューターのみで運営されています。そのため、あらゆるフレームワークへのサポート拡大を計画していますが、現在は時間とリソースの制約があります。

コミュニティのコントリビューターは、各自のフォークに対して責任を持ちます。ただし、主要なコントリビューターを内部 Slack に招待し、他の開発者とコミュニケーションやコラボレーションができるようにするなど、可能な限りの支援を行っています。

### コミュニティプロジェクト

Chainlift による公式サポートはありませんが、オーナーとは連絡を取り合っています。サポートについては各プロジェクトのオーナーにお問い合わせください。

- [liftkit-tailwind](https://github.com/jellydeck/liftkit-tailwind)

### コントリビューターになるには

システムの整合性を保つため、コントリビューターの方には私たちと直接連携して作業していただくことを強く推奨します。

貢献に興味があり、当サイトおよびこの README に掲載されたい場合は、簡単な自己紹介とどのように貢献したいかを記載して info@chainlift.io までご連絡ください。

# Next.js へのインストール

このドキュメントは以下を前提としています:

- ローカルマシンに **Node.js**、**npm**、**Git** がインストール済みであること
- `cd` などの基本的なターミナルコマンドに慣れていること

## 1. 設定ファイルの作成

### オプション A: テンプレートプロジェクトをクローンする

1. 以下のコマンドをターミナルに貼り付け、テンプレートをクローンします:

   ```bash
   git clone https://github.com/Chainlift/liftkit-template.git
   ```

2. 作成されたプロジェクトディレクトリに `cd` で移動します。

   - もし `direnv: error` というエラーが出ても無視してください。これは近いうちに修正されるバグです。

3. 以下を実行します:

   ```bash
   npm install
   ```

4. 必要なコンポーネントをインストールします（下記のセクション 2 を参照）。
5. LiftKit の CSS をアプリの `globals.css` にインポートします:

   ```css
   @import url("@/lib/css/index.css");
   ```

#### テンプレートには何が含まれていますか？

LiftKit Core の設定ファイルが事前にインストールされた空の Next.js プロジェクトです。これが最も早く使い始める方法です。

---

### オプション B: 既存の Next.js プロジェクトに追加する

1. プロジェクトのルートディレクトリに `cd` で移動します。
2. LiftKit CLI を開発依存関係としてインストールします:

   ```bash
   npm install @chainlift/liftkit --save-dev
   ```

3. LiftKit を初期化します:

   ```bash
   npx liftkit init
   ```

   - `package.json` に `add` スクリプトを追加するか聞かれたら、**yes** と答えてください。
   - `devDependencies` に **shadcn** をインストールするか聞かれたら、**yes** と答えてください。

4. 必要なコンポーネントをインストールします（下記のセクション 2 を参照）。
5. LiftKit の CSS をアプリの `globals.css` にインポートします:

   ```css
   @import url("@/lib/css/index.css");
   ```

#### `npx liftkit init` は何をするのですか？

プロジェクトのルートに以下の 2 つのファイルを追加します:

- `components.json`
- `tailwind.config.ts`

> _LiftKit を使用するために Tailwind 自体は必要ありません。今のところ設定ファイルが必要なだけです。_

---

## 2. LiftKit コンポーネントとスタイルのインストール

LiftKit Core はベースとなる設定にすぎません。LiftKit Components は実際の UI コンポーネント（CSS 含む）です。ビルド時に、未使用の CSS はツリーシェイク（削除）されます。

| 方法 | 説明 | コマンド |
| --- | --- | --- |
| **すべて** | すべてのコンポーネント、CSS、型定義 | `npm run add all` |
| **単一コンポーネント** | 指定したコンポーネントのみ（CSS と型定義含む） | `npm run add component-name-kebab-case` |
| **ベースのみ** | CSS と型定義のみ | `npm run add base` |

> React 19 の互換性に関する警告が出た場合は、`--force` を追加して続行してください。

---

## FAQ

- **1つのコンポーネントしかインストールしていないのに、複数がインストールされました。なぜですか？**
  一部のコンポーネントは他のコンポーネントをインポートしています。例えば、`Badge` をインストールすると `Icon` も一緒にインストールされます。
- **使用していないコンポーネントの CSS までインストールされたのはなぜですか？**
  自由に試していただくための仕様です。未使用のスタイルはビルド時に削除されます。
- **未使用の CSS を削除するにはどうすればいいですか？**
  ビルド時に自動的に削除されます。
- **LiftKit は Tailwind を必要としますか？**
  いいえ。必要なのは `tailwind.config.ts` ファイルだけです（現在のレジストリの要件のため）。Tailwind 自体は依存関係では**ありません**。

---

## Figma テンプレート

> **警告:** 現在、非常に散らかった状態です。改善に取り組んでいますので、コントリビューションを歓迎します！

### コミュニティファイルのクローン

- [Figma でファイルを見る](https://www.figma.com/community/file/1404856652359938563) (新しいタブで開きます)

---

## 既知の問題

### ボタンのバリアントが制御不能

- 把握しています。近いうちに修正します。

  - アイコンの有無によってボタンのパディングが調整されますが、パディングの値を props で制御できません。
  - すべてを明示的にリストアップするしか選択肢がありませんでしたが、今振り返ると明らかに悪いアイデアでした。

### ローカル変数のドキュメントが必要

- Figma はマージンや `em` 単位をサポートしていないため、すべてピクセルに変換しました（`1rem = 16px` と仮定）。
- 変数はコレクションに整理されています:

  - **Global collection** = 基本的な `LkSizeUnit` 変数
  - **Text Spacing Vals** = `LkFontClass` ごとのサブセット（`.m-bottom-xs` のようなスペーシング props をシミュレート）

---

## Claude Code スキル

このリポジトリには、AI を活用したフロントエンド開発を強化する [Claude Code](https://docs.anthropic.com/en/docs/claude-code) スキルが含まれています。

### frontend-design

Claude Code が独創的でプロダクション品質のフロントエンドインターフェースを作成するためのスキルです。ありがちな「AI っぽい」デザインを避け、高品質で記憶に残るデザインを生成します。

**クイックスタート:**

1. Claude Code をインストール: `npm install -g @anthropic-ai/claude-code`
2. このプロジェクトディレクトリで Claude Code を起動: `claude`
3. スキルを使用: `/frontend-design コーヒーロースタリーのランディングページを作成して`

スキルは `.claude/skills/frontend-design/SKILL.md` から自動検出されます。詳細なドキュメント、依存関係、インストール方法については [スキル README](.claude/skills/frontend-design/README.md) を参照してください。

---

## Webflow テンプレートのクローン

- [Made in Webflow で見る](https://www.webflow.com) (新しいタブで開きます)

<!-- MARKDOWN LINKS & IMAGES -->

[nextjs-shield]: https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=next.js&logoColor=white
[nextjs-url]: https://github.com/vercel/next.js
[nix-shield]: https://img.shields.io/badge/nix-0175C2?style=for-the-badge&logo=NixOS&logoColor=white
[nix-url]: https://nixos.org/
[css-shield]: https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=css3&logoColor=white
[css-url]: https://developer.mozilla.org/en-US/docs/Web/CSS
[shadcn-shield]: https://img.shields.io/badge/shadcn-registry-%23EDE9FE.svg?style=for-the-badge&logo=vercel&logoColor=black
[shadcn-url]: https://ui.shadcn.com/docs/registry
[license-shield]: https://img.shields.io/github/license/chainlift/liftkit.svg?style=for-the-badge
[license-url]: https://github.com/chainlift/liftkit/blob/master/LICENSE
[issues-shield]: https://img.shields.io/github/issues/chainlift/liftkit.svg?style=for-the-badge
[issues-url]: https://github.com/chainlift/liftkit/issues
