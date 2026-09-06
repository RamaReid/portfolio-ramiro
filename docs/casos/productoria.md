# Caso Productoria · Genio Productor

**Estado editorial:** aprobado para la versión local del portfolio.
**Caso:** `productoria`
**Fuente principal:** [productoria/bci-next-app](https://github.com/productoria/bci-next-app)
**Instantánea revisada:** `20567e6e1f0a4afe386386118db2ca93847975f0`
**Fecha del commit revisado:** 11 de diciembre de 2024.

## Alcance

Este caso presenta un prototipo de producto digital para entrevistar a una persona sobre su empresa y convertir la información de la conversación en un mapa de nodos y relaciones. La interfaz combina chat y diagrama; el estado se conserva como eventos asociados a una sesión.

La participación se registra como autoría y coautoría del proyecto, según la declaración del titular del portfolio. La ficha describe la implementación observable en la instantánea revisada. No presenta métricas, resultados comerciales, cantidad de usuarios ni disponibilidad productiva porque la fuente consultada no los respalda.

## Afirmaciones y clasificación

| ID | Texto utilizado | Tipo | Fuente | Estado |
|---|---|---|---|---|
| PIA-01 | El prototipo guía una entrevista sobre la persona y su empresa para construir una representación gráfica. | Hecho respaldado | `ai/agents/charismatic-first-session/README.md` y `promptIA.ts` | Aprobado |
| PIA-02 | El dashboard registra mensajes y eventos del diagrama, y reconstruye nodos y relaciones de una sesión. | Hecho respaldado | `components/wizard/dashboard.tsx`, `domain/event.ts` y `domain/wizard.ts` | Aprobado |
| PIA-03 | El agente puede agregar y quitar nodos y aristas mediante herramientas de la conversación. | Hecho respaldado | `ai/agents/charismatic-first-session/index.ts` y `components/wizard/dashboard.tsx` | Aprobado |
| PIA-04 | React Flow se utiliza para visualizar el diagrama y el laboratorio permite cargar conversaciones con nodos y aristas. | Hecho respaldado | `components/wizard/wizard-chat.tsx` y `app/laboratorio/component.tsx` | Aprobado |
| PIA-05 | La aplicación utiliza Next.js, React, TypeScript, OpenAI, React Flow y DynamoDB en la instantánea revisada. | Hecho respaldado | `package.json`, `ai/agents/charismatic-first-session/index.ts`, `domain/` y `lib/dynamodb.ts` | Aprobado |
| PIA-06 | La participación de Ramiro se presenta como autoría y coautoría del proyecto. | Declaración curricular | Declaración del titular del portfolio | Aprobado |
| PIA-07 | El caso muestra una transferencia del método de modelado y organización hacia un producto digital. | Interpretación | Relación editorial con el eje del portfolio | Aprobado |

## Relato público

El trabajo parte de una entrevista guiada. El agente pregunta por la empresa, el rol de la persona, la estructura del equipo, el funcionamiento cotidiano y un análisis de fortalezas, oportunidades, debilidades y amenazas. La conversación se conserva como una secuencia de eventos y el sistema usa esos eventos para mantener el estado del gráfico.

Mientras la charla avanza, el agente dispone de operaciones para agregar o quitar nodos y relaciones. El diagrama se actualiza en la interfaz con React Flow y puede volver a construirse desde los eventos persistidos. Esta relación entre conversación, datos y representación es el centro del caso.

La instantánea revisada declara Next.js 14, React 18, TypeScript, OpenAI con el modelo `gpt-4o`, React Flow, DynamoDB y autenticación con Google mediante Auth.js/NextAuth. Estas referencias describen decisiones técnicas del código revisado; no constituyen una afirmación sobre versiones actuales ni sobre un despliegue activo.

## Evidencia y límites

La evidencia pública de este caso es textual y está vinculada al repositorio fuente. No se copian al portfolio el código, las conversaciones de prueba, las imágenes, las credenciales ni los datos de usuarios. La ficha tampoco afirma que el prototipo tenga usuarios activos, métricas de impacto o estado de producción.

## Capacidades relacionadas

- [Arquitectura conversacional](/capacidades/arquitectura-conversacional/)
- [Modelado de sistemas](/capacidades/modelado-de-sistemas/)
- [Diagnóstico organizacional](/capacidades/diagnostico-organizacional/)
- [Diseño de workflows](/capacidades/diseno-de-workflows/)