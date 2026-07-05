// function ProgressRing({
//   value = 75,
//   size = 80,
//   strokeWidth = 8,
//   color = "#10B981",
//   label = "",
//   unit = "%",
// }) {
//   const radius = (size - strokeWidth) / 2;
//   const circumference = 2 * Math.PI * radius;

//   const progress = Math.min(Math.max(value, 0), 100);

//   const offset =
//     circumference - (progress / 100) * circumference;

//   return (
//     <div className="flex flex-col items-center gap-3">
//       <div
//         className="relative"
//         style={{
//           width: size,
//           height: size,
//         }}
//       >
//         <svg
//           width={size}
//           height={size}
//           className="-rotate-90"
//         >
//           {/* Background */}
//           <circle
//             cx={size / 2}
//             cy={size / 2}
//             r={radius}
//             fill="none"
//             stroke="#E5E7EB"
//             strokeWidth={strokeWidth}
//           />

//           {/* Progress */}
//           <circle
//             cx={size / 2}
//             cy={size / 2}
//             r={radius}
//             fill="none"
//             stroke={color}
//             strokeWidth={strokeWidth}
//             strokeLinecap="round"
//             strokeDasharray={circumference}
//             strokeDashoffset={offset}
//             style={{
//               transition: "stroke-dashoffset .8s ease",
//             }}
//           />
//         </svg>

//         <div className="absolute inset-0 flex items-center justify-center">
//           <span className="font-bold text-ink-900">
//             {progress}
//             {unit}
//           </span>
//         </div>
//       </div>

//       <p className="text-sm font-medium text-ink-700">
//         {label}
//       </p>
//     </div>
//   );
// }

// export default ProgressRing;
import { motion } from "framer-motion";

function ProgressRing({
  value = 75,
  size = 80,
  strokeWidth = 8,
  color = "#10B981",
  label = "",
  unit = "%",
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const progress = Math.min(Math.max(value, 0), 100);

  const offset =
    circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="relative"
        style={{
          width: size,
          height: size,
        }}
      >
        <svg
          width={size}
          height={size}
          className="-rotate-90"
        >
          {/* Background Ring */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#E5E7EB"
            strokeWidth={strokeWidth}
          />

          {/* Progress Ring */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{
              strokeDashoffset: circumference,
            }}
            animate={{
              strokeDashoffset: offset,
            }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
          />
        </svg>

        {/* Center */}
        <div className="absolute inset-0 flex items-center justify-center">
          {progress >= 100 ? (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-xl"
            >
              ✅
            </motion.span>
          ) : (
            <span className="font-bold text-ink-900">
              {progress}
              {unit}
            </span>
          )}
        </div>
      </div>

      {label && (
        <p className="text-sm font-medium text-ink-700">
          {label}
        </p>
      )}
    </div>
  );
}

export default ProgressRing;