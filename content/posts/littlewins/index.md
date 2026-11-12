---
title: "Little Wins"
date: 2026-11-03
description: "A gamified, local-first educational web application for elementary school children featuring adaptive multi-subject quizzes, a star-point economy, and parent-managed reward coupons."
image: og-image.jpeg
tags:
  - JavaScript
  - Tailwind CSS
  - Supabase
  - Node.js
  - Vercel
  - EdTech
---

## Background
Getting elementary school children to build a consistent daily study habit often turns into a negotiation battle for parents. Traditional quiz apps either feel too rigid like school exams or lack tangible real-world motivation.

I built **Little Wins** to bridge daily learning habits with real-world positive reinforcement. Children complete short, adaptive 20-question quizzes across five subjects to earn star points, track their daily streaks, and redeem those stars for custom rewards set by their parents complete with a digital coupon they can show to claim their prize.

## Tech Stack
- **Frontend:** HTML5, Tailwind CSS, Vanilla JavaScript (ES6+)
- **Backend & Auth:** Supabase, PostgreSQL
- **Build & Testing:** Node.js (`javascript-obfuscator`, `html-minifier-terser`, `node:test`)
- **Hosting & CI/CD:** Vercel, GitHub

## Features
- **Adaptive Multi-Subject Quizzes:** Covers Mathematics, English, Logic & Brain Teasers, Clash Memory, and Science/Social Studies (IPAS), dynamically scaled to the child's grade level (Grades 1–6).
- **Balanced Star-Point Economy (`RewardEngine`):** Awards 100% points on a subject's first daily completion and 50% on subsequent runs, governed by a configurable daily point cap that resets at 00:00 WIB.
- **Reward Store & Digital Coupons:** Parents define custom rewards (e.g., screen time, ice cream trips) with weekly claim cooldowns. Redeemed rewards generate an official digital coupon modal for kids to present to their parents.
- **Actionable Home Hub:** Displays live star balances, daily study streaks, nearest reward wishlist progress, and one-tap shortcuts for subjects still eligible for the 100% daily bonus.
- **PIN-Protected Parent Portal:** Allows parents to configure child profiles, grade levels, daily limits, custom reward catalogs, and manual point adjustments.

## Technical Challenges
- **Multi-Device State Consistency:** Enforcing user ID consistency across devices (`ensureUserIdConsistency`) and seamlessly migrating pre-login local progress into authenticated Supabase accounts without resetting star balances to zero.
- **Payload Bloat Prevention via Rolling Data Retention:** Implementing an automatic 30-day / 50-transaction compaction policy that consolidates expired point transactions into a single `initial_balance` record keeping cloud sync payloads lightweight (< 15 KB) while preserving 100% of the child's lifetime point balance.
- **Strict Timezone Boundaries (WIB / GMT+7):** Ensuring daily point quotas reset accurately at `00:00 WIB` and weekly reward claim limits reset every Monday at `00:00 WIB` regardless of client device timezone, verified through unit tests using Node's native `node:test` runner.
- **Zero-Framework Build & Obfuscation Pipeline:** Creating a custom Node.js build script (`build.js`) to obfuscate quiz logic and reward calculations, minify HTML, and bundle static assets into `dist/` for production deployment.

## Architecture
{{< figure src="architecture.png" alt="Architecture Diagram" width="100%" >}}

## User Interface
{{< figure src="ui.jpeg" alt="UI" width="50%" >}}
