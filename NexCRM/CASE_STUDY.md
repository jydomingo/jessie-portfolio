# Case Study: NexCRM

## Overview

NexCRM is the CRM product in the NexSuite core, scoped for organization-aware relationship and sales workflows.

## Initial implementation slice

The current repository documents SSO, verified organization scope, and an initial accounts/contacts CRUD slice. The wider CRM product scope includes relationship management and sales workflows, with governed AI assistance defined in the product specification.

## Product boundaries

NexCRM owns its CRM records and identity-to-organization mapping. Its account and contact identifiers are distinct from customer records owned by NexOne and transactional parties owned by NexTrade; integrations require an explicit contract and crosswalk.

## Status and boundaries

The Nodeya apps inventory dated 2026-11-05 says the current slice is not yet sellable or production-ready. This case study describes the implemented foundation and product direction, not a complete CRM rollout. It excludes customer data, private source code, credentials, and internal configuration.
