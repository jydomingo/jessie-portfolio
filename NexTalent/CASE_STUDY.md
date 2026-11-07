# Case Study: NexTalent HR and Workforce System

## Overview

NexTalent is the HR and workforce system of record for the NexSuite core. Its scope covers employee records, employment, compensation, benefits, payroll, statutory compliance, time and attendance, leave, onboarding, performance, and employee/manager self-service.

## Product boundaries

NexTalent owns HR and payroll records and approved outcomes. Employee and manager workflows include self-service, approvals, HR documents, onboarding/offboarding, and workforce administration. Integrations with the organization portal and shared services follow explicit identity and data contracts.

## Implementation profile

- React, TypeScript, and Vite web application
- ASP.NET Core APIs and background workers
- PostgreSQL-backed data access and modular application structure
- OIDC sign-in and organization-scoped authorization paths
- Unit, integration, and architecture test projects

## Status and boundaries

The Nodeya readiness ledger dated 2026-11-05 describes broad HR capabilities and documented migration/onboarding work. Payroll close, statutory filing, privacy/retention checks, and production qualification remain separate gates. This case study does not claim production payroll availability and excludes employee records, compensation data, credentials, and private operational details.
