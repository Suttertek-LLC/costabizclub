// =============================================
// Costa Biz Club Directory – JS by Suttertek
// =============================================

// =============================================
// Embedded CSV Data – No fetch, no file access
// =============================================
const csvData = `
Name;Last Name;Phone;Email;Business Name;Website;Type of Business;Picture Filename;Show Phone?;Show Email?
Arturo;Sutter;(+1) 305-586-7321;asutter@suttertek.com;suttertek LLC;https://suttertek.com;Technology;Art-pic001.png;Yes;Yes
Dorothy;Griggs;(+1) 305-789-4567;dlgriggs332@gmail.com;Keyes Co.;;Real Estate;Dorothy.jpg;Yes;Yes
Sergio;Martins;(+1) 786-432-0001;Info@Sergiorealtor.com;Premier Luxe Group LLC;https://www.premierluxegroup.com;Real Estate;Sergio.jpg;Yes;Yes
Faisal;Quintar;(+1) 786-370-2476;prompt.rehabilitation@gmail.com;PromPT Rehabilitation Group LLC;https://prompt-rehabilitation.com/;Health & Wellness;;Yes;Yes
Paola;Cedeno;(+1) 954-401-2767;info@greencornerwall.com;Green Corner Wall Co.;https://www.greencornerwall.com;Eco-friendly Wallpaper;;Yes;Yes
Philip;Sherlock;(+1) 954-478-6392;Philip.Sherlock@avoyanetwork.com;All Aboard Intl. Com;https://trips.allaboardinternational.com;Travel Agency;;Yes;Yes
`.trim();

// ================================
// Parse CSV and build directory
// ================================
const rows = csvData.split('\n');
const headers = rows[0].split(';');

const members = rows.slice(1).map(row => {
  const values = row.split(';');
  const member = {};
  headers.forEach((h, i) => {
    member[h.trim()] = values[i]?.trim();
  });
  return member;
});

let filteredMembers = [...members];
let currentPage = 1;
const MEMBERS_PER_PAGE = 3;

// =====================================
// Function to render a page of members
// =====================================
function renderDirectoryPage(page) {
  const start = (page - 1) * MEMBERS_PER_PAGE;
  const end = start + MEMBERS_PER_PAGE;
  const currentMembers = filteredMembers.slice(start, end);
  renderDirectory(currentMembers); // Use unified render function
  renderPaginationControls(page);
}

// =====================================
// Function to render member cards
// =====================================
function renderDirectory(memberList) {
  const container = document.getElementById('directory-list');
  container.innerHTML = '';

  memberList.forEach(member => {
    const showPhone = member["Show Phone?"]?.toLowerCase() === "yes";
    const showEmail = member["Show Email?"]?.toLowerCase() === "yes";

    if (!showPhone && !showEmail) return;

    const card = document.createElement('div');
    card.className = 'member-card';

    const imgSrc = member["Picture Filename"]
      ? `assets/img/members/${member["Picture Filename"]}`
      : 'assets/img/members/default.png';

    card.innerHTML = `
      <img src="${imgSrc}" alt="${member.Name}" class="member-photo">
      <h3>${member.Name} ${member["Last Name"] || ''}</h3>
      <p class="business"><strong><span title="${member["Business Name"]}">${member["Business Name"] || ''}</span></strong></p>
      <p class="type"><em>${member["Type of Business"] || ''}</em></p>
      ${showPhone ? `<p>📞 ${member.Phone}</p>` : ''}
      ${showEmail ? `<p class="email">✉️ <span title="${member.Email}">${member.Email}</span></p>` : ''}
      ${member.Website ? `<p><a href="${member.Website}" target="_blank">🌐 Website</a></p>` : ''}
    `;

    container.appendChild(card);
  });
}

// =====================================
// Function to render pagination buttons
// =====================================
function renderPaginationControls(current) {
  const pagination = document.getElementById('pagination');
  pagination.innerHTML = '';

  const totalPages = Math.ceil(filteredMembers.length / MEMBERS_PER_PAGE);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.textContent = i;
    btn.className = (i === current) ? 'active' : '';
    btn.addEventListener('click', () => {
      currentPage = i;
      renderDirectoryPage(currentPage);
    });
    pagination.appendChild(btn);
  }
}

// =====================================
// Live Search: Filters in real time
// =====================================
const searchInput = document.getElementById('memberSearch');

if (searchInput) {
  searchInput.addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();

    filteredMembers = members.filter(member => {
      const fullName = (member.Name + ' ' + (member["Last Name"] || '')).toLowerCase();
      const business = (member["Business Name"] || '').toLowerCase();
      const type = (member["Type of Business"] || '').toLowerCase();

      return (
        fullName.includes(searchTerm) ||
        business.includes(searchTerm) ||
        type.includes(searchTerm)
      );
    });

    currentPage = 1;
    renderDirectoryPage(currentPage);
  });
}

// ================================
// Initial directory render
// ================================
renderDirectoryPage(currentPage);
