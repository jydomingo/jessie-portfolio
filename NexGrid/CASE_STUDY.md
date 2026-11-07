# Case Study: NexGrid Solar Monitoring

## Executive summary

NexGrid is an independently developed solar-monitoring product with application screens and service boundaries for sites, devices, energy history, alerts, and reporting.

## The challenge

Distributed solar operations need timely visibility into device status, energy history, anomalies, and site-level performance. Without a centralized monitoring experience, operational teams may struggle to identify issues, compare sites, control access, and produce consistent reports.

## My role

Solution Architect and Software Developer responsible for:

- Monitoring workflow and dashboard design
- Device and multi-site data model direction
- Real-time communication architecture
- Alert, history, and reporting scope
- Role-based access planning
- SignalR and MQTT integration

## Solution approach

The current product code includes device and site workflows, dashboards, historical data, alerts, reporting, and SignalR-based application updates. MQTT ingestion is provisioned in the architecture but is not yet wired end to end. Device ownership and canonical user-to-organization membership also require further verification before shared platform event routes can be enabled.

The design separates device communication, application services, historical data, reporting, and user access concerns so each area can evolve without tightly coupling the entire solution.

## Technology profile

- .NET application services
- React-based user interface direction
- SignalR for real-time updates
- MQTT integration foundation (end-to-end ingestion remains open)
- Historical data and reporting
- Multi-site, role-based access

## Portfolio outcome

The project demonstrates product architecture and interface work for a multi-site monitoring scenario, including a clear separation between product-owned telemetry and shared platform capabilities.

## Status and boundaries

The Nodeya readiness review dated 2026-11-05 records MQTT ingestion and canonical site/device ownership verification as open work. This case study does not claim a production telemetry pipeline or customer deployment. It excludes source code, device credentials, private telemetry, customer information, infrastructure configuration, and operational security details.
