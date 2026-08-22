const ICONS = {
  // Exhibition Booths & Stands — pavilion silhouette with peaked roof
  booth: (
    <>
      <path d="M3 9 12 3l9 6" />
      <path d="M4 9v11h16V9" />
      <path d="M9 20v-6h6v6" />
    </>
  ),
  // Banners & Large-Format Printing — hanging banner on a rod
  banner: (
    <>
      <path d="M4 4h16" />
      <path d="M7 4v15l5-3 5 3V4" />
    </>
  ),
  // Roll-Up & Display Stands — banner on splayed feet
  standee: (
    <>
      <rect x="8" y="3" width="8" height="15" rx="0.5" />
      <path d="M7 21l5-3 5 3" />
    </>
  ),
  // Stage & Backdrop Fabrication — riser platform with backdrop panel
  stage: (
    <>
      <path d="M3 21h18" />
      <path d="M5 21l2-7h10l2 7" />
      <rect x="9" y="4" width="6" height="7" rx="0.5" />
    </>
  ),
  // Signage & Wayfinding — directional post sign
  signage: (
    <>
      <path d="M6 21V4" />
      <path d="M6 6h11l3 4-3 4H6" />
    </>
  ),
  // Custom Wood Fabrication — stacked planks
  wood: (
    <>
      <rect x="3" y="5" width="18" height="4" rx="1" />
      <rect x="3" y="10.5" width="18" height="4" rx="1" />
      <rect x="3" y="16" width="18" height="4" rx="1" />
    </>
  ),
  // Acrylic & Display Fixtures — isometric display cube
  acrylic: (
    <>
      <path d="M12 3 4 7.5 12 12l8-4.5Z" />
      <path d="M4 7.5v9L12 21l8-4.5v-9" />
      <path d="M12 12v9" />
    </>
  ),
  // Event Accessories & Consumables — carry case / kit
  accessory: (
    <>
      <rect x="3" y="9" width="18" height="11" rx="1.5" />
      <path d="M8 9V7a4 4 0 0 1 8 0v2" />
      <path d="M3 13h18" />
    </>
  ),
  factory: (
    <path d="M3 21V10l5 3v-3l5 3v-3l5 3v8H3ZM6 21v-4M12 21v-4M18 21v-4" />
  ),
  team: <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />,
  hardhat: <path d="M4 18a8 8 0 0 1 16 0M2 18h20M12 6V3M9 18v-5a3 3 0 0 1 6 0v5" />,
};

export default function PlaceholderImage({
  icon = "factory",
  label,
  className = "",
  variant = "dark",
}) {
  const isDark = variant === "dark";
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${
        isDark
          ? "bg-gradient-to-br from-charcoal-lighter via-charcoal to-ink"
          : "bg-gradient-to-br from-tan-light via-tan to-copper-light/40"
      } ${className}`}
    >
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 1px, transparent 14px)",
          color: isDark ? "#d9c5a0" : "#0b0a09",
        }}
      />
      <div className="relative flex flex-col items-center gap-3 px-4 text-center">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`h-10 w-10 ${
            isDark ? "text-copper-light" : "text-copper-dark"
          }`}
        >
          {ICONS[icon] ?? ICONS.factory}
        </svg>
        {label && (
          <span
            className={`font-display text-xs font-medium uppercase tracking-[0.15em] ${
              isDark ? "text-tan/50" : "text-ink/50"
            }`}
          >
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
