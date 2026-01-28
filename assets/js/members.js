// =============================================
// Costa Biz Club Directory – JS by Suttertek
// =============================================

// =============================================
// Embedded CSV Data – No fetch, no file access
// =============================================
const csvData = `
Name;Last Name;Phone;Email;Business Name;Website;Type of Business;Picture Filename;Show Phone?;Show Email?
Dorothy;Griggs;(+1) 305-775-1420;dlgriggs332@gmail.com;Keyes Co.;;Real Estate;Dorothy.jpg;Yes;Yes
Arturo;Sutter;(+1) 305-586-7321;asutter@suttertek.com;suttertek LLC;https://suttertek.com;Technology;Art-pic001.png;Yes;Yes
Sergio;Martins;(+1) 786-487-8527;Info@Sergiorealtor.com;Premier Luxe Group LLC;https://www.premierluxegroup.com;Real Estate;Sergio.jpg;Yes;Yes
Faisal;Quintar;(+1) 786-370-2476;prompt.rehabilitation@gmail.com;PromPT Rehabilitation Group LLC;https://prompt-rehabilitation.com/;Health & Wellness;Faisal.jpg;Yes;Yes
Paola;Cedeno;(+1) 954-401-2767;info@greencornerwall.com;Green Corner Wall Co.;https://www.greencornerwall.com;Eco-friendly Wallpaper;Paola.jpg;Yes;Yes
Philip;Sherlock;(+1) 954-478-6392;Philip.Sherlock@avoyanetwork.com;All Aboard Intl. Com;https://trips.allaboardinternational.com;Travel Agency;Philip.jpg;Yes;Yes
Andreina;Vethencourt;(+1) 305 676-1959;andreinavethencourt@hotmail.com;Kokai Sushi & Lounge;https://www.kokaisushi.com;Japanese Restaurant;;Yes;Yes 
Cecilia;Ycaza;(+1) 786-251-5232;cecilia.ycaza@yahoo.com;CJX GLOBAL VACATIONS CORP;https://www.cjxglobalvacations.com;Travel Agency;;Yes;Yes
Xavier;Sevilla;(+1) 786-781-8150;xsevilla@cargomasterinc.com;CARGO MASTER LOGISTICS;https://www.cargomasterinc.com;Freight Forwarding;;Yes;Yes
Harshad;Dombe;(+1) 786-425-7173;progrow.financials@gmail.com;Progrow Financial Services;;Estate planning, Life Insurance and Retirement Planning;;Yes;Yes
Jahaira Villalobos;Arnoux;(+1) 305-335-3367;jvsbeautysuite@gmail.com;JV'sBeautySuite;https://Jayvie1010.com;Hair -Skin - wellness;Jahaira.jpg;Yes;Yes
Valentina;Botero;(+1) 786-587-4167;valenbo@yahoo.com;Etnia accessories;;		Fashion jewelry and personalized gifts;;Yes;Yes
Peter;Espinosa;(+1) 305-987-0040;peterespinosa4doral@gmail.com;CDSRUNCLUB;;Run/Walk Club;Peter.jpg;Yes;Yes
Maggie;Terrazas;(+1) 305-345-9762;maggie1.terrazas@gmail.com;Wellness Promoter;;Health and wellness;Maggie.jpg;Yes;Yes
Lina;Matos;(+1) 305-608-6352;linamatosrealtor@gmail.com;Exp Realty;https://www.linamatosrealtor.com;Real Estate / Pre-Construction and Resale;Lina.jpg;Yes;Yes
Pierre-Yves;Brunet;(+1) 305-873-4235;py@pybrunet.com;PYBrunet;https://pybrunet.com;AI / Finance / Analytics;Pierre.jpg;Yes;Yes 
Nancy;Brunet;(+1) 786-376-9870;nabrune55@yahoo.com;Napolitano Travel Services;;Accomodations, Cruise, Travel, Accounting;Nancy.jpg;Yes;Yes
Pierre;Cruz;(+1) 786-854-1096;bistrogrilledoral@gmail.com;Costa Bistro Grille & Bar;;Restaurant, bar, events & catering;;Yes;Yes
Alejandro;Becerra;(+1) 786-306-8908;alejandro@opencomm.us;OpenComm;https://www.opencomm.us;Marketing Video & Photo production;;Yes;Yes
Shirley;Rebollo;(+1) 305-338-0876;shirley@TinyThinkersTutoring.com;Tiny Thinkers Tutoting.com;https://www.TinyThinkersTutoring.com;Tutoring;;Yes;Yes
Rosemary;Ravinal;(+1) 305-776-8589;rosemary@rosemaryravinal.com;RMR Communications Consulting LLC;https://rosemaryravinal.com;Bilingual Public speaking coaching, speaker and professional;Rosemary.png;Yes;Yes
Karime;Hernandez;(+1) 786-325-2678;karimehernandezhealth@gmail.com;K Hernandez protection network;https://www.khernandez.net;Health and life insurance agent;Karime.jpg;Yes;Yes
Cristina;Fernandez;(+1) 786-241-6055;cristina@lavillainteriordesign.com;La Villa Interior Design LLC;https://lavillainteriordesign.com;Architecture & Interior design;Cristina.jpg;Yes;Yes
Cristina;Fernandez;(+1) 786-725-6870;cfjorge@hotmail.com;Costa Music & Piano Lessons;;Music & Piano Lessons;;Yes;Yes
Francisco J;Kayser PA;(+1) 786-316-6526;franciscokayser@keyes.com;The Keyes Company;https://franciscokayser.keyes.com;Residential & Commercial Realtor;Francisco.jpg;Yes;Yes
Patrick;Laine;(+1) 850-866-6686;patrick@dreamigos.com;Dreamigos;https://dreamigos.com;Self discovery & dream interpretation;;Yes;Yes
Kevin;Arnoux;(+1) 786 299 0326;karnoux@floridacardservices.com;Florida Card Services;https://www.floridacardservices.com;Simplified, Modern Systems;;Yes;Yes 
Giorgio;Mattoli;(+1) 305 988 8586;giorgio.mattoli@prowinch.com;Prowinch;https://www.prowinch.com/;Industrial lifting equipment, Winche's, VFD, Wireless system;Giorgio.png;Yes;Yes
Kurk;Antón;(+1) 305 298 1974;Kurk.anton@taxfyle.com;Taxfyle;https://www.taxfyle.com;Accounting and Taxes;;Yes;Yes
Jenny;Rubio;(+1) 419-788-0097;jennylrubio@gmail.com;The Blue House Bread Club;;Sourdough bread delivered to you;;Yes;Yes 
Natasha;Salmon;(+1) 786-484-4889;salmoncogno@gmail.com;Yoga with Natasha;;Yoga & Meditation Teacher;Natasha.jpg;Yes;Yes
Fabrizio;Colombi;(+1) 305-934-5840;fcolombi@decographic.net;Visual Angle Media;https://www.visualanglemedia.com;Corporate Video Production Services;;Yes;Yes
Fabrizio;Colombi;(+1) 305-934-5840;fcolombi@decographic.net;Decographic, Inc.;https://www.decographic.net;Enterprise Digital Marketing Services;;Yes;Yes
Paloma;Fernandini;(+1) 305-310-0208;info@donutshare.com;DoNUTShare;https://www.donutshare.com;Candied Nuts & More;;Yes;Yes
Lucia;Bartolone Buendia;(+1) 786-367-6685;luciarath@aol.de;CRUMBS by Buendia;;Micro Bakery - Sourdough Bread, Pastries, Cakes and more;;Yes;Yes
Miguel;Zulueta Sr;(+1) 786-718-0665;miguelazulueta@gmail.com;Summit Financial and Investment Advisors (Part of the Principal Group);https://www.miguelzulueta.com;Financial and Investment Advisor;Miguel.jpg;Yes;Yes
Barbie;Rios;(+1) 786-389-3058;your1petsbestfriend@gmail.com;Your Pets Bestfriend;;Pets sitter;Barbie.jpg;Yes;Yes
Nohra;Levy;(+1) 305-336-8790;NLevy17@gmail.com;Nohra Levy Real Estate/DOT Funding;https://nohralevyrealestate.com;Residential Mortgage Loans & Realtor;Nohra.jpg;Yes;Yes
Jeff;Policard;(+1) 786-525-7975;jeff@vupromo.com;Vu Promo;https://vupromo.com;Promotional Items & Experiential Marketing;Jeff.jpg;Yes;Yes
Carmen;Spangaro;(+1) 305-586-6587;carmenspangaro@me.com;MIArgentina;;;;Yes;Yes
Doris;Dip;(+1) 305-898-7321;info@dipintonutrition.com;Dip Into Nutrition LLC;https://dipintonutrition.com;Nutrition Consulting;;Yes;Yes
Lourdes;Del Rio;(+1) 786-449-0757;PodcasrEnPositivo@gmail.com;MediaLDR LLC;https://lourdesdelrio.com;Podcast;;Yes;Yes
Anamaris;Montanez;(+1) 305-903-8323;Themaxicrafts@gmail.com;Maxi Crafts;https://linktr.ee/iamanamaris?;Sublimation, DTF, Rhinestone crafts on pen and tumblers, etc;Anamaris.png;Yes;Yes
Paulo;Castro;(+1) 949-310-2796;pcastro7@me.com;Renzo Gracie Doral;https://renzograciedoral.com;Jiu JItsu - Martial arts and Self Defense;;Yes;Yes
Freddy;Martinez;(+1) 305-213-3106;freddydavidmartinez@hotmail.com;Aro Property investment LLC;;Construction and remodeling;Freddy.jpg;Yes;Yes
Roberto;Villani;(+1) 305-525-4850;Robertovillani@hotmail.com;Florida Select Realty;;Commercial & Residential Real Estate;;Yes;Yes
Paola;Donatiello;(+1) 786-458-9612;paola@mayoraaudioproductions.com;Mayora Audio Productions;www.mayoraaudioproductions.com;Sales & rent Audio Visual Equipment - Conference, Private party - Dj services;;Yes;Yes 
Carla;Pella;(+1) 305-915-2855;Cmonicap08@gmail.com;Mighty;;Amazon Bussiness Prime;;Yes;Yes 

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

// Responsive page size: 9 (desktop), 6 (tablet), 3 (phones)
function getMembersPerPage() {
  const w = window.innerWidth;
  if (w >= 1024) return 9;  // desktop: 3 rows × 3 columns
  if (w >= 640)  return 6;  // tablets: 2 rows × 3 columns
  return 3;                 // phones: 1 row × 3 columns
}
let MEMBERS_PER_PAGE = getMembersPerPage();

// =====================================
// Function to render member cards
// =====================================
function renderDirectory(memberList) {
  const container = document.getElementById('directory-list');
  if (!container) return;
  container.innerHTML = '';

  memberList.forEach(member => {
    const showPhone = member["Show Phone?"]?.toLowerCase() === "yes";
    const showEmail = member["Show Email?"]?.toLowerCase() === "yes";

    // If both phone & email are hidden, skip the card entirely
    if (!showPhone && !showEmail) return;

    const card = document.createElement('div');
    card.className = 'member-card';

    const imgSrc = member["Picture Filename"]
      ? `assets/img/members/${member["Picture Filename"]}`
      : 'assets/img/members/default.png';

    // build the email row (no button; click the email to copy)
    const emailRow = showEmail
      ? '<p class="email">✉️ ' +
          '<span class="email-text" title="' + member.Email + '" data-email="' + member.Email + '">' +
           member.Email +
          '</span>' +
        '</p>'
      : '';

    card.innerHTML =
      '<img src="' + imgSrc + '" alt="' + member.Name + '" class="member-photo">' +
      '<h3>' + member.Name + ' ' + (member["Last Name"] || '') + '</h3>' +
      '<p class="business"><strong><span title="' + (member["Business Name"] || '') + '">' +
        (member["Business Name"] || '') +
      '</span></strong></p>' +
      '<p class="type"><em>' + (member["Type of Business"] || '') + '</em></p>' +
      (showPhone ? '<p>📞 ' + member.Phone + '</p>' : '') +
      emailRow +
      (member.Website ? '<p><a href="' + member.Website + '" target="_blank">🌐 Website</a></p>' : '');

    container.appendChild(card);
  });
}

// Smooth-scroll back to the directory section after changing pages
function scrollToDirectoryTop() {
  const sec = document.getElementById('directory');
  if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// =====================================
// Function to render a page of members
// =====================================
function renderDirectoryPage(page) {
  const start = (page - 1) * MEMBERS_PER_PAGE;
  const end = start + MEMBERS_PER_PAGE;
  const currentMembers = filteredMembers.slice(start, end);
  renderDirectory(currentMembers);
  renderPaginationControls(page);
}

// =====================================
// Pagination controls
// =====================================
// Build a compact page list with ellipses, e.g. [1, '…', 7, 8, 9, '…', 34]
function buildCompactPages(current, total, halfWindow) {
  const pages = new Set([1, total]);

  // Always include a “window” around current
  for (let p = current - halfWindow; p <= current + halfWindow; p++) {
    if (p >= 1 && p <= total) pages.add(p);
  }

  // Turn into sorted array
  const list = Array.from(pages).sort((a, b) => a - b);

  // Inject ellipses for gaps > 1
  const withDots = [];
  for (let i = 0; i < list.length; i++) {
    withDots.push(list[i]);
    if (i < list.length - 1 && list[i + 1] !== list[i] + 1) {
      withDots.push('…');
    }
  }
  return withDots;
}

function renderPaginationControls(current) {
  const pagination = document.getElementById('pagination');
  if (!pagination) return;
  pagination.innerHTML = '';

  const totalPages = Math.ceil(filteredMembers.length / MEMBERS_PER_PAGE);
  if (totalPages <= 1) return;

  // Smaller window on tiny screens (±1), larger on others (±2)
  const halfWindow = window.innerWidth < 480 ? 1 : 2;

  // Prev
  const prevBtn = document.createElement('button');
  prevBtn.textContent = 'Prev';
  prevBtn.disabled = current <= 1;
  prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage -= 1;
      renderDirectoryPage(currentPage);
      scrollToDirectoryTop();
    }
  });
  pagination.appendChild(prevBtn);

  // Numbered buttons with ellipses
  const items = buildCompactPages(current, totalPages, halfWindow);
  items.forEach(it => {
    if (it === '…') {
      const span = document.createElement('span');
      span.textContent = '…';
      span.setAttribute('aria-hidden', 'true');
      pagination.appendChild(span);
    } else {
      const btn = document.createElement('button');
      btn.textContent = String(it);
      if (it === current) btn.classList.add('active');
      btn.setAttribute('aria-label', `Go to page ${it}`);
      if (it === current) btn.setAttribute('aria-current', 'page');
      btn.addEventListener('click', () => {
        currentPage = it;
        renderDirectoryPage(currentPage);
        scrollToDirectoryTop();
      });
      pagination.appendChild(btn);
    }
  });

  // Next
  const nextBtn = document.createElement('button');
  nextBtn.textContent = 'Next';
  nextBtn.disabled = current >= totalPages;
  nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage += 1;
      renderDirectoryPage(currentPage);
      scrollToDirectoryTop();
    }
  });
  pagination.appendChild(nextBtn);
}

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

// Copy-to-clipboard: click the email text (no button, no extra width)
document.addEventListener('click', (e) => {
  const el = e.target && e.target.closest ? e.target.closest('.email-text') : null;
  if (!el) return;

  const email = el.getAttribute('data-email') || el.textContent || '';
  if (!email) return;

  const flash = (msg) => {
    const prev = el.textContent;
    el.textContent = msg;
    setTimeout(() => (el.textContent = prev), 900);
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(email).then(() => flash('Copied!')).catch(() => {});
  } else {
    const ta = document.createElement('textarea');
    ta.value = email;
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch {}
    document.body.removeChild(ta);
    flash('Copied!');
  }
});


// ================================
// Initial directory render
// ================================
renderDirectoryPage(currentPage);






























