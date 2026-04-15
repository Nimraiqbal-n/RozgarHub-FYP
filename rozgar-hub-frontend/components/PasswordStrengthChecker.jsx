// "use client";
// import { useState, useEffect } from "react";
// import { Check, X } from "lucide-react";

// export default function PasswordStrengthChecker({ password, onStrengthChange }) {
//   const [constraints, setConstraints] = useState({
//     minLength: false,
//     uppercase: false,
//     lowercase: false,
//     number: false,
//     specialChar: false,
//   });

//   const [isValid, setIsValid] = useState(false);

//   useEffect(() => {
//     // Check minimum length (8 characters)
//     const minLengthMet = password.length >= 8;

//     // Check uppercase
//     const uppercaseMet = /[A-Z]/.test(password);

//     // Check lowercase
//     const lowercaseMet = /[a-z]/.test(password);

//     // Check number
//     const numberMet = /[0-9]/.test(password);

//     // Check special character
//     const specialCharMet = /[!@#$%^&*]/.test(password);

//     const newConstraints = {
//       minLength: minLengthMet,
//       uppercase: uppercaseMet,
//       lowercase: lowercaseMet,
//       number: numberMet,
//       specialChar: specialCharMet,
//     };

//     setConstraints(newConstraints);

//     // Check if all constraints are met
//     const valid = Object.values(newConstraints).every((v) => v === true);
//     setIsValid(valid);

//     // Call parent callback with validity and constraints
//     if (onStrengthChange) {
//       onStrengthChange({
//         isValid,
//         constraints: newConstraints,
//         score: Object.values(newConstraints).filter(Boolean).length,
//       });
//     }
//   }, [password, onStrengthChange]);

//   const requirements = [
//     {
//       label: "Minimum 8 characters",
//       met: constraints.minLength,
//     },
//     {
//       label: "At least 1 uppercase letter (A-Z)",
//       met: constraints.uppercase,
//     },
//     {
//       label: "At least 1 lowercase letter (a-z)",
//       met: constraints.lowercase,
//     },
//     {
//       label: "At least 1 number (0-9)",
//       met: constraints.number,
//     },
//     {
//       label: "At least 1 special character (!@#$%^&*)",
//       met: constraints.specialChar,
//     },
//   ];

//   return (
//     <div className="mt-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
//       <p className="text-sm font-semibold text-gray-700 mb-3">
//         Password Requirements:
//       </p>
//       <div className="space-y-2">
//         {requirements.map((req, idx) => (
//           <div
//             key={idx}
//             className={`flex items-center gap-2 text-sm ${
//               req.met ? "text-green-600" : "text-gray-600"
//             }`}
//           >
//             {req.met ? (
//               <Check size={16} className="text-green-500 font-bold" />
//             ) : (
//               <X size={16} className="text-gray-400" />
//             )}
//             <span>{req.label}</span>
//           </div>
//         ))}
//       </div>

//       {/* Password Strength Bar */}
//       <div className="mt-4">
//         <div className="flex justify-between items-center mb-1">
//           <span className="text-xs font-medium text-gray-600">Strength:</span>
//           <span
//             className={`text-xs font-bold ${
//               isValid
//                 ? "text-green-600"
//                 : Object.values(constraints).filter(Boolean).length >= 3
//                 ? "text-yellow-600"
//                 : "text-red-600"
//             }`}
//           >
//             {isValid ? "Strong ✓" : "Weak"}
//           </span>
//         </div>
//         <div className="w-full bg-gray-300 rounded-full h-2">
//           <div
//             className={`h-2 rounded-full transition-all ${
//               isValid
//                 ? "bg-green-500 w-full"
//                 : Object.values(constraints).filter(Boolean).length >= 3
//                 ? "bg-yellow-500"
//                 : ""
//             }`}
//             style={{
//               width: `${(Object.values(constraints).filter(Boolean).length / 5) * 100}%`,
//             }}
//           ></div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import { useState, useEffect } from "react";
import { Check, X } from "lucide-react";

const LABELS = {
  en: {
    title: "Password Requirements:",
    strength: "Strength:",
    strong: "Strong ✓",
    weak: "Weak",
    requirements: [
      "Minimum 8 characters",
      "At least 1 uppercase letter (A-Z)",
      "At least 1 lowercase letter (a-z)",
      "At least 1 number (0-9)",
      "At least 1 special character (!@#$%^&*)",
    ],
  },
  ur: {
    title: "پاس ورڈ کی ضروریات:",
    strength: "مضبوطی:",
    strong: "مضبوط ✓",
    weak: "کمزور",
    requirements: [
      "کم از کم 8 حروف",
      "کم از کم 1 بڑا حرف (A-Z)",
      "کم از کم 1 چھوٹا حرف (a-z)",
      "کم از کم 1 نمبر (0-9)",
      "کم از کم 1 خاص علامت (!@#$%^&*)",
    ],
  },
};

export default function PasswordStrengthChecker({ password, onStrengthChange, lang = "en" }) {
  const t = LABELS[lang] || LABELS.en;

  const [constraints, setConstraints] = useState({
    minLength:   false,
    uppercase:   false,
    lowercase:   false,
    number:      false,
    specialChar: false,
  });

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const newConstraints = {
      minLength:   password.length >= 8,
      uppercase:   /[A-Z]/.test(password),
      lowercase:   /[a-z]/.test(password),
      number:      /[0-9]/.test(password),
      specialChar: /[!@#$%^&*]/.test(password),
    };

    setConstraints(newConstraints);

    const valid = Object.values(newConstraints).every(v => v === true);
    setIsValid(valid);

    if (onStrengthChange) {
      onStrengthChange({
        isValid: valid,
        constraints: newConstraints,
        score: Object.values(newConstraints).filter(Boolean).length,
      });
    }
  }, [password, onStrengthChange]);

  const score = Object.values(constraints).filter(Boolean).length;

  const requirements = t.requirements.map((label, i) => ({
    label,
    met: Object.values(constraints)[i],
  }));

  return (
    <div
      className="mt-3 p-4 bg-gray-50 rounded-lg border border-gray-200"
      dir={lang === "ur" ? "rtl" : "ltr"}
    >
      <p className="text-sm font-semibold text-gray-700 mb-3">{t.title}</p>

      <div className="space-y-2">
        {requirements.map((req, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-2 text-sm ${
              req.met ? "text-green-600" : "text-gray-600"
            }`}
          >
            {req.met ? (
              <Check size={16} className="text-green-500 shrink-0" />
            ) : (
              <X size={16} className="text-gray-400 shrink-0" />
            )}
            <span>{req.label}</span>
          </div>
        ))}
      </div>

      {/* Strength Bar */}
      <div className="mt-4">
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs font-medium text-gray-600">{t.strength}</span>
          <span
            className={`text-xs font-bold ${
              isValid
                ? "text-green-600"
                : score >= 3
                ? "text-yellow-600"
                : "text-red-600"
            }`}
          >
            {isValid ? t.strong : t.weak}
          </span>
        </div>
        <div className="w-full bg-gray-300 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all ${
              isValid
                ? "bg-green-500"
                : score >= 3
                ? "bg-yellow-500"
                : "bg-red-400"
            }`}
            style={{ width: `${(score / 5) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
