// "use client";
// import { useEffect, useState } from "react";

// const API = "http://localhost:5000/api/admin";

// export default function AdminPanel() {
//   const [users, setUsers]       = useState([]);
//   const [stats, setStats]       = useState(null);
//   const [loading, setLoading]   = useState(true);
//   const [filter, setFilter]     = useState("all");   // all | worker | employer | pending | verified
//   const [search, setSearch]     = useState("");
//   const [selected, setSelected] = useState(null);    // user detail modal
//   const [actionLoading, setActionLoading] = useState("");

//   useEffect(() => {
//     fetchData();
//   }, []);

//   async function fetchData() {
//     setLoading(true);
//     try {
//       const [usersRes, statsRes] = await Promise.all([
//         fetch(`${API}/users`).then(r => r.json()),
//         fetch(`${API}/stats`).then(r => r.json()),
//       ]);
//       setUsers(Array.isArray(usersRes) ? usersRes : []);
//       setStats(statsRes);
//     } catch (err) {
//       console.error(err);
//     }
//     setLoading(false);
//   }

//   async function handleVerify(userId, currentStatus) {
//     setActionLoading(userId);
//     try {
//       const endpoint = currentStatus ? "unverify" : "verify";
//       const res = await fetch(`${API}/users/${userId}/${endpoint}`, { method: "PATCH" });
//       const data = await res.json();
//       if (res.ok) {
//         setUsers(prev => prev.map(u => u._id === userId ? { ...u, isVerified: !currentStatus } : u));
//         if (selected?._id === userId) setSelected(prev => ({ ...prev, isVerified: !currentStatus }));
//       } else {
//         alert(data.error);
//       }
//     } catch (_) { alert("Failed to update"); }
//     setActionLoading("");
//   }

//   async function handleDelete(userId) {
//     if (!confirm("Delete this user permanently? This cannot be undone.")) return;
//     setActionLoading(userId);
//     try {
//       const res = await fetch(`${API}/users/${userId}`, { method: "DELETE" });
//       if (res.ok) {
//         setUsers(prev => prev.filter(u => u._id !== userId));
//         if (selected?._id === userId) setSelected(null);
//       }
//     } catch (_) { alert("Failed to delete"); }
//     setActionLoading("");
//   }

//   // ── Filter + Search ──
//   const filtered = users.filter(u => {
//     const matchFilter =
//       filter === "all"      ? true :
//       filter === "worker"   ? u.role === "worker" :
//       filter === "employer" ? u.role === "employer" :
//       filter === "pending"  ? !u.isVerified :
//       filter === "verified" ? u.isVerified : true;

//     const matchSearch = !search ||
//       u.name?.toLowerCase().includes(search.toLowerCase()) ||
//       u.email?.toLowerCase().includes(search.toLowerCase()) ||
//       u.cnic?.includes(search);

//     return matchFilter && matchSearch;
//   });

//   return (
//     <div style={{ minHeight: "100vh", background: "#f0f4f9", fontFamily: "'Outfit', sans-serif" }}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap');
//         *{box-sizing:border-box;margin:0;padding:0}
//         @keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
//         @keyframes spin{to{transform:rotate(360deg)}}
//         ::-webkit-scrollbar{width:5px}::-webkit-scrollbar-thumb{background:#cbd5e1;border-radius:6px}
//       `}</style>

//       {/* ── Header ── */}
//       <header style={{ background: "linear-gradient(135deg,#0b1526,#1a3255)", padding: "20px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//         <div>
//           <div style={{ fontSize: 22, fontWeight: 900, color: "#fff", letterSpacing: "-.4px" }}>
//             🛡️ RozgarHub <span style={{ fontSize: 13, fontWeight: 600, opacity: .5, letterSpacing: ".1em" }}>ADMIN</span>
//           </div>
//           <div style={{ fontSize: 12, color: "rgba(255,255,255,.35)", marginTop: 2 }}>User Management Panel</div>
//         </div>
//         <button onClick={fetchData} style={{ background: "rgba(255,255,255,.1)", border: "none", color: "#fff", padding: "8px 18px", borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
//           🔄 Refresh
//         </button>
//       </header>

//       <div style={{ padding: "24px 32px", maxWidth: 1200, margin: "0 auto" }}>

//         {/* ── Stats Cards ── */}
//         {stats && (
//           <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 14, marginBottom: 24, animation: "fadeIn .4s" }}>
//             {[
//               { label: "Total Users",  value: stats.total,     color: "#3b82f6", bg: "#eff6ff", icon: "👥" },
//               { label: "Workers",      value: stats.workers,   color: "#16a34a", bg: "#f0fdf4", icon: "🔧" },
//               { label: "Employers",    value: stats.employers, color: "#7c3aed", bg: "#f5f3ff", icon: "🏢" },
//               { label: "Verified",     value: stats.verified,  color: "#059669", bg: "#ecfdf5", icon: "✅" },
//               { label: "Pending",      value: stats.pending,   color: "#d97706", bg: "#fffbeb", icon: "⏳" },
//             ].map(s => (
//               <div key={s.label} style={{ background: s.bg, borderRadius: 16, padding: "18px 20px", border: `1.5px solid ${s.color}22` }}>
//                 <div style={{ fontSize: 22 }}>{s.icon}</div>
//                 <div style={{ fontSize: 28, fontWeight: 900, color: s.color, margin: "6px 0 2px" }}>{s.value}</div>
//                 <div style={{ fontSize: 12, color: "#64748b", fontWeight: 600 }}>{s.label}</div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* ── Filters + Search ── */}
//         <div style={{ background: "#fff", borderRadius: 16, padding: "16px 20px", marginBottom: 18, display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", boxShadow: "0 2px 12px rgba(0,0,0,.06)" }}>
//           <input
//             placeholder="🔍 Search by name, email or CNIC..."
//             value={search}
//             onChange={e => setSearch(e.target.value)}
//             style={{ flex: 1, minWidth: 200, padding: "10px 14px", borderRadius: 10, border: "1.5px solid #e2e8f0", fontSize: 14, outline: "none", fontFamily: "'Outfit', sans-serif" }}
//           />
//           <div style={{ display: "flex", gap: 8 }}>
//             {["all","worker","employer","pending","verified"].map(f => (
//               <button key={f} onClick={() => setFilter(f)} style={{
//                 padding: "8px 16px", borderRadius: 20, border: "none", fontSize: 12, fontWeight: 700, cursor: "pointer", transition: "all .15s",
//                 background: filter === f ? "#0f172a" : "#f1f5f9",
//                 color: filter === f ? "#fff" : "#64748b",
//                 textTransform: "capitalize",
//               }}>
//                 {f === "all" ? "All" : f === "pending" ? "⏳ Pending" : f === "verified" ? "✅ Verified" : f === "worker" ? "🔧 Workers" : "🏢 Employers"}
//               </button>
//             ))}
//           </div>
//           <span style={{ fontSize: 12, color: "#94a3b8", fontWeight: 600 }}>{filtered.length} results</span>
//         </div>

