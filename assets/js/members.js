// Recalculate page size on resize and re-render if it changed
let _lastMpp = MEMBERS_PER_PAGE;
window.addEventListener('resize', () => {
  const next = getMembersPerPage();
  if (next !== _lastMpp) {
    MEMBERS_PER_PAGE = next;
    _lastMpp = next;
    currentPage = 1;                 // reset to first page for a clean layout
    renderDirectoryPage(currentPage);
  }
});








