# Cryptography Security Visualizer

An interactive web application for exploring how different cryptographic systems behave under classical and quantum attack models. This project is designed as part of an honors cybersecurity research initiative, focusing on the future of encryption and post-quantum cryptography.

---

## Overview

This tool provides a visual comparison of:

* **RSA** (classical encryption, vulnerable to quantum attacks)
* **ECC (Elliptic Curve Cryptography)** (more efficient than RSA, but still quantum-vulnerable)
* **Post-Quantum Cryptography** (lattice-based approximations resistant to quantum attacks)

Users can simulate attacker capabilities and observe how security strength degrades across different systems.

---

## Features

* Interactive **line chart visualization** of cryptographic strength
* Toggle for **quantum vs classical attacker models**
* Adjustable **attacker power slider**
* Dynamic **explanation panel** interpreting results in real time
* Clean, modern UI built with Tailwind CSS

---

## How It Works

The application uses simplified mathematical models to approximate cryptographic security:

* Security strength is normalized between **0 and 1**
* As attacker power increases, security decreases
* Quantum attacks (e.g., Shor’s algorithm) significantly reduce RSA/ECC security
* Post-quantum methods degrade more slowly under the same conditions

These models are **illustrative**, not exact implementations, and are supported by research discussed in the accompanying paper.

---

## Research Context

This project supports research in:

* Post-Quantum Cryptography (PQC)
* Quantum computing threats (e.g., Shor’s algorithm)
* Cryptographic security modeling
* Visualization for cybersecurity education

The goal is to bridge:
**theoretical cryptography → practical intuition → visual understanding**
