# Case Study: Nexora Corporate Portal and Organization Directory

## Executive summary

Nexora is the corporate website and secured employee portal of the Nodeya ecosystem, doubling as the canonical tenant, organization, and identity directory that downstream products consume.

## The challenge

Growing product suites need one dependable answer to "who is this person and which organization do they belong to?" When every product keeps its own organization and user records, access drifts, employee communication scatters across tools, and integration logic multiplies. Corporate groups also need a single place for announcements, forms, learning, and support.

## My role

Solution Architect and Software Developer responsible for:

- Portal and employee-experience scope
- Canonical tenant and organization directory design
- Identity and single sign-on direction
- Digital forms, approvals, and content workflow
- Scoped shared-service integration strategy
- Audit and notification architecture

## Solution approach

The portal centralizes employee communication and daily workflows: announcements, digital forms and approvals, handbook and knowledge base, learning and certification, events, support tickets, and guided navigation.

Behind the portal, Nexora maintains the canonical directory of tenants, organizations, and user identities. Products treat Nexora as the source of truth for organization context instead of maintaining their own divergent copies.

Nexora integrates with shared platform services — audit, notifications, and file storage — through organization-scoped adapters. Delivery uses durable outbox records written in the same database save as the source event, short-lived HMAC-signed service tokens scoped to the exact tenant and organization, and idempotency keys so retries never duplicate records. Single sign-on is backed by Keycloak.

## Technology profile

- React and TypeScript
- .NET and REST APIs
- Keycloak OIDC
- PostgreSQL
- Organization-scoped platform adapters
- HMAC-signed service tokens
- Durable outbox delivery

## Portfolio outcome

Nexora demonstrates ecosystem-level identity and organization architecture: one portal for employee life, one directory for organizational truth, and disciplined, scoped integration with shared platform services.

## Status and boundaries

This is an independently developed Nodeya product. The public case study documents its functional and architectural scope without publishing source code, business data, credentials, or internal deployment details.