//         {/* ── User Table ── */}
//         {loading ? (
//           <div style={{ textAlign: "center", padding: 60, color: "#94a3b8" }}>
//             <div style={{ width: 40, height: 40, border: "4px solid #3b82f6", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 1s linear infinite", margin: "0 auto 14px" }} />
//             <p>Loading users...</p>
//           </div>
//         ) : (
//           <div style={{ background: "#fff", borderRadius: 18, overflow: "hidden", boxShadow: "0 2px 16px rgba(0,0,0,.07)" }}>
//             {/* Table Header */}
//             <div style={{ display: "grid", gridTemplateColumns: "2fr 2fr 1fr 1fr 1fr 1.5fr", padding: "12px 20px", background: "#f8fafc", borderBottom: "1px solid #e2e8f0", fontSize: 11, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: ".06em" }}>
//               <span>User</span>
//               <span>Contact</span>
//               <span>Role</span>
//               <span>Documents</span>
//               <span>Status</span>
//               <span>Actions</span>
//             </div>

//             {filtered.length === 0 ? (
//               <div style={{ textAlign: "center", padding: 48, color: "#94a3b8" }}>
//                 <div style={{ fontSize: 36, marginBottom: 10 }}>🔍</div>
//                 <p style={{ fontSize: 14, fontWeight: 600 }}>No users found</p>
//               </div>
//             ) : (
//               filtered.map((u, i) => (
//                 <div key={u._id} style={{
//                   display: "grid", gridTemplateColumns: "2fr 2fr 1fr 1fr 1fr 1.5fr",
//                   padding: "14px 20px", alignItems: "center",
//                   borderBottom: i < filtered.length - 1 ? "1px solid #f1f5f9" : "none",
//                   background: u.isVerified ? "#fff" : "#fffbeb",
//                   animation: "fadeIn .3s",
//                   transition: "background .2s",
//                 }}>
//                   {/* User Info */}
//                   <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//                     <div style={{
//                       width: 38, height: 38, borderRadius: "50%", flexShrink: 0,
//                       background: u.role === "worker" ? "linear-gradient(135deg,#22c55e,#16a34a)" : "linear-gradient(135deg,#3b82f6,#2563eb)",
//                       display: "flex", alignItems: "center", justifyContent: "center",
//                       fontSize: 16, fontWeight: 800, color: "#fff",
//                     }}>
//                       {u.name?.charAt(0).toUpperCase()}
//                     </div>
//                     <div>
//                       <div style={{ fontSize: 14, fontWeight: 700, color: "#0f172a" }}>{u.name}</div>
//                       <div style={{ fontSize: 11, color: "#94a3b8" }}>
//                         {new Date(u.createdAt).toLocaleDateString("en-PK")}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Contact */}
//                   <div>
//                     <div style={{ fontSize: 13, color: "#475569" }}>{u.email}</div>
//                     <div style={{ fontSize: 11, color: "#94a3b8" }}>{u.phone || "—"} · {u.cnic || "—"}</div>
//                   </div>

//                   {/* Role */}
//                   <span style={{
//                     padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 700, width: "fit-content",
//                     background: u.role === "worker" ? "#dcfce7" : "#eff6ff",
//                     color: u.role === "worker" ? "#16a34a" : "#2563eb",
//                   }}>
//                     {u.role === "worker" ? "🔧 Worker" : "🏢 Employer"}
//                   </span>

//                   {/* Documents */}
//                   <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
//                     {u.documents?.profilePhoto && <DocBadge label="📷" title="Profile Photo" done />}
//                     {u.documents?.cnicFront    && <DocBadge label="🪪" title="CNIC Front" done />}
//                     {u.documents?.cnicBack     && <DocBadge label="🪪" title="CNIC Back" done />}
//                     {u.documents?.drivingLicense && <DocBadge label="🚗" title="License" done />}
//                     {!u.documents?.profilePhoto && !u.documents?.cnicFront && (
//                       <span style={{ fontSize: 11, color: "#f59e0b" }}>No docs</span>
//                     )}
//                   </div>

//                   {/* Status */}
//                   <span style={{
//                     padding: "4px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700,
//                     background: u.isVerified ? "#dcfce7" : "#fef3c7",
//                     color: u.isVerified ? "#16a34a" : "#d97706",
//                   }}>
//                     {u.isVerified ? "✅ Verified" : "⏳ Pending"}
//                   </span>

