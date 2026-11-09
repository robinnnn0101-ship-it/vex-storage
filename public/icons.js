// Simple file type icons
export function getIcon(name) {
  const ext = name.split('.').pop().toLowerCase();
  const icons = { pdf: '📄', jpg: '🖼️', png: '🖼️', txt: '📝', zip: '📦', default: '📁' };
  return icons[ext] || icons.default;
}
