# Case Study: NexDesk IT Service Desk

## Overview

NexDesk is the IT service-management system of record for support tickets, incidents, service requests, and related technical operations.

## Product scope

The product organizes support work across ticket intake and assignment, incident handling, service operations, asset context, service-level workflows, and knowledge resources. Ticket assignment supports searching active tenant users; product identity and account-to-tenant mapping remain explicit integration concerns.

## Implementation profile

- React and TypeScript application
- ASP.NET Core API
- Tenant-scoped support workflows and role-aware access
- Search-assisted assignee selection
- Product-owned service and incident records

## Status and boundaries

The Nodeya readiness ledger dated 2026-11-05 records substantial ITSM modules while noting that identity/account mapping, migration/backfill, and some workflow acceptance remain open. This case study does not claim that every workflow is release-qualified or production-ready, and excludes private support tickets, user data, and infrastructure details.
