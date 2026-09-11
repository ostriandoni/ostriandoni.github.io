---
title: "Sporty"
date: 2026-08-31
description: "A Node.js command line tool for modifying GPX activity files by adjusting trackpoint timestamps, pace, and heart rate data across custom workout laps."
image: flowchart.png
tags:
  - Node.js
  - GPX
  - Backend
  - CLI
  - Personal Project
---

<!-- ## Overview
A Node.js command line tool for modifying GPX activity files by adjusting trackpoint timestamps, pace, and heart rate data across custom workout laps. -->

## Background
Have you ever set a massive PB on your favorite running segment, only to find out your smartwatch recorded it as an indoor run because GPS failed at the start?

I created sporty to solve this exact frustration. Just grab a previously recorded GPX file of that route, pull up your pace and heart rate splits from your PR, and pass them into the sporty CLI. Boom, your PB is back where it belongs!

## Tech Stack
- Node.js
- GPX (XML-based GPS track data)
- JSON (for lap performance parameters)

## Features
- GPX Time Adjustment
- PHD (Pace HR Distance) Customization

## Technical Challenges
- Handling varied XML namespaces (e.g. ns3:, gpxtpx:, un-namespaced tags)
- Calculating cumulative track distances via the Haversine formula
- Ensuring strictly increasing timestamps so points never move backward in time
- Generating realistic synthetic Heart Rate distributions across lap targets

## Architecture
{{< figure src="architecture.png" alt="Architecture Diagram" width="100%" >}}

## System Workflow
{{< figure src="flowchart.png" alt="System Workflow Diagram" width="100%" >}}

## GitHub Repository
[View Source Code](https://github.com/ostriandoni/sporty)