//                   {/* Actions */}
//                   <div style={{ display: "flex", gap: 6 }}>
//                     <button
//                       onClick={() => setSelected(u)}
//                       style={{ padding: "6px 12px", borderRadius: 8, border: "1.5px solid #e2e8f0", background: "#f8fafc", color: "#475569", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
//                       👁 View
//                     </button>
//                     <button
//                       onClick={() => handleVerify(u._id, u.isVerified)}
//                       disabled={actionLoading === u._id}
//                       style={{
//                         padding: "6px 12px", borderRadius: 8, border: "none", fontSize: 12, fontWeight: 600, cursor: "pointer",
//                         background: u.isVerified ? "#fef3c7" : "#dcfce7",
//                         color: u.isVerified ? "#d97706" : "#16a34a",
//                         opacity: actionLoading === u._id ? .6 : 1,
//                       }}>
//                       {actionLoading === u._id ? "..." : u.isVerified ? "Unverify" : "✅ Verify"}
//                     </button>
//                     <button
//                       onClick={() => handleDelete(u._id)}
//                       disabled={actionLoading === u._id}
//                       style={{ padding: "6px 10px", borderRadius: 8, border: "none", background: "#fef2f2", color: "#ef4444", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
//                       🗑
//                     </button>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
//         )}
//       </div>

//       {/* ── User Detail Modal ── */}
//       {selected && (
//         <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.6)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: 24, backdropFilter: "blur(4px)" }}>
//           <div style={{ background: "#fff", borderRadius: 24, width: "100%", maxWidth: 600, maxHeight: "90vh", overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 32px 80px rgba(0,0,0,.3)", animation: "fadeIn .3s" }}>

//             {/* Modal Header */}
//             <div style={{ background: "linear-gradient(135deg,#0f172a,#1e3a5f)", padding: "22px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
//               <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
//                 <div style={{ width: 46, height: 46, borderRadius: "50%", background: selected.role === "worker" ? "linear-gradient(135deg,#22c55e,#16a34a)" : "linear-gradient(135deg,#3b82f6,#2563eb)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, fontWeight: 900, color: "#fff" }}>
//                   {selected.name?.charAt(0).toUpperCase()}
//                 </div>
//                 <div>
//                   <div style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>{selected.name}</div>
//                   <div style={{ fontSize: 12, color: "rgba(255,255,255,.5)" }}>{selected.email}</div>
//                 </div>
//               </div>
//               <button onClick={() => setSelected(null)} style={{ background: "rgba(255,255,255,.15)", border: "none", color: "#fff", padding: 8, borderRadius: 10, cursor: "pointer", fontSize: 18 }}>×</button>
//             </div>

//             {/* Modal Body */}
//             <div style={{ padding: 28, overflowY: "auto", flex: 1 }}>

//               {/* Info Grid */}
//               <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
//                 {[
//                   { label: "Role",   value: selected.role },
//                   { label: "Phone",  value: selected.phone || "—" },
//                   { label: "CNIC",   value: selected.cnic || "—" },
//                   { label: "Email Verified", value: selected.isEmailVerified ? "✅ Yes" : "❌ No" },
//                   { label: "Admin Verified", value: selected.isVerified ? "✅ Yes" : "⏳ Pending" },
//                   { label: "Joined",  value: new Date(selected.createdAt).toLocaleDateString("en-PK") },
//                 ].map(info => (
//                   <div key={info.label} style={{ background: "#f8fafc", borderRadius: 10, padding: "12px 14px" }}>
//                     <div style={{ fontSize: 11, color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 4 }}>{info.label}</div>
//                     <div style={{ fontSize: 14, fontWeight: 600, color: "#0f172a" }}>{info.value}</div>
//                   </div>
//                 ))}
//               </div>

//               {/* Documents */}
//               <h4 style={{ fontSize: 13, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 14 }}>📎 Uploaded Documents</h4>

//               <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
//                 {[
//                   { key: "profilePhoto",   label: "Profile Photo",   icon: "📷" },
//                   { key: "cnicFront",      label: "CNIC Front",      icon: "🪪" },
//                   { key: "cnicBack",       label: "CNIC Back",       icon: "🪪" },
//                   { key: "drivingLicense", label: "Driving License", icon: "🚗" },
//                 ].map(doc => {
//                   const url = selected.documents?.[doc.key];
//                   return (
//                     <div key={doc.key} style={{ border: "1.5px solid #e2e8f0", borderRadius: 12, overflow: "hidden" }}>
//                       <div style={{ padding: "10px 14px", background: "#f8fafc", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//                         <span style={{ fontSize: 13, fontWeight: 600, color: "#475569" }}>{doc.icon} {doc.label}</span>
//                         <span style={{ fontSize: 11, fontWeight: 700, color: url ? "#16a34a" : "#94a3b8" }}>
//                           {url ? "✅ Uploaded" : "❌ Not uploaded"}
//                         </span>
//                       </div>
//                       {url && (
//                         <div style={{ padding: 10 }}>
//                           {url.match(/\.(jpg|jpeg|png|webp)$/i) ? (
//                             <img src={url} alt={doc.label} style={{ width: "100%", maxHeight: 200, objectFit: "contain", borderRadius: 8, background: "#f1f5f9" }} />
//                           ) : (
//                             <a href={url} target="_blank" rel="noreferrer" style={{ fontSize: 13, color: "#3b82f6", fontWeight: 600 }}>
//                               📄 View PDF Document
//                             </a>
//                           )}
//                         </div>
//                       )}
//                     </div>
//                   );
//                 })}
//               </div>

