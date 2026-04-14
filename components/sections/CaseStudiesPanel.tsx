"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, PieChart, BarChart2, Shield } from "lucide-react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart as RePieChart,
  Pie,
  Cell,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// ── Data ────────────────────────────────────────────────────────
const retirementData = [
  { age: "35", conservative: 150, balanced: 150, growth: 150 },
  { age: "40", conservative: 215, balanced: 270, growth: 340 },
  { age: "45", conservative: 295, balanced: 420, growth: 580 },
  { age: "50", conservative: 410, balanced: 620, growth: 980 },
  { age: "55", conservative: 560, balanced: 900, growth: 1560 },
  { age: "60", conservative: 750, balanced: 1260, growth: 2380 },
  { age: "65", conservative: 990, balanced: 1720, growth: 3500 },
];

const allocationData = [
  { name: "Australian Equities", value: 35, color: "#4A90E2" },
  { name: "International Equities", value: 25, color: "#C9A84C" },
  { name: "Fixed Income", value: 20, color: "#6EB3F7" },
  { name: "Property", value: 10, color: "#E2A84A" },
  { name: "Alternatives", value: 5, color: "#A78BFA" },
  { name: "Cash", value: 5, color: "#4CAF50" },
];

const fundData = [
  { fund: "Fund A", returns5yr: 8.2, returns10yr: 7.8, fees: 0.50 },
  { fund: "Fund B", returns5yr: 9.1, returns10yr: 8.3, fees: 0.85 },
  { fund: "Current", returns5yr: 7.5, returns10yr: 7.2, fees: 0.35 },
  { fund: "Fund D", returns5yr: 10.2, returns10yr: 9.1, fees: 1.20 },
];

const insuranceData = [
  { subject: "Death Cover", A: 85, fullMark: 100 },
  { subject: "TPD", A: 70, fullMark: 100 },
  { subject: "Income Prot.", A: 60, fullMark: 100 },
  { subject: "Trauma Cover", A: 45, fullMark: 100 },
  { subject: "Premium Value", A: 78, fullMark: 100 },
];

// ── Tooltip ──────────────────────────────────────────────────────
const DarkTooltip = ({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: Array<{ name: string; value: number; color: string }>;
  label?: string;
}) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-[#0F1E38] border border-white/10 rounded-xl p-3 shadow-2xl text-xs">
      {label && <p className="text-[#8B9EC7] mb-2 font-medium">{label}</p>}
      {payload.map((entry) => (
        <div key={entry.name} className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: entry.color }} />
          <span className="text-[#8B9EC7]">{entry.name}:</span>
          <span className="text-white font-semibold">{entry.value}</span>
        </div>
      ))}
    </div>
  );
};

const tabs = [
  { id: "retirement", label: "Retirement Projection", icon: TrendingUp, color: "#4A90E2" },
  { id: "allocation", label: "Portfolio Allocation", icon: PieChart, color: "#C9A84C" },
  { id: "funds", label: "Fund Comparison", icon: BarChart2, color: "#A78BFA" },
  { id: "insurance", label: "Insurance Analysis", icon: Shield, color: "#4CAF50" },
];

