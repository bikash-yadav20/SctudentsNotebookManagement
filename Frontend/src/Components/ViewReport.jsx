// import React, { useState } from "react";

// const ViewReport = ({ studentId }) => {
//   const [student, setStudent] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const API_URL = import.meta.env.VITE_API_URL;

//   const fetchReport = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch(`${API_URL}/api/student/${studentId}/report`);
//       if (!res.ok) throw new Error("Failed to fetch report");
//       const data = await res.json();
//       setStudent(data);
//     } catch (err) {
//       console.error("Error fetching report:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!student) {
//     return (
//       <div className="p-6">
//         <button
//           onClick={fetchReport}
//           className="bg-blue-600 text-white px-4 py-2 rounded"
//         >
//           View Report
//         </button>
//         {loading && <p className="mt-2">Loading...</p>}
//       </div>
//     );
//   }

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4 text-center">
//         Report For {student.name} ({student.class} - {student.section})
//       </h2>
//       <table className="table-auto border-collapse border border-gray-300 w-full text-center shadow-lg rounded-lg">
//         <thead>
//           <tr className="bg-gray-400 text-white">
//             <th className="px-4 py-2 border">Subjects</th>
//             {Array.from({ length: 6 }).map((_, i) => (
//               <th key={i} className="px-4 py-2 border">Check {i + 1}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {(student.notebookChecks || []).map((item, idx) => (
//             <tr key={idx} className="hover:bg-gray-100">
//               <td className="px-4 py-2 border">{item.subject}</td>
//               {item.checks.map((checked, i) => (
//                 <td key={i} className="border px-2 py-2">
//                   {checked ? "✅" : "❌"}
//                   {/* Show latest remark under the tick/cross */}
//                   {item.remarks && item.remarks.length > 0 && (
//                     <div className="text-xs text-gray-600 mt-1">
//                       {item.remarks[item.remarks.length - 1].text}
//                     </div>
//                   )}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ViewReport;
