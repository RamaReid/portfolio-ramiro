import { useMemo, useState } from 'react';
import dagre from '@dagrejs/dagre';
import {
  Background,
  Controls,
  MarkerType,
  MiniMap,
  Panel,
  ReactFlow,
  ReactFlowProvider,
  Position,
  useEdgesState,
  useNodesState,
  useReactFlow,
  type Edge,
  type Node,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import type { GraphEdge, GraphNode } from '../data/portfolio';

type ExplorerProps = {
  graphNodes: GraphNode[];
  graphEdges: GraphEdge[];
};

type FlowNodeData = {
  label: string;
  kind: GraphNode['kind'];
  description: string;
};

const NODE_WIDTH = 190;
const NODE_HEIGHT = 72;

function layoutGraph(graphNodes: GraphNode[], graphEdges: GraphEdge[]) {
  const graph = new dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));
  graph.setGraph({ rankdir: 'LR', nodesep: 36, ranksep: 86, marginx: 24, marginy: 24 });

  graphNodes.forEach((node) => graph.setNode(node.id, { width: NODE_WIDTH, height: NODE_HEIGHT }));
  graphEdges.forEach((edge) => graph.setEdge(edge.source, edge.target));
  dagre.layout(graph);

  const nodes: Node<FlowNodeData>[] = graphNodes.map((node) => {
    const position = graph.node(node.id);
    return {
      id: node.id,
      position: { x: position.x - NODE_WIDTH / 2, y: position.y - NODE_HEIGHT / 2 },
      data: { label: node.label, kind: node.kind, description: node.description },
      className: `map-node map-node--${node.kind}`,
      ariaRole: 'button',
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    };
  });

  const edges: Edge[] = graphEdges.map((edge) => ({
    id: edge.id,
    source: edge.source,
    target: edge.target,
    label: edge.label,
    type: 'smoothstep',
    markerEnd: { type: MarkerType.ArrowClosed },
    data: { explanation: edge.explanation },
  }));

  return { nodes, edges };
}

function ViewActions() {
  const { fitView } = useReactFlow();

  return (
    <button className="flow-reset" type="button" onClick={() => fitView({ duration: 300, padding: 0.18 })}>
      Restablecer vista
    </button>
  );
}

function ExplorerCanvas({ graphNodes, graphEdges }: ExplorerProps) {
  const initial = useMemo(() => layoutGraph(graphNodes, graphEdges), [graphNodes, graphEdges]);
  const [nodes, , onNodesChange] = useNodesState(initial.nodes);
  const [edges, , onEdgesChange] = useEdgesState(initial.edges);
  const [activeId, setActiveId] = useState('garcia-delillo');
  const [stageFilter, setStageFilter] = useState('all');

  const activeNode = graphNodes.find((node) => node.id === activeId) ?? graphNodes[0];
  const connectedIds = useMemo(() => {
    const related = new Set([activeId]);
    graphEdges.forEach((edge) => {
      if (edge.source === activeId) related.add(edge.target);
      if (edge.target === activeId) related.add(edge.source);
    });
    return related;
  }, [activeId, graphEdges]);

  const displayedNodes = nodes.map((node) => {
    const stageMatches = stageFilter === 'all' || node.id === stageFilter || connectedIds.has(node.id);
    const focusMatches = activeId === '' || connectedIds.has(node.id);
    return {
      ...node,
      className: `${node.className ?? ''}${focusMatches ? '' : ' is-dimmed'}${stageMatches ? '' : ' is-filtered'}`,
    };
  });

  const displayedEdges = edges.map((edge) => {
    const isConnected = edge.source === activeId || edge.target === activeId;
    return { ...edge, className: isConnected ? 'is-connected' : '' };
  });

  return (
    <div className="explorer-interactive">
      <div className="explorer-toolbar" aria-label="Filtros del mapa">
        <span className="toolbar-label">Ver etapa:</span>
        <button className={stageFilter === 'all' ? 'filter-button is-active' : 'filter-button'} type="button" onClick={() => setStageFilter('all')}>
          Todas
        </button>
        {graphNodes.filter((node) => node.kind === 'stage').map((stage) => (
          <button className={stageFilter === stage.id ? 'filter-button is-active' : 'filter-button'} type="button" key={stage.id} onClick={() => setStageFilter(stage.id)}>
            {stage.label}
          </button>
        ))}
      </div>

      <div className="flow-shell" aria-label="Mapa interactivo de proyectos y capacidades">
        <ReactFlow
          nodes={displayedNodes}
          edges={displayedEdges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={(_, node) => setActiveId(node.id)}
          fitView
          nodesFocusable
          edgesFocusable
          minZoom={0.35}
          maxZoom={1.7}
          defaultEdgeOptions={{ animated: false }}
        >
          <Background color="#dbe4e1" gap={24} size={1} />
          <Controls showInteractive={false} />
          <MiniMap pannable zoomable nodeColor={(node) => {
            const kind = (node.data as FlowNodeData | undefined)?.kind;
            return kind === 'case' ? '#e17b54' : kind === 'stage' ? '#467c7a' : kind === 'capability' ? '#b28a45' : '#26454b';
          }} />
          <Panel position="top-right"><ViewActions /></Panel>
        </ReactFlow>
      </div>

      <aside className="node-detail" aria-live="polite" aria-label="Detalle del nodo seleccionado">
        <p className="eyebrow">Nodo seleccionado</p>
        <h3>{activeNode.label}</h3>
        <p>{activeNode.description}</p>
        <a className="text-link" href={activeNode.href}>Abrir detalle</a>
      </aside>
    </div>
  );
}

export default function Explorer(props: ExplorerProps) {
  return (
    <ReactFlowProvider>
      <ExplorerCanvas {...props} />
    </ReactFlowProvider>
  );
}
