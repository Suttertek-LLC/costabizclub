// =============================================
// Costa Biz Club Directory – JS by Suttertek
// =============================================

// =============================================
// Embedded CSV Data – No fetch, no file access
// =============================================
const csvData = `
Name;Last Name;Phone;Email;Business Name;Website;Type of Business;Picture Filename;Show Phone?;Show Email?
Arturo;Sutter;(+1) 305-586-7321;asutter@suttertek.com;suttertek LLC;https://suttertek.com;Technology;Art-pic001.png;Yes;Yes
Dorothy;Griggs;(+1) 305-775-1420;dlgriggs332@gmail.com;Keyes Co.;;Real Estate;Dorothy.jpg;Yes;Yes
Sergio;Martins;(+1) 786-487-8527;Info@Sergiorealtor.com;Premier Luxe Group LLC;https://www.premierluxegroup.com;Real Estate;Sergio.jpg;Yes;Yes
Faisal;Quintar;(+1) 786-370-2476;prompt.rehabilitation@gmail.com;PromPT Rehabilitation Group LLC;https://prompt-rehabilitation.com/;Health & Wellness;;Yes;Yes
Paola;Cedeno;(+1) 954-401-2767;info@greencornerwall.com;Green Corner Wall Co.;https://www.greencornerwall.com;Eco-friendly Wallpaper;Paola.jpg;Yes;Yes
Philip;Sherlock;(+1) 954-478-6392;Philip.Sherlock@avoyanetwork.com;All Aboard Intl. Com;https://trips.allaboardinternational.com;Travel Agency;Philip.jpg;Yes;Yes
Andreina;Vethencourt;(+1) 305 676-1959;andreinavethencourt@hotmail.com;Kokai Sushi & Lounge;https://www.kokaisushi.com;Japanese Restaurant;;Yes;Yes 
Cecilia;Ycaza;(+1) 786-251-5232;cecilia.ycaza@yahoo.com;CJX GLOBAL VACATIONS CORP;https://www.cjxglobalvacations.com;Travel Agency;;Yes;Yes
Xaviee;Sevilla;(+1) 786-781-8150;xsevilla@cargomasterinc.com;CARGO MASTER LOGISTICS;https://www.cargomasterinc.com;Freight Forwarding;;Yes;Yes 
Harshad;Dombe;(+1) 786-425-7173;progrow.financials@gmail.com;Progrow Financial Services;;Estate planning, Life Insurance and Retirement Planning;;Yes;Yes
Jahaira Villalobos;Arnoux;(+1) 305-335-3367;jvsbeautysuite@gmail.com;JV'sBeautySuite;https://Jayvie1010.com;Hair -Skin - wellness;;Yes;Yes
Valentina;Botero;(+1) 786-587-4167;valenbo@yahoo.com;Etnia accessories;;Fashion jewelry and personalized gifts;;Yes;Yes
Peter;Espinosa;(+1) 305-987-0040;peterespinosa4doral@gmail.com;CDSRUNCLUB;;Run/Walk Club;Peter.jpg;Yes;Yes
Maggie;Terrazas;(+1) 305-345-9762;maggie1.terrazas@gmail.com;Wellness Promoter;;Health and wellness;Maggie.jpg;Yes;Yes
Lina;Matos;(+1) 305-608-6352;linamatosrealtor@gmail.com;Exp Realty;https://www.linamatosrealtor.com;Real Estate / Pre-Construction and Resale;;Yes;Yes
Pierre-Yves;Brunet;(+1) 305-873-4235;py@pybrunet.com;PYBrunet;https://pybrunet.com;AI / Finance / Analytics;Pierre.jpg;Yes;Yes 
Nancy;Brunet;(+1) 786-376-9870;nabrune55@yahoo.com;Napolitano Travel Services;;Accomodations, Cruise, Travel, Accounting;Nancy.jpg;Yes;Yes
Pierre;Cruz;(+1) 786-854-1096;bistrogrilledoral@gmail.com;Costa Bistro Grille & Bar;;Restaurant, bar, events & catering;;Yes;Yes
Alejandro;Becerra;(+1) 786-306-8908;alejandro@opencomm.us;OpenComm;https://www.opencomm.us;Marketing Video & Photo production;;Yes;Yes
Shirley;Rebollo;(+1) 305-338-0876;shirley@TinyThinkersTutoring.com;Tiny Thinkers Tutoting.com;https://www.TinyThinkersTutoring.com;Tutoring;;Yes;Yes
Rosemary;Ravinal;(+1) 305-776-8589;rosemary@rosemaryravinal.com;RMR Communications Consulting LLC;https://rosemaryravinal.com;Bilingual Public speaking coaching, speaker and professional;Rosemary.png;Yes;Yes
Karime;Hernandez;(+1) 786-325-2678;karimehernandezhealth@gmail.com;K Hernandez protection network;https://www.khernandez.net;Health and life insurance agent;;Yes;Yes 

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





