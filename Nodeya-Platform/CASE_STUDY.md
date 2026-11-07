# Case Study: Nodeya Platform Architecture

## Overview

Nodeya Platform is the target modular-monolith foundation for approved shared capabilities such as platform accounts, subscriptions, billing, identity, audit, notifications, and file storage. Older standalone compatibility services remain in use during migration. Product APIs retain responsibility for their own data authorization and domain rules.

## My role

Founder and Solution Architect responsible for defining platform and product boundaries, identity and access direction, service contracts, and migration sequencing; hands-on work includes scoped integration patterns and implementation across the Nodeya portfolio.

## Architecture decisions

- Keep product-owned records and rules in their owning product; share only through explicit contracts.
- Distinguish platform account and billing identity from product tenant, organization, and user identity. Nexora is the canonical enterprise tenant, organization, and membership directory for approved integrations.
- Require exact tenant and active organization context for organization-scoped customer data. Each product boundary needs its own authorization and runtime denial evidence.
- Use durable outbox delivery and idempotency for cross-service writes where an approved contract is in place.
- Migrate capability ownership incrementally to the modular platform while preserving compatibility routes and rollback paths.

## Product boundaries

The platform is not a universal account system for every Nodeya product. NexOne and NexAds keep separate entry and commercial flows; NexUW remains a regulated standalone product. Nex Suite membership and product-specific integration status follow the current Charter and readiness ledger.

## Technology profile

- C#/.NET and ASP.NET Core
- PostgreSQL and Entity Framework Core
- Keycloak OIDC/JWT and YARP
- Docker Compose and pnpm/Turborepo
- Scoped APIs, durable outbox delivery, and idempotency

## Status and evidence

The Nodeya readiness ledger dated 2026-11-05 documents implementation, integration, verification, deployment, and customer availability as separate states. Several platform routes have build/configuration evidence but still require runtime isolation, migration, rollback, and release qualification. This case study describes architecture and selected implementation patterns; it does not claim that all products have cut over or are production-ready.

No credentials, customer data, private source code, or production configuration are included.
