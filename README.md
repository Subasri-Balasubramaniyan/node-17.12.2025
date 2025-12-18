🧩 Topic 8: Microservices & Architecture
📌 Overview

This module introduces microservices architecture, explains how it differs from a monolithic system, and covers essential architectural patterns such as service communication, API Gateway, and service discovery.

By the end of this topic, you will understand how large-scale backend systems are designed and scaled.

📚 Microservices Basics
What are Microservices?

Microservices is an architectural style where an application is broken into small, independent services, each responsible for a single business capability.

Each service:

Runs independently

Has its own database (recommended)

Can be deployed separately

Communicates via APIs or messaging

Key Characteristics

🔹 Loosely coupled

🔹 Independently deployable

🔹 Technology agnostic

🔹 Scalable per service

🏗️ Monolith vs Microservices
Monolithic Architecture

In a monolithic application:

All features are in one codebase

Single deployment unit

Shared database

❌ Problems

Hard to scale

Slow deployments

One bug can crash the entire app

Microservices Architecture

In microservices:

Application is split into multiple services

Each service has its own responsibility

✅ Benefits

Independent scaling

Faster deployments

Fault isolation

Easy to maintain large systems

Comparison Table
Feature	Monolith	Microservices
Codebase	Single	Multiple
Deployment	Single	Independent
Scalability	Difficult	Easy
Fault Isolation	No	Yes
Maintenance	Hard	Easier
🔄 Service Communication Patterns

Microservices must communicate with each other to complete business workflows.

1️⃣ Synchronous Communication

HTTP / REST APIs

One service waits for another

Example:
Order Service → Payment Service

Pros

Simple to implement
Cons

Tight coupling

Slower response chains

2️⃣ Asynchronous Communication

Message queues

Event-based

Example:
Order Created → Event Published → Inventory Updated

Pros

Decoupled services

Better scalability
Cons

Complex debugging

🚪 API Gateway Pattern

An API Gateway acts as a single entry point for all clients.

Responsibilities

Routing requests

Authentication & authorization

Rate limiting

Request aggregation

Benefits

Clients don’t talk to services directly

Centralized security

Cleaner architecture

Flow
Client → API Gateway → Microservices

🔍 Service Discovery

In microservices, services frequently change IPs and ports.

Service Discovery solves this by allowing services to:

Register themselves

Discover other services dynamically

Two Types

Client-Side Discovery

Client asks registry for service location

Server-Side Discovery

Load balancer handles discovery

Popular Tools

Service registries

Load balancers

Container orchestration platforms

🧠 Why These Patterns Matter

These patterns help you build systems that are:

Highly available

Scalable

Fault tolerant

Production ready

They are used by real-world systems like e-commerce platforms, banking apps, and streaming services.

🎯 Learning Outcomes

After completing this topic, you will be able to:

Explain microservices architecture

Compare monolith vs microservices

Choose correct communication patterns

Understand API Gateway usage

Implement basic service discovery concepts

