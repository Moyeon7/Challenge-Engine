interface StatsPanelProps {
  total?: number
  completed?: number
  active?: number
  overdue?: number
  completedPercentage?: number
}

export default function StatsPanel(_props: StatsPanelProps) {
  return (
    <div id="stats-panel">
      <p>Total Tasks: {_props.total}</p>
      <p>Completed: {_props.completed}</p>
      <p>Active: {_props.active}</p>
      <p>Overdue: {_props.overdue}</p>

      <p>Completion: {_props.completedPercentage}%</p>

      <div
        role="progressbar"
        style={{
          width: "100%",
          height: "10px",
          background: "#eee",
          borderRadius: "6px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${_props.completedPercentage}%`,
            height: "100%",
            background: "green",
          }}
        />
      </div>
    </div>
  );
}
