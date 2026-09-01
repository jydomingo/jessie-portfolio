# Case Study: NexGrid Solar Monitoring

## Executive summary

NexGrid is a solar monitoring application designed to provide real-time and historical visibility into devices, energy activity, alerts, and performance across multiple sites.

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

NexGrid combines real-time dashboards, device management, alerts, historical energy data, reporting, multi-site access, and role-based permissions. SignalR supports live application updates, while MQTT provides a foundation for device-oriented messaging and telemetry integration.

The design separates device communication, application services, historical data, reporting, and user access concerns so each area can evolve without tightly coupling the entire solution.

## Technology profile

- .NET application services
- React-based user interface direction
- SignalR for real-time updates
- MQTT for device messaging
- Historical data and reporting
- Multi-site, role-based access

## Portfolio outcome

The project demonstrates real-time application architecture, device integration, operational dashboards, historical reporting, and access control for a multi-site monitoring scenario.

## Status and boundaries

This public case study documents the product’s functional and architectural scope. It excludes source code, device credentials, private telemetry, customer information, infrastructure configuration, and operational security details.