export default function CaseStudiesPanel() {
  const [activeTab, setActiveTab] = useState("retirement");
  const [activeAlloc, setActiveAlloc] = useState<number | null>(null);

  return (
    <>
      {/* Tab buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap justify-center gap-3 mb-10"
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 border ${
                isActive
                  ? "text-white border-transparent shadow-lg"
                  : "text-[#8B9EC7] border-white/[0.07] hover:text-white hover:border-white/15 bg-transparent"
              }`}
              style={
                isActive
                  ? { background: `${tab.color}20`, borderColor: `${tab.color}40`, color: tab.color }
                  : {}
              }
            >
              <tab.icon size={14} />
              {tab.label}
            </button>
          );
        })}
      </motion.div>

      {/* Chart panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
          className="gradient-border rounded-2xl overflow-hidden"
          style={{ background: "#050E1D" }}
        >
          <div className="p-6 md:p-8">

            {/* ── Retirement Projection ── */}
            {activeTab === "retirement" && (
              <div>
                <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1">Retirement Wealth Projection</h3>
                    <p className="text-[#8B9EC7] text-sm max-w-lg">
                      Modelled wealth accumulation across Conservative, Balanced and Growth strategies
                      from age 35 to retirement at 65. Values in AUD thousands.
                    </p>
                  </div>
                  <div className="flex gap-4 text-xs flex-shrink-0">
                    {[
                      { label: "Conservative", color: "#8B9EC7" },
                      { label: "Balanced", color: "#4A90E2" },
                      { label: "Growth", color: "#C9A84C" },
                    ].map((s) => (
                      <div key={s.label} className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-sm" style={{ background: s.color }} />
                        <span style={{ color: s.color }}>{s.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={340}>
                  <AreaChart data={retirementData} margin={{ top: 10, right: 20, bottom: 0, left: 20 }}>
                    <defs>
                      <linearGradient id="gc" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8B9EC7" stopOpacity={0.2} />
                        <stop offset="95%" stopColor="#8B9EC7" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="gb" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4A90E2" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#4A90E2" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="gg" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#C9A84C" stopOpacity={0.35} />
                        <stop offset="95%" stopColor="#C9A84C" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                    <XAxis
                      dataKey="age"
                      tick={{ fill: "#8B9EC7", fontSize: 11 }}
                      axisLine={false}
                      tickLine={false}
                      label={{ value: "Age", fill: "#8B9EC7", fontSize: 11, position: "insideBottom", offset: -2 }}
                    />
                    <YAxis
                      tick={{ fill: "#8B9EC7", fontSize: 11 }}
                      axisLine={false}
                      tickLine={false}
                      tickFormatter={(v) => `$${v}K`}
                    />
                    <Tooltip content={<DarkTooltip />} formatter={(v: number) => [`$${v}K`, ""]} />
                    <Area type="monotone" dataKey="conservative" name="Conservative" stroke="#8B9EC7" strokeWidth={2} fill="url(#gc)" />
                    <Area type="monotone" dataKey="balanced" name="Balanced" stroke="#4A90E2" strokeWidth={2.5} fill="url(#gb)" />
                    <Area type="monotone" dataKey="growth" name="Growth" stroke="#C9A84C" strokeWidth={2.5} fill="url(#gg)" />
                  </AreaChart>
                </ResponsiveContainer>
                <div className="grid grid-cols-3 gap-4 mt-6">
                  {[
                    { label: "Conservative Outcome", value: "$990K", sub: "at 65 · low risk", color: "#8B9EC7" },
                    { label: "Balanced Outcome", value: "$1.72M", sub: "at 65 · moderate risk", color: "#4A90E2" },
                    { label: "Growth Outcome", value: "$3.5M", sub: "at 65 · high risk", color: "#C9A84C" },
                  ].map((s) => (
                    <div key={s.label} className="p-4 rounded-xl bg-[#0A1628] border border-white/[0.06] text-center">
                      <p className="font-bold text-lg" style={{ color: s.color }}>{s.value}</p>
                      <p className="text-white text-xs font-medium mt-0.5">{s.label}</p>
                      <p className="text-[#8B9EC7] text-[10px]">{s.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── Portfolio Allocation ── */}
            {activeTab === "allocation" && (
              <div>
                <div className="mb-6">
                  <h3 className="text-white font-bold text-xl mb-1">Portfolio Allocation Strategy</h3>
                  <p className="text-[#8B9EC7] text-sm max-w-lg">
                    Recommended balanced growth allocation for a risk-moderate client. Designed for long-term capital appreciation with diversification across asset classes.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <ResponsiveContainer width="100%" height={320}>
                    <RePieChart>
                      <Pie
                        data={allocationData}
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={130}
                        paddingAngle={3}
                        dataKey="value"
                        animationBegin={200}
                        animationDuration={1200}
                        onMouseEnter={(_, index) => setActiveAlloc(index)}
                        onMouseLeave={() => setActiveAlloc(null)}
                      >
                        {allocationData.map((entry, index) => (
                          <Cell
                            key={entry.name}
                            fill={entry.color}
                            opacity={activeAlloc === null || activeAlloc === index ? 1 : 0.5}
                            stroke="none"
                          />
                        ))}
                      </Pie>
                      <Tooltip
                        content={({ active, payload }) => {
                          if (!active || !payload?.length) return null;
                          const d = payload[0].payload;
                          return (
                            <div className="bg-[#0F1E38] border border-white/10 rounded-xl p-3 shadow-2xl text-xs">
                              <p className="text-white font-semibold mb-1">{d.name}</p>
                              <p style={{ color: d.color }} className="font-bold text-base">{d.value}%</p>
                            </div>
                          );
                        }}
                      />
                    </RePieChart>
                  </ResponsiveContainer>
                  <div className="space-y-3">
                    {allocationData.map((item, i) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.07 }}
                        className={`flex items-center justify-between p-3 rounded-xl border transition-all cursor-default ${
                          activeAlloc === i
                            ? "bg-[#0F1E38] border-white/15"
                            : "bg-[#0A1628] border-white/[0.05]"
                        }`}
                        onMouseEnter={() => setActiveAlloc(i)}
                        onMouseLeave={() => setActiveAlloc(null)}
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-3 h-3 rounded-sm flex-shrink-0" style={{ background: item.color }} />
                          <span className="text-[#8B9EC7] text-sm">{item.name}</span>
                        </div>
                        <span className="font-bold text-sm" style={{ color: item.color }}>
                          {item.value}%
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ── Fund Comparison ── */}
            {activeTab === "funds" && (
              <div>
                <div className="mb-6">
                  <h3 className="text-white font-bold text-xl mb-1">Superannuation Fund Comparison</h3>
                  <p className="text-[#8B9EC7] text-sm max-w-lg">
                    Head-to-head performance and fee analysis of four super funds using Irate, Morningstar and Chant West data, guiding members to the optimal fund choice.
                  </p>
                </div>
                <ResponsiveContainer width="100%" height={340}>
                  <BarChart data={fundData} margin={{ top: 10, right: 20, bottom: 0, left: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                    <XAxis dataKey="fund" tick={{ fill: "#8B9EC7", fontSize: 11 }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fill: "#8B9EC7", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
                    <Tooltip content={<DarkTooltip />} formatter={(v: number) => [`${v}%`, ""]} />
                    <Legend formatter={(value) => <span style={{ color: "#8B9EC7", fontSize: 11 }}>{value}</span>} />
                    <Bar dataKey="returns5yr" name="5yr Return %" fill="#4A90E2" radius={[4, 4, 0, 0]} maxBarSize={40} />
                    <Bar dataKey="returns10yr" name="10yr Return %" fill="#C9A84C" radius={[4, 4, 0, 0]} maxBarSize={40} />
                    <Bar dataKey="fees" name="Annual Fees %" fill="#A78BFA" radius={[4, 4, 0, 0]} maxBarSize={40} />
                  </BarChart>
                </ResponsiveContainer>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  {fundData.map((f) => (
                    <div key={f.fund} className="p-4 rounded-xl bg-[#0A1628] border border-white/[0.06] text-center">
                      <p className="text-[#4A90E2] font-bold text-lg">{f.returns10yr}%</p>
                      <p className="text-white text-xs font-medium mt-0.5">{f.fund}</p>
                      <p className="text-[#8B9EC7] text-[10px]">10yr return · {f.fees}% fee</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── Insurance Analysis ── */}
            {activeTab === "insurance" && (
              <div>
                <div className="mb-6">
                  <h3 className="text-white font-bold text-xl mb-1">Insurance Coverage Analysis</h3>
                  <p className="text-[#8B9EC7] text-sm max-w-lg">
                    Comprehensive insurance needs assessment covering Death Cover, TPD, Income Protection and Trauma. Benchmarked against recommended coverage levels.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <ResponsiveContainer width="100%" height={300}>
                    <RadarChart cx="50%" cy="50%" outerRadius={110} data={insuranceData}>
                      <PolarGrid stroke="rgba(255,255,255,0.08)" />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: "#8B9EC7", fontSize: 11 }} />
                      <Radar
                        name="Current Coverage"
                        dataKey="A"
                        stroke="#4CAF50"
                        fill="#4CAF50"
                        fillOpacity={0.2}
                        strokeWidth={2}
                        animationBegin={200}
                        animationDuration={1000}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                  <div className="space-y-4">
                    {insuranceData.map((ins) => (
                      <div key={ins.subject} className="space-y-1.5">
                        <div className="flex justify-between text-xs">
                          <span className="text-[#8B9EC7]">{ins.subject}</span>
                          <span className="text-white font-semibold">{ins.A}%</span>
                        </div>
                        <div className="h-2 bg-[#0F1E38] rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{
                              background:
                                ins.A >= 75 ? "#4CAF50" : ins.A >= 60 ? "#C9A84C" : "#EF4444",
                            }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${ins.A}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                          />
                        </div>
                        <p className="text-[#8B9EC7] text-[10px]">
                          {ins.A >= 75
                            ? "Adequate"
                            : ins.A >= 60
                            ? "Review recommended"
                            : "Underinsured · action required"}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer note */}
          <div className="px-6 md:px-8 py-4 border-t border-white/[0.06] bg-[#0A1628]/50">
            <p className="text-[#8B9EC7] text-xs">
              * All data is anonymised and for illustrative purposes only. Real client data is kept strictly
              confidential in accordance with privacy obligations.
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