//               {/* Action Buttons */}
//               <div style={{ display: "flex", gap: 10 }}>
//                 <button
//                   onClick={() => handleVerify(selected._id, selected.isVerified)}
//                   disabled={actionLoading === selected._id}
//                   style={{
//                     flex: 1, padding: "14px", borderRadius: 12, border: "none", fontSize: 14, fontWeight: 700, cursor: "pointer",
//                     background: selected.isVerified ? "linear-gradient(135deg,#f59e0b,#d97706)" : "linear-gradient(135deg,#22c55e,#16a34a)",
//                     color: "#fff",
//                     opacity: actionLoading === selected._id ? .6 : 1,
//                   }}>
//                   {actionLoading === selected._id ? "Processing..." : selected.isVerified ? "⚠️ Remove Verification" : "✅ Verify This User"}
//                 </button>
//                 <button
//                   onClick={() => handleDelete(selected._id)}
//                   style={{ padding: "14px 18px", borderRadius: 12, border: "none", background: "#fef2f2", color: "#ef4444", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
//                   🗑 Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// function DocBadge({ label, title, done }) {
//   return (
//     <span title={title} style={{
//       padding: "3px 7px", borderRadius: 6, fontSize: 13,
//       background: done ? "#dcfce7" : "#f1f5f9",
//       cursor: "default",
//     }}>
//       {label}
//     </span>
//   );
// }


"use client";
import { useEffect, useState } from "react";

const API = "http://localhost:5000/api/admin";

// ── Stat Card ──
function StatCard({ icon, label, value, color }) {
  const colors = {
    blue:   { bg: "#EBF3FF", text: "#1A56DB", border: "#BFDBFE" },
    green:  { bg: "#ECFDF5", text: "#065F46", border: "#A7F3D0" },
    purple: { bg: "#F5F3FF", text: "#5B21B6", border: "#DDD6FE" },
    amber:  { bg: "#FFFBEB", text: "#92400E", border: "#FDE68A" },
    red:    { bg: "#FEF2F2", text: "#991B1B", border: "#FECACA" },
  };
  const c = colors[color] || colors.blue;
  return (
    <div style={{
      background: c.bg, border: `1px solid ${c.border}`,
      borderRadius: 14, padding: "18px 20px",
      display: "flex", alignItems: "center", gap: 14,
    }}>
      <div style={{
        width: 44, height: 44, borderRadius: 12,
        background: "#fff", border: `1px solid ${c.border}`,
        display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20,
        flexShrink: 0,
      }}>{icon}</div>
      <div>
        <div style={{ fontSize: 26, fontWeight: 800, color: c.text, lineHeight: 1 }}>{value}</div>
        <div style={{ fontSize: 12, color: c.text, opacity: 0.7, marginTop: 4, fontWeight: 600 }}>{label}</div>
      </div>
    </div>
  );
}

// ── Doc Pill ──
function DocPill({ icon, label, hasDoc, onClick }) {
  return (
    <button
      onClick={hasDoc ? onClick : undefined}
      title={hasDoc ? `View ${label}` : `${label} not uploaded`}
      style={{
        display: "inline-flex", alignItems: "center", gap: 4,
        padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700,
        border: hasDoc ? "1px solid #A7F3D0" : "1px solid #E5E7EB",
        background: hasDoc ? "#ECFDF5" : "#F9FAFB",
        color: hasDoc ? "#065F46" : "#9CA3AF",
        cursor: hasDoc ? "pointer" : "default",
        transition: "all .15s",
      }}
    >
      <span style={{ fontSize: 12 }}>{icon}</span> {label}
      {hasDoc && <span style={{ fontSize: 10, marginLeft: 2 }}>↗</span>}
    </button>
  );
}

