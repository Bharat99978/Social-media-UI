export function ProfileImage() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Outer glow layer */}
      <div className="absolute w-[280px] h-[280px] rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-xl animate-pulse"></div>
      
      {/* Middle glow layer */}
      <div className="absolute w-[260px] h-[260px] rounded-full bg-gradient-to-r from-green-400/30 to-emerald-400/30 blur-md"></div>
      
      {/* Inner glow layer */}
      <div className="absolute w-[240px] h-[240px] rounded-full bg-gradient-to-r from-green-300/40 to-emerald-300/40 blur-sm"></div>
      
      {/* Profile image container */}
      <div className="relative w-[220px] h-[220px] rounded-full overflow-hidden z-10 border-2 border-green-500/50">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5hkPDEeJNnMxgXEWXoEK8ygwgo9mwdDEScA_jew2fODXXiCsq6pOwBmU&s=10"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

