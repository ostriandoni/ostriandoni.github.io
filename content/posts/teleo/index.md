---
title: "Teleo"
date: 2018-01-02
description: "A team collaboration app that helps you manage your projects. With all the tools you need in one place, you can move effortlessly between talking, planning and doing."
image: teleo.png
tags:
  - Node.js
  - MongoDB
  - Messaging App
  - Task Manager
  - Backend
  - Professional Project
---

## Overview
- **Role:** Backend Engineer
- **Company:** Teleo Labs Pte Ltd
- **Period:** Jan 2018 – Jun 2018

## Key Contributions
- Implemented Stripe payment integrations, establishing automated subscription billing workflows that directly unlocked global revenue generation and processed dozens of secure transactions
- Setting up a GitHub and Teleo integration to automatically broadcast repository activity such as pushes, pull requests, reviews, and merges directly into a Teleo channel
- Implemented granular, real-time channel notifications utilizing Ably WebSockets to ensure targeted message delivery
- Developed an interactive message reaction system, allowing users to express sentiments and respond to individual messages using contextual emojis

## Tech Stack
- Node.js
- Koa.js
- MongoDB
- Redis
- AWS

## Architecture
{{< figure src="architecture.png" alt="Architecture Diagram" width="100%" >}}
_Simplified architecture based on my responsibilities; proprietary implementation details omitted._

## Project Scope & Key Features
- User authentication and account management
- Team messaging with support for both channels and direct messages
- Kanban board for project management tracking, with swimlanes for Backlog, To Do, In Progress, and Done
- Collaborative document editor that allows multiple invited members to edit the same document simultaneously in real time
- Subscription based pricing plans
- Recurring transaction management (subscription billing cycles)
