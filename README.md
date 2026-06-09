# NGL Spammer (JavaScript Version)

**NGL Spammer** is a Node.js-based automation tool that sends bulk anonymous messages to a target NGL link. It simulates real user requests using randomized device IDs to bypass basic restrictions.

> ⚠️ **Disclaimer**  
> This tool is for **educational purposes only**. Spamming or harassing others violates NGL's terms of service and may be illegal in your jurisdiction. Use only with explicit permission from the target.

## Features

- Send customizable messages in bulk
- Randomized device ID generation per request
- Automatic rate‑limit detection + delay
- Interactive CLI with real‑time status updates
- Cool ASCII banner art

## How It Works

1. Checks if NGL server is reachable  
2. Asks for target username/link, message content, and spam count  
3. Generates a unique `deviceId` for each request  
4. Sends POST requests to `https://ngl.link/api/submit`  
5. Displays success/fail counts and detailed status

## Requirements

- **Node.js** (v14+ recommended)  
- **npm** (Node package manager)

## Installation

```bash
git clone https://github.com/davaadnirahadii-ux/Ngl-Spammer
cd ngl-spammer
npm install node-fetch readline-sync chalk delay spinnies
