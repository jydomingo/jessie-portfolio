# Case Study: NexAgent Governed AI Agent Platform

## Overview

NexAgent is Nodeya's product for designing and operating AI agents with versioned definitions, controlled model access, bounded tool execution, approvals, and durable workflows. This case study describes implementation evidence in the Nodeya repository; it does not claim a production release or customer availability.

## My role

Founder, Solution Architect, and hands-on engineer. I shaped the module boundaries and safety rules, implemented vertical slices across the API and web console, and added unit, integration, and architecture coverage.

## Engineering problem

An AI agent can change data or trigger external actions. Teams need to know which definition and model produced a run, stop work before it exceeds an approved budget, limit tool permissions, and recover workflow state after failures. AI output must not silently become an authoritative business transaction.

## Implemented slices

- **Versioned agent releases:** immutable, content-addressed versions; deployed runs pin the exact version, digest, and model.
- **Model gateway and budgets:** provider selection is pinned to the agent version. An OpenAI-compatible adapter sits behind a gateway interface, and cost limits can stop a run before the model call.
- **Tool controls:** an idempotent tool registry supports revocation and records invocation receipts. High-risk actions require a single-use, digest-bound approval with separation of duties.
- **Durable workflows:** step checkpoints, crash recovery, event inbox deduplication, and outbox dispatch support resumable execution. Handoffs enforce permission non-escalation.
- **Tenant and organization scope:** module boundaries and data access apply tenant plus active-organization context, with entitlement checks at feature boundaries.
- **Operator console:** the NexAgent web app exposes agent, run, tool, approval, knowledge, workflow, handoff, and evaluation-suite screens.

## Verification and scope

Evidence reviewed from the Nodeya readiness ledger and NexAgent handoff on 2026-11-06:

- The early registry, run, provider-routing, and tool-registry slices were live-verified on a temporary local stack using a mock model/provider; that environment was torn down.
- The later approval, knowledge, workflow, handoff, and evaluation slices have test evidence: 221 unit tests and 43 architecture tests passed, and the web console build and typecheck passed. Those later slices were not live-verified in that session.
- Knowledge retrieval remains test-backed and its ownership/integration contract with NexRAG is still unresolved; this is not a claim of cross-product search.
- Tool execution uses a simulated isolated-worker seam. It is not a production sandbox. Real provider and embedding qualification, a sandbox, further security/architecture gates, and release qualification remain separate work.

## Technology

C#, ASP.NET Core, React, TypeScript, PostgreSQL, modular bounded contexts, OpenID Connect, provider gateway interfaces, durable workflows, and automated unit/integration/architecture tests.

## Why it matters

The project demonstrates applied AI engineering beyond prompt-based features: version control for agent behavior, cost controls before inference, permission checks around tools, human approval for high-risk actions, recoverable workflows, and evidence-backed testing.

Evidence reviewed against the Nodeya readiness ledger and implementation handoff on 2026-11-06. No private source code, credentials, customer data, or environment configuration is included here.
