# Case Study: NexSpace Work and Collaboration Platform

## Overview

NexSpace is the work, project, and enterprise-content system of record for the NexSuite core.

## Product scope

The application brings together workspaces, projects, work items, Agile planning, documents, content, process, portfolio, and service-management workflows. Collaboration includes same-organization teammate assignment, attachments, and notifications.

## Implementation profile

- React and TypeScript web application
- ASP.NET Core API and PostgreSQL data storage
- OIDC authentication and tenant/organization-scoped authorization
- Modular work, content, portfolio, and service workflows
- Compatibility and Nodeya Platform integration routes

## Status and boundaries

The Nodeya readiness ledger records a local OIDC/browser/API/PostgreSQL walkthrough on 2026-10-28, including cross-organization denial and compatibility-service round trips. The currently selected Platform routes require their own runtime walkthrough, and production operations and release qualification remain open. This case study does not imply production readiness and excludes private documents, work records, and customer data.
