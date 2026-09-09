---
title: "Customer Management API"
date: 2026-09-09
description: "A backend REST API for managing customer profiles, accounts and service information."
tags:
  - Java
  - Quarkus
  - PostgreSQL
  - REST API
---

<!-- # Customer Management API -->

A backend REST API for managing customer profiles,
accounts and service information.

## Tech Stack

- Java
- Quarkus
- PostgreSQL
- Docker
- REST API
- OpenAPI

## Features

- Customer creation
- Customer profile management
- Contact information
- Address management
- Customer search
- Validation
- Error handling

## Architecture

{{< mermaid >}}
flowchart TD
    A[Customer] --> B[Web App]
    B --> C[Customer Service]
    B --> D[Billing System]
    B --> E[Product System]
{{< /mermaid >}}
