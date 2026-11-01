import type { FlowNode } from "@/data/projects";
import { cn } from "@/lib/utils";

const W = 360;
const H = 110;
const NODE_W = 72;
const PAD = 14;

const columnYs = (node: FlowNode) => (Array.isArray(node) ? [33, 77] : [55]);
const columnLabels = (node: FlowNode) => (Array.isArray(node) ? node : [node]);

interface FlowDiagramProps {
  nodes: FlowNode[];
  active: number;
  className?: string;
}

export function FlowDiagram({ nodes, active, className }: FlowDiagramProps) {
  const cols = nodes.length;
  const pitch = (W - PAD * 2 - NODE_W) / (cols - 1);
  const cx = (i: number) => PAD + NODE_W / 2 + i * pitch;

  const connectors: string[] = [];
  for (let i = 0; i < cols - 1; i++) {
    const x1 = cx(i) + NODE_W / 2;
    const x2 = cx(i + 1) - NODE_W / 2;
    const xm = (x1 + x2) / 2;
    const from = columnYs(nodes[i]);
    const to = columnYs(nodes[i + 1]);

    if (from.length === to.length) {
      from.forEach((y) => connectors.push(`M${x1} ${y} H${x2}`));
    } else {
      from.forEach((ya) =>
        to.forEach((yb) =>
          connectors.push(
            ya === yb
              ? `M${x1} ${ya} H${x2}`
              : `M${x1} ${ya} H${xm} V${yb} H${x2}`
          )
        )
      );
    }
  }

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className={cn("w-full h-auto", className)}
      role="img"
      aria-label={`Pipeline: ${nodes
        .map((n) => columnLabels(n).join(" or "))
        .join(", then ")}`}
    >
      {connectors.map((d, i) => (
        <path key={`l-${i}`} d={d} className="flow-line" />
      ))}

      {connectors.map((d, i) => (
        <circle key={`p-${i}`} r="1.8" className="flow-packet">
          <animateMotion
            dur="2.6s"
            begin={`${(i % 4) * 0.55}s`}
            repeatCount="indefinite"
            path={d}
          />
        </circle>
      ))}

      {nodes.map((node, i) => {
        const ys = columnYs(node);
        const labels = columnLabels(node);
        const h = ys.length === 2 ? 24 : 28;
        const isActive = i === active;
        return labels.map((label, k) => (
          <g key={`${i}-${k}`}>
            <rect
              x={cx(i) - NODE_W / 2}
              y={ys[k] - h / 2}
              width={NODE_W}
              height={h}
              rx={5}
              className={cn("flow-node", isActive && "flow-node--active")}
            />
            <text
              x={cx(i)}
              y={ys[k]}
              className={cn("flow-label", isActive && "flow-label--active")}
            >
              {label}
            </text>
          </g>
        ));
      })}
    </svg>
  );
}
