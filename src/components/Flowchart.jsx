import React from 'react';

const Flowchart = ({ lang }) => {
  const t = {
    prototype: { zh: '原型开发', en: 'Prototype' },
    greenlight: { zh: '项目立项', en: 'Greenlight' },
    dev: { zh: '游戏开发', en: 'Development' },
    test: { zh: '游戏测试', en: 'Testing' },
    release: { zh: '发行准备', en: 'Release' }
  };

  return (
    <div style={{ width: '100%', maxWidth: '800px', margin: '40px auto 0 auto' }}>
      <svg viewBox="0 0 800 500" width="100%" height="100%">
        <defs>
          <marker id="arrow-down" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--text-primary)" />
          </marker>
          <marker id="arrow-right" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--text-primary)" />
          </marker>
        </defs>

        <style>
          {`
            .node-group {
              transition: transform 0.3s ease;
              filter: drop-shadow(0 8px 15px rgba(0,0,0,0.04));
              cursor: default;
            }
            .node-group:hover {
              transform: translateY(-5px);
              filter: drop-shadow(0 15px 30px rgba(0,0,0,0.08));
            }
            .box { fill: var(--card-bg); }
            .box-text { fill: var(--text-primary); font-family: 'Inter', sans-serif; font-size: 16px; font-weight: 600; text-anchor: middle; dominant-baseline: middle; pointer-events: none; }
            .line { stroke: var(--text-primary); stroke-width: 2px; fill: none; }
          `}
        </style>

        {/* --- Arrows --- */}
        <line x1="400" y1="110" x2="400" y2="180" className="line" markerEnd="url(#arrow-down)" />
        <polyline points="400,250 400,290 200,290 200,320" className="line" markerEnd="url(#arrow-down)" />
        <polyline points="400,250 400,320" className="line" markerEnd="url(#arrow-down)" />
        <polyline points="400,250 400,290 600,290 600,320" className="line" markerEnd="url(#arrow-down)" />

        {/* Loopback C, D, E -> A */}
        <line x1="200" y1="390" x2="200" y2="430" className="line" />
        <line x1="400" y1="390" x2="400" y2="430" className="line" />
        <line x1="600" y1="390" x2="600" y2="430" className="line" />
        <line x1="200" y1="430" x2="600" y2="430" className="line" />
        <polyline points="200,430 60,430 60,80 310,80" className="line" markerEnd="url(#arrow-right)" />

        {/* --- Nodes --- */}
        <g className="node-group">
          <rect x="320" y="50" width="160" height="60" className="box" />
          <text x="400" y="80" className="box-text">{t.prototype[lang]}</text>
        </g>

        <g className="node-group">
          <rect x="320" y="190" width="160" height="60" className="box" />
          <text x="400" y="220" className="box-text">{t.greenlight[lang]}</text>
        </g>

        <g className="node-group">
          <rect x="120" y="330" width="160" height="60" className="box" />
          <text x="200" y="360" className="box-text">{t.dev[lang]}</text>
        </g>

        <g className="node-group">
          <rect x="320" y="330" width="160" height="60" className="box" />
          <text x="400" y="360" className="box-text">{t.test[lang]}</text>
        </g>

        <g className="node-group">
          <rect x="520" y="330" width="160" height="60" className="box" />
          <text x="600" y="360" className="box-text">{t.release[lang]}</text>
        </g>
      </svg>
    </div>
  );
};

export default Flowchart;