// ── Document Viewer Modal ──
function DocViewerModal({ url, label, onClose }) {
  const isImage = /\.(jpg|jpeg|png|webp|gif)$/i.test(url);
  return (
    <div style={{
      position: "fixed", inset: 0, background: "rgba(0,0,0,.85)",
      display: "flex", alignItems: "center", justifyContent: "center",
      zIndex: 200, padding: 24,
    }} onClick={onClose}>
      <div style={{
        background: "#1e293b", borderRadius: 16, overflow: "hidden",
        maxWidth: 700, width: "100%", maxHeight: "90vh",
        display: "flex", flexDirection: "column",
        boxShadow: "0 40px 100px rgba(0,0,0,.6)",
      }} onClick={e => e.stopPropagation()}>
        <div style={{
          padding: "14px 20px", background: "#0f172a",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          borderBottom: "1px solid rgba(255,255,255,.08)",
        }}>
          <span style={{ color: "#e2e8f0", fontWeight: 700, fontSize: 15 }}>📎 {label}</span>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <a href={url} target="_blank" rel="noreferrer" style={{
              padding: "6px 14px", borderRadius: 8, background: "#3b82f6",
              color: "#fff", fontSize: 12, fontWeight: 700, textDecoration: "none",
            }}>Open Original ↗</a>
            <button onClick={onClose} style={{
              background: "rgba(255,255,255,.1)", border: "none", color: "#fff",
              width: 30, height: 30, borderRadius: 8, cursor: "pointer", fontSize: 18, lineHeight: 1,
            }}>×</button>
          </div>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: 20, background: "#1e293b", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {isImage ? (
            <img src={url} alt={label} style={{ maxWidth: "100%", maxHeight: "70vh", objectFit: "contain", borderRadius: 10 }} />
          ) : (
            <div style={{ textAlign: "center", padding: 40 }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>📄</div>
              <p style={{ color: "#94a3b8", fontSize: 14 }}>PDF Document — cannot preview inline.</p>
              <a href={url} target="_blank" rel="noreferrer" style={{
                display: "inline-block", marginTop: 16, padding: "10px 24px",
                borderRadius: 10, background: "#3b82f6", color: "#fff",
                fontWeight: 700, textDecoration: "none", fontSize: 14,
              }}>Open PDF ↗</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── User Detail Modal ──
function UserModal({ user, onClose, onVerify, onDelete, actionLoading }) {
  const [docViewer, setDocViewer] = useState(null); // {url, label}

  const docs = [
    { key: "profilePhoto",   label: "Profile Photo",   icon: "📷" },
    { key: "cnicFront",      label: "CNIC Front",      icon: "🪪" },
    { key: "cnicBack",       label: "CNIC Back",       icon: "🪪" },
    { key: "drivingLicense", label: "Driving License", icon: "🚗" },
  ];

  const uploadedDocs = docs.filter(d => user.documents?.[d.key]);
  const missingDocs  = docs.filter(d => !user.documents?.[d.key]);

  return (
    <>
      <div style={{
        position: "fixed", inset: 0, background: "rgba(15,23,42,.7)",
        backdropFilter: "blur(6px)", zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "center", padding: 24,
      }} onClick={onClose}>
        <div style={{
          background: "#fff", borderRadius: 24, width: "100%", maxWidth: 660,
          maxHeight: "92vh", overflow: "hidden", display: "flex", flexDirection: "column",
          boxShadow: "0 40px 100px rgba(0,0,0,.25)",
        }} onClick={e => e.stopPropagation()}>

          {/* Header */}
          <div style={{
            background: "linear-gradient(135deg,#0f172a,#1e3a5f)",
            padding: "22px 28px",
            display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              {user.documents?.profilePhoto ? (
                <img src={user.documents.profilePhoto} alt={user.name}
                  style={{ width: 52, height: 52, borderRadius: "50%", objectFit: "cover", border: "2px solid rgba(255,255,255,.3)", cursor: "pointer" }}
                  onClick={() => setDocViewer({ url: user.documents.profilePhoto, label: "Profile Photo" })}
                />
              ) : (
                <div style={{
                  width: 52, height: 52, borderRadius: "50%", flexShrink: 0,
                  background: user.role === "worker"
                    ? "linear-gradient(135deg,#22c55e,#16a34a)"
                    : "linear-gradient(135deg,#3b82f6,#2563eb)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 22, fontWeight: 800, color: "#fff",
                }}>
                  {user.name?.charAt(0).toUpperCase()}
                </div>
              )}
              <div>
                <div style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>{user.name}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,.5)", marginTop: 2 }}>{user.email}</div>
                <div style={{ marginTop: 6, display: "flex", gap: 6 }}>
                  <span style={{
                    padding: "2px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700,
                    background: user.role === "worker" ? "rgba(34,197,94,.2)" : "rgba(59,130,246,.2)",
                    color: user.role === "worker" ? "#86efac" : "#93c5fd",
                  }}>
                    {user.role === "worker" ? "Worker" : "Employer"}
                  </span>
                  <span style={{
                    padding: "2px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700,
                    background: user.isVerified ? "rgba(16,185,129,.2)" : "rgba(245,158,11,.2)",
                    color: user.isVerified ? "#6ee7b7" : "#fcd34d",
                  }}>
                    {user.isVerified ? "✓ Verified" : "⏳ Pending"}
                  </span>
                </div>
              </div>
            </div>
            <button onClick={onClose} style={{
              background: "rgba(255,255,255,.1)", border: "none", color: "#fff",
              width: 36, height: 36, borderRadius: 10, cursor: "pointer", fontSize: 20, lineHeight: 1,
            }}>×</button>
          </div>

          <div style={{ overflowY: "auto", flex: 1, padding: 28 }}>

            {/* Info Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 28 }}>
              {[
                { label: "Phone",          value: user.phone || "—" },
                { label: "CNIC",           value: user.cnic  || "—" },
                { label: "Email Verified", value: user.isEmailVerified ? "✅ Yes" : "❌ No" },
                { label: "Admin Verified", value: user.isVerified      ? "✅ Yes" : "⏳ Pending" },
                { label: "Joined",         value: new Date(user.createdAt).toLocaleDateString("en-PK") },
                { label: "Role",           value: user.role  || "—" },
              ].map(info => (
                <div key={info.label} style={{
                  background: "#f8fafc", borderRadius: 10, padding: "12px 14px",
                  border: "1px solid #f1f5f9",
                }}>
                  <div style={{ fontSize: 10, color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 4 }}>
                    {info.label}
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#0f172a" }}>{info.value}</div>
                </div>
              ))}
            </div>

            {/* Documents Section */}
            <div style={{ marginBottom: 24 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                <h4 style={{ fontSize: 13, fontWeight: 700, color: "#475569", textTransform: "uppercase", letterSpacing: ".06em", margin: 0 }}>
                  Uploaded Documents
                </h4>
                <span style={{
                  fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 20,
                  background: uploadedDocs.length >= 3 ? "#dcfce7" : "#fef3c7",
                  color: uploadedDocs.length >= 3 ? "#166534" : "#92400e",
                }}>
                  {uploadedDocs.length} / {docs.length} uploaded
                </span>
              </div>

              {/* Document Cards Grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {docs.map(doc => {
                  const url = user.documents?.[doc.key];
                  const isImage = url && /\.(jpg|jpeg|png|webp|gif)$/i.test(url);
                  return (
                    <div key={doc.key} style={{
                      border: url ? "1.5px solid #a7f3d0" : "1.5px dashed #e2e8f0",
                      borderRadius: 14, overflow: "hidden",
                      background: url ? "#f0fdf4" : "#fafafa",
                    }}>
                      <div style={{
                        padding: "10px 14px", display: "flex",
                        alignItems: "center", justifyContent: "space-between",
                        borderBottom: url ? "1px solid #bbf7d0" : "1px solid #f1f5f9",
                        background: url ? "#dcfce7" : "#f8fafc",
                      }}>
                        <span style={{ fontSize: 12, fontWeight: 700, color: url ? "#166534" : "#94a3b8" }}>
                          {doc.icon} {doc.label}
                        </span>
                        {url ? (
                          <span style={{ fontSize: 11, color: "#16a34a", fontWeight: 700 }}>✅ Uploaded</span>
                        ) : (
                          <span style={{ fontSize: 11, color: "#d1d5db", fontWeight: 700 }}>❌ Missing</span>
                        )}
                      </div>

                      {url ? (
                        <div style={{ position: "relative", cursor: "pointer" }}
                          onClick={() => setDocViewer({ url, label: doc.label })}>
                          {isImage ? (
                            <>
                              <img src={url} alt={doc.label} style={{
                                width: "100%", height: 110, objectFit: "cover",
                                display: "block",
                              }} />
                              <div style={{
                                position: "absolute", inset: 0,
                                background: "rgba(0,0,0,0)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                transition: "background .2s",
                              }}
                                onMouseEnter={e => e.currentTarget.style.background = "rgba(0,0,0,.35)"}
                                onMouseLeave={e => e.currentTarget.style.background = "rgba(0,0,0,0)"}
                              >
                                <span style={{
                                  background: "rgba(0,0,0,.6)", color: "#fff",
                                  padding: "6px 14px", borderRadius: 20, fontSize: 12, fontWeight: 700,
                                  opacity: 0, transition: "opacity .2s",
                                }}
                                  ref={el => el && el.parentElement.addEventListener("mouseenter", () => el.style.opacity = 1)}
                                >
                                  Click to view ↗
                                </span>
                              </div>
                            </>
                          ) : (
                            <div style={{
                              height: 80, display: "flex", flexDirection: "column",
                              alignItems: "center", justifyContent: "center", gap: 6,
                              background: "#f0fdf4",
                            }}>
                              <span style={{ fontSize: 28 }}>📄</span>
                              <span style={{ fontSize: 11, color: "#16a34a", fontWeight: 700 }}>PDF — click to view ↗</span>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div style={{
                          height: 80, display: "flex", alignItems: "center", justifyContent: "center",
                          background: "#f9fafb",
                        }}>
                          <span style={{ fontSize: 12, color: "#d1d5db", fontWeight: 600 }}>Not submitted</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Verification Decision */}
            <div style={{
              background: user.isVerified ? "#f0fdf4" : "#fffbeb",
              border: `1.5px solid ${user.isVerified ? "#a7f3d0" : "#fde68a"}`,
              borderRadius: 14, padding: "16px 18px", marginBottom: 18,
            }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: user.isVerified ? "#166534" : "#92400e", marginBottom: 4 }}>
                {user.isVerified ? "✅ This account is currently verified" : "⏳ This account is awaiting verification"}
              </div>
              <div style={{ fontSize: 12, color: "#64748b" }}>
                {user.isVerified
                  ? "User can access all platform features."
                  : `Documents uploaded: ${uploadedDocs.map(d => d.label).join(", ") || "None"}. Review documents above before verifying.`}
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => onVerify(user._id, user.isVerified)}
                disabled={actionLoading === user._id}
                style={{
                  flex: 1, padding: "14px", borderRadius: 12, border: "none",
                  fontSize: 14, fontWeight: 700, cursor: "pointer",
                  background: user.isVerified
                    ? "linear-gradient(135deg,#f59e0b,#d97706)"
                    : "linear-gradient(135deg,#22c55e,#16a34a)",
                  color: "#fff",
                  opacity: actionLoading === user._id ? .6 : 1,
                  transition: "opacity .2s",
                }}>
                {actionLoading === user._id ? "Processing..." : user.isVerified ? "⚠️ Remove Verification" : "✅ Verify This Account"}
              </button>
              <button onClick={() => onDelete(user._id)} style={{
                padding: "14px 20px", borderRadius: 12, border: "1.5px solid #fecaca",
                background: "#fef2f2", color: "#ef4444", fontSize: 14, fontWeight: 700, cursor: "pointer",
              }}>🗑</button>
            </div>
          </div>
        </div>
      </div>

      {docViewer && (
        <DocViewerModal url={docViewer.url} label={docViewer.label} onClose={() => setDocViewer(null)} />
      )}
    </>
  );
}

// ── Main Admin Panel ──
export default function AdminPanel() {
  const [users,         setUsers]         = useState([]);
  const [stats,         setStats]         = useState(null);
  const [loading,       setLoading]       = useState(true);
  const [filter,        setFilter]        = useState("all");
  const [search,        setSearch]        = useState("");
  const [selected,      setSelected]      = useState(null);
  const [actionLoading, setActionLoading] = useState("");
  const [docViewer,     setDocViewer]     = useState(null);

  useEffect(() => { fetchData(); }, []);

  async function fetchData() {
    setLoading(true);
    try {
      const [usersRes, statsRes] = await Promise.all([
        fetch(`${API}/users`).then(r => r.json()),
        fetch(`${API}/stats`).then(r => r.json()),
      ]);
      setUsers(Array.isArray(usersRes) ? usersRes : []);
      setStats(statsRes);
    } catch (err) { console.error(err); }
    setLoading(false);
  }

  async function handleVerify(userId, currentStatus) {
    setActionLoading(userId);
    try {
      const endpoint = currentStatus ? "unverify" : "verify";
      const res  = await fetch(`${API}/users/${userId}/${endpoint}`, { method: "PATCH" });
      const data = await res.json();
      if (res.ok) {
        setUsers(prev => prev.map(u => u._id === userId ? { ...u, isVerified: !currentStatus } : u));
        if (selected?._id === userId) setSelected(prev => ({ ...prev, isVerified: !currentStatus }));
      } else { alert(data.error); }
    } catch { alert("Failed to update"); }
    setActionLoading("");
  }

  async function handleDelete(userId) {
    if (!confirm("Delete this user permanently? This cannot be undone.")) return;
    setActionLoading(userId);
    try {
      const res = await fetch(`${API}/users/${userId}`, { method: "DELETE" });
      if (res.ok) {
        setUsers(prev => prev.filter(u => u._id !== userId));
        if (selected?._id === userId) setSelected(null);
      }
    } catch { alert("Failed to delete"); }
    setActionLoading("");
  }

  const FILTERS = [
    { id: "all",      label: "All Users" },
    { id: "pending",  label: "⏳ Pending" },
    { id: "verified", label: "✅ Verified" },
    { id: "worker",   label: "Workers" },
    { id: "employer", label: "Employers" },
  ];

  const filtered = users.filter(u => {
    const matchFilter =
      filter === "all"      ? true :
      filter === "worker"   ? u.role === "worker" :
      filter === "employer" ? u.role === "employer" :
      filter === "pending"  ? !u.isVerified :
      filter === "verified" ? u.isVerified : true;
    const matchSearch = !search ||
      u.name?.toLowerCase().includes(search.toLowerCase()) ||
      u.email?.toLowerCase().includes(search.toLowerCase()) ||
      u.cnic?.includes(search);
    return matchFilter && matchSearch;
  });

  const pendingCount = users.filter(u => !u.isVerified).length;

  return (
    <div style={{ minHeight: "100vh", background: "#f1f5f9", fontFamily: "'Outfit', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        @keyframes fadeIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
        @keyframes spin{to{transform:rotate(360deg)}}
        ::-webkit-scrollbar{width:5px}::-webkit-scrollbar-thumb{background:#cbd5e1;border-radius:6px}
        .row-hover:hover{background:#f8fafc!important}
        .filter-btn:hover{opacity:.85}
      `}</style>

      {/* Header */}
      <header style={{
        background: "linear-gradient(135deg,#0b1526 0%,#1a3255 100%)",
        padding: "0 32px", height: 64,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        borderBottom: "1px solid rgba(255,255,255,.06)",
        position: "sticky", top: 0, zIndex: 50,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: "linear-gradient(135deg,#3b82f6,#2563eb)",
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18,
          }}>🛡️</div>
          <div>
            <div style={{ fontSize: 17, fontWeight: 900, color: "#fff", letterSpacing: "-.3px" }}>
              RozgarHub <span style={{ fontSize: 11, fontWeight: 600, opacity: .4, letterSpacing: ".12em" }}>ADMIN</span>
            </div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,.3)" }}>User Verification Portal</div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {pendingCount > 0 && (
            <div style={{
              background: "rgba(245,158,11,.15)", border: "1px solid rgba(245,158,11,.3)",
              borderRadius: 20, padding: "5px 14px", fontSize: 12, fontWeight: 700, color: "#fbbf24",
            }}>
              ⏳ {pendingCount} pending review
            </div>
          )}
          <button onClick={fetchData} style={{
            background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.1)",
            color: "#fff", padding: "7px 16px", borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: "pointer",
          }}>🔄 Refresh</button>
        </div>
      </header>

      <div style={{ padding: "28px 32px", maxWidth: 1280, margin: "0 auto" }}>

        {/* Stats */}
        {stats && (
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 14,
            marginBottom: 28, animation: "fadeIn .4s",
          }}>
            <StatCard icon="👥" label="Total Users"  value={stats.total}     color="blue"   />
            <StatCard icon="🔧" label="Workers"      value={stats.workers}   color="green"  />
            <StatCard icon="🏢" label="Employers"    value={stats.employers} color="purple" />
            <StatCard icon="✅" label="Verified"     value={stats.verified}  color="green"  />
            <StatCard icon="⏳" label="Pending"      value={stats.pending}   color="amber"  />
          </div>
        )}

        {/* Toolbar */}
        <div style={{
          background: "#fff", borderRadius: 16, padding: "14px 18px",
          marginBottom: 18, display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap",
          boxShadow: "0 1px 4px rgba(0,0,0,.06)", border: "1px solid #e2e8f0",
        }}>
          <input
            placeholder="Search by name, email or CNIC..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              flex: 1, minWidth: 220, padding: "9px 14px", borderRadius: 10,
              border: "1.5px solid #e2e8f0", fontSize: 13, outline: "none",
              fontFamily: "'Outfit', sans-serif", color: "#0f172a",
            }}
          />
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {FILTERS.map(f => (
              <button key={f.id} className="filter-btn" onClick={() => setFilter(f.id)} style={{
                padding: "7px 15px", borderRadius: 20, border: "none", fontSize: 12,
                fontWeight: 700, cursor: "pointer", transition: "all .15s",
                background: filter === f.id ? "#0f172a" : "#f1f5f9",
                color: filter === f.id ? "#fff" : "#64748b",
              }}>
                {f.label}
              </button>
            ))}
          </div>
          <span style={{ fontSize: 12, color: "#94a3b8", fontWeight: 600, whiteSpace: "nowrap" }}>
            {filtered.length} result{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Table */}
        {loading ? (
          <div style={{ textAlign: "center", padding: 80, color: "#94a3b8", background: "#fff", borderRadius: 18 }}>
            <div style={{
              width: 40, height: 40, border: "3px solid #3b82f6",
              borderTopColor: "transparent", borderRadius: "50%",
              animation: "spin 1s linear infinite", margin: "0 auto 14px",
            }} />
            <p style={{ fontSize: 14 }}>Loading users...</p>
          </div>
        ) : (
          <div style={{ background: "#fff", borderRadius: 18, overflow: "hidden", border: "1px solid #e2e8f0", boxShadow: "0 1px 6px rgba(0,0,0,.06)" }}>
            {/* Table Head */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "2.2fr 2fr 100px 200px 120px 180px",
              padding: "11px 20px", background: "#f8fafc",
              borderBottom: "1px solid #e2e8f0",
              fontSize: 11, fontWeight: 700, color: "#94a3b8",
              textTransform: "uppercase", letterSpacing: ".08em",
            }}>
              <span>User</span><span>Contact</span><span>Role</span>
              <span>Documents</span><span>Status</span><span>Actions</span>
            </div>

            {filtered.length === 0 ? (
              <div style={{ textAlign: "center", padding: 60, color: "#94a3b8" }}>
                <div style={{ fontSize: 40, marginBottom: 10 }}>🔍</div>
                <p style={{ fontWeight: 600, fontSize: 14 }}>No users found</p>
              </div>
            ) : filtered.map((u, i) => {
              const docList = [
                { key: "profilePhoto",   icon: "📷", label: "Photo" },
                { key: "cnicFront",      icon: "🪪", label: "CNIC F" },
                { key: "cnicBack",       icon: "🪪", label: "CNIC B" },
                { key: "drivingLicense", icon: "🚗", label: "License" },
              ];
              const uploadedCount = docList.filter(d => u.documents?.[d.key]).length;

              return (
                <div key={u._id} className="row-hover" style={{
                  display: "grid",
                  gridTemplateColumns: "2.2fr 2fr 100px 200px 120px 180px",
                  padding: "14px 20px", alignItems: "center",
                  borderBottom: i < filtered.length - 1 ? "1px solid #f1f5f9" : "none",
                  animation: "fadeIn .3s", transition: "background .15s",
                  background: !u.isVerified ? "#fffdf0" : "#fff",
                }}>
                  {/* User */}
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    {u.documents?.profilePhoto ? (
                      <img src={u.documents.profilePhoto} alt={u.name}
                        style={{ width: 38, height: 38, borderRadius: "50%", objectFit: "cover", flexShrink: 0, border: "2px solid #e2e8f0", cursor: "pointer" }}
                        onClick={() => setDocViewer({ url: u.documents.profilePhoto, label: `${u.name} — Profile Photo` })}
                      />
                    ) : (
                      <div style={{
                        width: 38, height: 38, borderRadius: "50%", flexShrink: 0,
                        background: u.role === "worker"
                          ? "linear-gradient(135deg,#22c55e,#16a34a)"
                          : "linear-gradient(135deg,#3b82f6,#2563eb)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 16, fontWeight: 800, color: "#fff",
                      }}>{u.name?.charAt(0).toUpperCase()}</div>
                    )}
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#0f172a" }}>{u.name}</div>
                      <div style={{ fontSize: 11, color: "#94a3b8" }}>
                        Joined {new Date(u.createdAt).toLocaleDateString("en-PK")}
                      </div>
                    </div>
                  </div>

                  {/* Contact */}
                  <div>
                    <div style={{ fontSize: 13, color: "#475569", fontWeight: 500 }}>{u.email}</div>
                    <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 2 }}>{u.phone || "—"} · {u.cnic || "—"}</div>
                  </div>

                  {/* Role */}
                  <span style={{
                    padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 700,
                    background: u.role === "worker" ? "#dcfce7" : "#eff6ff",
                    color: u.role === "worker" ? "#166534" : "#1d4ed8",
                    width: "fit-content",
                  }}>
                    {u.role === "worker" ? "Worker" : "Employer"}
                  </span>

                  {/* Documents — inline pills, clickable */}
                  <div style={{ display: "flex", gap: 4, flexWrap: "wrap", alignItems: "center" }}>
                    {docList.map(doc => (
                      u.documents?.[doc.key] && (
                        <DocPill
                          key={doc.key} icon={doc.icon} label={doc.label} hasDoc
                          onClick={() => setDocViewer({ url: u.documents[doc.key], label: `${u.name} — ${doc.label === "Photo" ? "Profile Photo" : doc.label === "CNIC F" ? "CNIC Front" : doc.label === "CNIC B" ? "CNIC Back" : "Driving License"}` })}
                        />
                      )
                    ))}
                    {uploadedCount === 0 && (
                      <span style={{ fontSize: 11, color: "#f59e0b", fontWeight: 700 }}>⚠ No docs</span>
                    )}
                    {uploadedCount > 0 && (
                      <span style={{ fontSize: 10, color: "#94a3b8", marginLeft: 2 }}>
                        {uploadedCount}/4
                      </span>
                    )}
                  </div>

                  {/* Status */}
                  <span style={{
                    padding: "4px 12px", borderRadius: 20, fontSize: 11, fontWeight: 700,
                    background: u.isVerified ? "#dcfce7" : "#fef3c7",
                    color: u.isVerified ? "#166534" : "#92400e",
                    width: "fit-content",
                  }}>
                    {u.isVerified ? "✅ Verified" : "⏳ Pending"}
                  </span>

                  {/* Actions */}
                  <div style={{ display: "flex", gap: 6 }}>
                    <button onClick={() => setSelected(u)} style={{
                      padding: "6px 12px", borderRadius: 8, border: "1.5px solid #e2e8f0",
                      background: "#f8fafc", color: "#475569", fontSize: 12, fontWeight: 600, cursor: "pointer",
                    }}>👁 View</button>
                    <button
                      onClick={() => handleVerify(u._id, u.isVerified)}
                      disabled={actionLoading === u._id}
                      style={{
                        padding: "6px 12px", borderRadius: 8, border: "none", fontSize: 12, fontWeight: 700, cursor: "pointer",
                        background: u.isVerified ? "#fef3c7" : "#dcfce7",
                        color: u.isVerified ? "#92400e" : "#166534",
                        opacity: actionLoading === u._id ? .5 : 1,
                      }}>
                      {actionLoading === u._id ? "..." : u.isVerified ? "Unverify" : "✅ Verify"}
                    </button>
                    <button onClick={() => handleDelete(u._id)} disabled={actionLoading === u._id} style={{
                      padding: "6px 10px", borderRadius: 8, border: "none",
                      background: "#fef2f2", color: "#ef4444", fontSize: 12, fontWeight: 700, cursor: "pointer",
                    }}>🗑</button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* User Detail Modal */}
      {selected && (
        <UserModal
          user={selected}
          onClose={() => setSelected(null)}
          onVerify={handleVerify}
          onDelete={handleDelete}
          actionLoading={actionLoading}
        />
      )}

      {/* Inline Doc Viewer (from table row pill clicks) */}
      {docViewer && (
        <DocViewerModal url={docViewer.url} label={docViewer.label} onClose={() => setDocViewer(null)} />
      )}
    </div>
  );
}