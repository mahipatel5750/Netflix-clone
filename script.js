// ============================================================
// NETFLIX CLONE - MAIN JAVASCRIPT
// ============================================================


// ============================================================
// DOM CONTENT LOADED
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // --------------------------------------------------------
  // Render Trending Now Carousel
  // --------------------------------------------------------

  renderMovieCarousel('trending-carousel', trendingShowsData);

  setupCarouselNavigation(
    'trending-carousel',
    'scroll-left-trending',
    'scroll-right-trending'
  );


  // --------------------------------------------------------
  // Language Selector
  // --------------------------------------------------------

  const langSelects = document.querySelectorAll('.lang-select');

  langSelects.forEach(select => {

    select.addEventListener('change', (e) => {

      const selectedLang = e.target.value;

      langSelects.forEach(otherSelect => {
        otherSelect.value = selectedLang;
      });

    });

  });

});


// ============================================================
// TRENDING SHOWS DATA
// ============================================================

const trendingShowsData = [

  {
    id: 'musafir-cafe',
    rank: 1,
    title: 'Musafir Cafe',
    type: 'Show',
    bannerImg: 'images/musafir_cafe.png',
    posterImg: 'images/musafir_cafe.png',
    tags: [
      '2026',
      'U/A 13+',
      'Show',
      'Romance',
      'Dramas'
    ],
    description:
      'Chander feels an undeniable connection with Sudha. Years later, he builds a new life in the hills with Preeti, but memories of the past linger.'
  },

  {
    id: 'lock-upp',
    rank: 2,
    title: 'LOCK UPP',
    type: 'Show',
    bannerImg: 'images/lock_upp.png',
    posterImg: 'images/lock_upp.png',
    tags: [
      '2026',
      'U/A 16+',
      'Show',
      'Reality Programming'
    ],
    description:
      'Fifteen celebrity inmates face judgement day in a new-age prison, where a game of power and redemption determines who stays or goes.'
  },

  {
    id: 'batta-kusthi-2',
    rank: 3,
    title: 'Gatta Kusthi 2',
    type: 'Movie',
    bannerImg: 'images/gatta_kusthi_2.png',
    posterImg: 'images/gatta_kusthi_2.png',
    tags: [
      '2026',
      'U/A 13+',
      'Movie',
      'Comedies',
      'Dramas'
    ],
    description:
      "After backing his wife's wrestling career, a stay-at-home father must overcome troublesome critics, parenting woes and new hurdles in his marriage."
  },

  {
    id: 'operation-safed-sagar',
    rank: 4,
    title: 'Operation Safed Sagar',
    type: 'Show',
    bannerImg: 'images/operation_safed_sagar.png',
    posterImg: 'images/operation_safed_sagar.png',
    tags: [
      '2026',
      'U/A 13+',
      'Show',
      'Action',
      'Dramas'
    ],
    description:
      'As the Kargil War erupts between India and Pakistan, the Golden Arrows squadron of the Air Force takes flight on a dangerous mission behind enemy lines.'
  },

  {
    id: 'ikka',
    rank: 5,
    title: 'IKKA',
    type: 'Movie',
    bannerImg: 'images/ikka.png',
    posterImg: 'images/ikka.png',
    tags: [
      '2026',
      'U/A 16+',
      'Movie',
      'Thrillers',
      'Dramas'
    ],
    description:
      "With a loved one's life at stake, a celebrated lawyer must defend a man he suspects is guilty — battling his conscience every step of the way."
  }

];


// ============================================================
// SHOW DETAILS MAP
// IMPORTANT: THIS IS DECLARED ONLY ONCE
// ============================================================

const showDetailsMap = {};

trendingShowsData.forEach(item => {
  showDetailsMap[item.id] = item;
});


// ============================================================
// MOVIE CAROUSEL RENDER FUNCTION
// ============================================================

function renderMovieCarousel(containerId, showsArray) {

  const container = document.getElementById(containerId);

  if (!container) {
    return;
  }

  // Prevent duplicate rendering
  if (container.children.length > 0) {
    return;
  }

  container.innerHTML = showsArray.map(item => `

        <div
            class="trending-card"
            data-show-id="${item.id}"
            onclick="openShowPreview('${item.id}')"
        >

            <span class="rank-number">
                ${item.rank}
            </span>

            <div class="poster-frame">

                <img
                    src="${item.posterImg}"
                    alt="${item.title}"
                >

            </div>

        </div>

    `).join('');
}


// ============================================================
// CAROUSEL NAVIGATION
// ============================================================

function setupCarouselNavigation(
  carouselId,
  leftArrowId,
  rightArrowId
) {

  const carousel = document.getElementById(carouselId);

  const leftArrow = document.getElementById(leftArrowId);

  const rightArrow = document.getElementById(rightArrowId);


  if (!carousel) {
    return;
  }


  function updateArrowVisibility() {

    if (leftArrow) {

      const canScrollLeft =
        carousel.scrollLeft > 15;

      leftArrow.style.opacity =
        canScrollLeft ? '1' : '0';

      leftArrow.style.pointerEvents =
        canScrollLeft ? 'auto' : 'none';
    }


    if (rightArrow) {

      const maxScroll =
        carousel.scrollWidth -
        carousel.clientWidth -
        15;

      const canScrollRight =
        carousel.scrollLeft < maxScroll;

      rightArrow.style.opacity =
        canScrollRight ? '1' : '0';

      rightArrow.style.pointerEvents =
        canScrollRight ? 'auto' : 'none';
    }

  }


  if (leftArrow) {

    leftArrow.addEventListener('click', () => {

      carousel.scrollBy({
        left: -carousel.clientWidth * 0.75,
        behavior: 'smooth'
      });

    });

  }


  if (rightArrow) {

    rightArrow.addEventListener('click', () => {

      carousel.scrollBy({
        left: carousel.clientWidth * 0.75,
        behavior: 'smooth'
      });

    });

  }


  carousel.addEventListener(
    'scroll',
    updateArrowVisibility
  );


  window.addEventListener(
    'resize',
    updateArrowVisibility
  );


  setTimeout(
    updateArrowVisibility,
    100
  );

}


// ============================================================
// HELP CENTER ARTICLES
// ============================================================

const helpArticles = {

  'what-is-netflix': {

    title: 'What is Netflix?',

    img1: 'images/lock_upp.svg',

    content: `
            <p>
                Netflix is a subscription-based
                <strong>streaming service</strong>
                that allows our members to watch TV shows
                and movies on an internet-connected device.
            </p>

            <p>
                Depending on your plan, you can also download
                TV shows and movies to your iOS, Android,
                or Windows 10 device and watch without
                an internet connection!
            </p>

            <h2 class="sub-heading">
                TV Shows & Movies
            </h2>

            <div class="article-hero-media">

                <img
                    src="images/gatta_kusthi_2.svg"
                    alt="TV Shows and Movies"
                    class="article-img"
                >

            </div>

            <p>
                Netflix content varies by region and may
                change over time. You can watch a variety of
                <a href="#" class="red-link">
                    award-winning Netflix originals,
                    TV shows, movies, documentaries, and more
                </a>.
            </p>

            <p>
                The more you watch, the better Netflix gets
                at
                <a href="#" class="red-link">
                    recommending TV shows and movies
                </a>.
            </p>
        `
  },


  'cost': {

    title: 'Plans and Pricing',

    img1: 'images/musafir_cafe.svg',

    content: `
            <p>
                Netflix offers a variety of plans to meet
                your needs. Your plan determines the number
                of devices you can watch Netflix on at the
                same time and whether you can watch in
                High Definition (HD), Full HD (FHD),
                or Ultra HD (UHD).
            </p>

            <p>
                Plans range from ₹149 to ₹649 a month.
                No extra costs, no contracts.
            </p>
        `
  },


  'where-to-watch': {

    title: 'Supported Devices',

    img1: 'images/operation_safed_sagar.svg',

    content: `
            <p>
                You can watch Netflix through any
                internet-connected device that offers
                the Netflix app, including Smart TVs,
                game consoles, streaming media players,
                set-top boxes, smartphones, and tablets.
            </p>
        `
  },


  'cancel': {

    title: 'How to Cancel Netflix',

    img1: 'images/ikka.svg',

    content: `
            <p>
                We are sorry to see you go!
                Cancelling your Netflix account is fast
                and easy. There are no cancellation fees —
                start or stop your account anytime.
            </p>
        `
  },


  'content': {

    title: 'What can I watch on Netflix?',

    img1: 'images/gatta_kusthi_2.svg',

    content: `
            <p>
                Netflix has an extensive library of feature
                films, documentaries, TV shows, anime,
                award-winning Netflix originals, and more.
                Watch as much as you want, anytime you want.
            </p>
        `
  },


  'kids': {

    title: 'Parental Controls on Netflix',

    img1: 'images/lock_upp.svg',

    content: `
            <p>
                The Netflix Kids experience is included
                in your membership to give parents control
                while kids enjoy family-friendly TV shows
                and movies in their own space.
            </p>
        `
  }

};


// ============================================================
// HELP CENTER
// ============================================================

function openHelpCenter(articleId) {

  const modal =
    document.getElementById('help-center-modal');

  const titleElem =
    document.getElementById('article-title');

  const bodyElem =
    document.getElementById('article-body-text');


  const article =
    helpArticles[articleId] ||
    helpArticles['what-is-netflix'];


  if (titleElem) {

    titleElem.textContent =
      article.title;

  }


  if (bodyElem) {

    bodyElem.innerHTML =
      article.content;

  }


  if (modal) {

    modal.classList.add('active');

    modal.scrollTop = 0;

  }

}


function closeHelpCenter() {

  const modal =
    document.getElementById('help-center-modal');


  if (modal) {

    modal.classList.remove('active');

  }

}


// ============================================================
// SIGN IN
// ============================================================

function openSignIn() {

  const modal =
    document.getElementById('signin-modal');


  if (modal) {

    modal.classList.add('active');

    modal.scrollTop = 0;

    document.body.style.overflow = 'hidden';

  }

}


function closeSignIn() {

  const modal =
    document.getElementById('signin-modal');


  if (modal) {

    modal.classList.remove('active');

    document.body.style.overflow = '';

  }

}


function closeSignInOnBackdrop(event) {
  const modal = document.getElementById('signin-modal');
  if (modal && event.target === modal) {
    closeSignIn();
  }
}

window.openSignIn =
  openSignIn;

window.closeSignIn =
  closeSignIn;

window.closeSignInOnBackdrop =
  closeSignInOnBackdrop;


// ============================================================
// SIGN IN HELP
// ============================================================

function toggleSignInHelp() {

  const content =
    document.getElementById('signin-help-content');

  const caret =
    document.getElementById('help-caret');


  if (content) {

    content.classList.toggle('active');

  }


  if (caret && content) {

    if (
      content.classList.contains('active')
    ) {

      caret.classList.replace(
        'fa-chevron-down',
        'fa-chevron-up'
      );

    } else {

      caret.classList.replace(
        'fa-chevron-up',
        'fa-chevron-down'
      );

    }

  }

}


window.toggleSignInHelp =
  toggleSignInHelp;


// ============================================================
// APP STATE
// ============================================================

let userMyList = [];

let activeShowId =
  'musafir-cafe';

let isLoggedIn =
  false;


// ============================================================
// CATEGORY NAVIGATION
// ============================================================

function filterCategory(category) {

  const navLinks =
    document.querySelectorAll('.nav-link');


  navLinks.forEach(link => {

    link.classList.remove('active');

  });


  const activeLink =
    document.getElementById(`nav-${category}`) ||
    document.getElementById('nav-home');


  if (activeLink) {

    activeLink.classList.add('active');

  }


  const cards =
    document.querySelectorAll('.trending-card');


  cards.forEach(card => {

    const showId =
      card.getAttribute('data-show-id');

    const data =
      showDetailsMap[showId];


    if (!data) {
      return;
    }


    if (
      category === 'all' ||
      category === 'popular'
    ) {

      card.style.display = 'flex';

    }

    else if (
      category === 'tv'
    ) {

      card.style.display =
        data.type === 'Show'
          ? 'flex'
          : 'none';

    }

    else if (
      category === 'movies'
    ) {

      card.style.display =
        data.type === 'Movie'
          ? 'flex'
          : 'none';

    }

    else if (
      category === 'mylist'
    ) {

      card.style.display =
        userMyList.includes(showId)
          ? 'flex'
          : 'none';

    }

  });


  if (
    category === 'mylist' &&
    userMyList.length === 0
  ) {

    showToast(
      'Your My List is currently empty!'
    );

  }

}


window.filterCategory =
  filterCategory;


// ============================================================
// SEARCH
// ============================================================

function toggleSearchInput() {

  const widget =
    document.getElementById('search-widget');

  const input =
    document.getElementById('search-input');


  if (widget) {

    widget.classList.toggle('open');


    if (
      widget.classList.contains('open') &&
      input
    ) {

      input.focus();

    }

  }

}


window.toggleSearchInput =
  toggleSearchInput;


function handleSearchInput(e) {

  const query =
    e.target.value
      .toLowerCase()
      .trim();


  const clearBtn =
    document.getElementById('search-clear-btn');


  if (clearBtn) {

    clearBtn.style.display =
      query.length > 0
        ? 'inline-block'
        : 'none';

  }


  const cards =
    document.querySelectorAll('.trending-card');


  cards.forEach(card => {

    const showId =
      card.getAttribute('data-show-id');

    const data =
      showDetailsMap[showId];


    if (!data) {
      return;
    }


    const titleMatch =
      (data.title || showId)
        .toLowerCase()
        .includes(query);


    const genreMatch =
      data.tags.some(
        genre =>
          genre
            .toLowerCase()
            .includes(query)
      );


    const descMatch =
      data.description
        .toLowerCase()
        .includes(query);


    if (
      query === '' ||
      titleMatch ||
      genreMatch ||
      descMatch
    ) {

      card.style.display = 'flex';

    } else {

      card.style.display = 'none';

    }

  });

}


window.handleSearchInput =
  handleSearchInput;


function clearSearchInput() {

  const input =
    document.getElementById('search-input');

  const clearBtn =
    document.getElementById('search-clear-btn');


  if (input) {

    input.value = '';

    input.focus();

  }


  if (clearBtn) {

    clearBtn.style.display =
      'none';

  }


  filterCategory('all');

}


window.clearSearchInput =
  clearSearchInput;


// ============================================================
// MY LIST
// ============================================================

function toggleCurrentShowMyList() {

  if (!activeShowId) {
    return;
  }


  const index =
    userMyList.indexOf(activeShowId);


  if (index === -1) {

    userMyList.push(activeShowId);

    showToast(
      'Added to My List'
    );

  } else {

    userMyList.splice(index, 1);

    showToast(
      'Removed from My List'
    );

  }


  updateMyListUI();

}


window.toggleCurrentShowMyList =
  toggleCurrentShowMyList;


function updateMyListUI() {

  const badge =
    document.getElementById('mylist-count');


  if (badge) {

    badge.textContent =
      userMyList.length;

  }


  const isSaved =
    userMyList.includes(activeShowId);


  const btnIcon =
    document.getElementById('mylist-btn-icon');

  const btnText =
    document.getElementById('mylist-btn-text');


  if (
    btnIcon &&
    btnText
  ) {

    if (isSaved) {

      btnIcon.className =
        'fa-solid fa-check';

      btnText.textContent =
        'In My List';

    } else {

      btnIcon.className =
        'fa-solid fa-plus';

      btnText.textContent =
        'My List';

    }

  }

}


window.updateMyListUI =
  updateMyListUI;


// ============================================================
// TOAST
// ============================================================

function showToast(message) {

  const toast =
    document.getElementById('netflix-toast');

  const msgElem =
    document.getElementById('toast-message');


  if (msgElem) {

    msgElem.textContent =
      message;

  }


  if (toast) {

    toast.classList.add('active');


    setTimeout(() => {

      toast.classList.remove(
        'active'
      );

    }, 3000);

  }

}


window.showToast =
  showToast;


// ============================================================
// VIDEO TRAILER PLAYER
// ============================================================

function playCurrentShowTrailer() {

  const modal =
    document.getElementById(
      'video-player-modal'
    );

  const titleElem =
    document.getElementById(
      'player-title'
    );

  const maturityElem =
    document.getElementById(
      'player-maturity'
    );

  const video =
    document.getElementById(
      'netflix-trailer-video'
    );


  const data =
    showDetailsMap[activeShowId] ||
    showDetailsMap['musafir-cafe'];


  if (titleElem) {

    titleElem.textContent =
      `${data.title || 'Official'} Trailer`;

  }


  if (maturityElem) {

    maturityElem.textContent =
      data.tags[1] || 'U/A 13+';

  }


  if (modal) {

    modal.classList.add('active');


    if (video) {

      video.currentTime = 0;

      video.play().catch(
        error => {
          console.log(
            'Autoplay prevented:',
            error
          );
        }
      );

    }


    document.body.style.overflow =
      'hidden';

  }

}


window.playCurrentShowTrailer =
  playCurrentShowTrailer;


function closeVideoPlayer() {

  const modal =
    document.getElementById(
      'video-player-modal'
    );

  const video =
    document.getElementById(
      'netflix-trailer-video'
    );


  if (modal) {

    modal.classList.remove(
      'active'
    );

  }


  if (video) {

    video.pause();

  }


  document.body.style.overflow =
    '';

}


window.closeVideoPlayer =
  closeVideoPlayer;


// ============================================================
// PROFILE
// ============================================================

function toggleProfileMenu() {

  const menu =
    document.getElementById(
      'profile-menu-box'
    );


  if (menu) {

    menu.classList.toggle(
      'active'
    );

  }

}


window.toggleProfileMenu =
  toggleProfileMenu;


// ============================================================
// EXTRACT NAME
// ============================================================

function extractNameFromEmail(input) {

  if (
    !input ||
    !input.trim()
  ) {

    return 'Mahi Patel';

  }


  const val =
    input.trim();


  if (val.includes('@')) {

    const emailPrefix =
      val.split('@')[0];


    let cleanStr =
      emailPrefix
        .replace(/[0-9]/g, '')
        .replace(/[_.]/g, ' ')
        .trim();


    if (!cleanStr) {

      cleanStr =
        emailPrefix;

    }


    const words =
      cleanStr
        .split(/\s+/)
        .filter(
          word =>
            word.length > 0
        );


    return words
      .map(
        word =>
          word.charAt(0).toUpperCase() +
          word.slice(1).toLowerCase()
      )
      .join(' ') ||
      'Mahi Patel';

  }


  if (/^\d+$/.test(val)) {

    return (
      'Member (' +
      val.slice(-4) +
      ')'
    );

  }


  const words =
    val
      .split(/\s+/)
      .filter(
        word =>
          word.length > 0
      );


  return words
    .map(
      word =>
        word.charAt(0).toUpperCase() +
        word.slice(1).toLowerCase()
    )
    .join(' ');

}


window.extractNameFromEmail =
  extractNameFromEmail;


// ============================================================
// SIGN IN SUBMIT
// ============================================================

function handleSignInSubmit(event) {

  if (event) {

    event.preventDefault();

  }


  const emailInput =
    document.getElementById(
      'signin-email'
    );


  const emailVal =
    emailInput
      ? emailInput.value
      : '';


  const userName =
    extractNameFromEmail(
      emailVal
    );


  signInUser(userName);

}


window.handleSignInSubmit =
  handleSignInSubmit;


// ============================================================
// SIGN IN USER
// ============================================================

function signInUser(
  name = 'Mahi Patel'
) {

  isLoggedIn =
    true;


  const signinBtn =
    document.getElementById(
      'signin-btn'
    );


  const avatarBtn =
    document.getElementById(
      'profile-avatar-btn'
    );


  const profileNameElem =
    document.getElementById(
      'profile-user-name'
    );


  if (profileNameElem) {

    profileNameElem.textContent =
      name;

  }


  if (signinBtn) {

    signinBtn.style.display =
      'none';

  }


  if (avatarBtn) {

    avatarBtn.style.display =
      'flex';

  }


  closeSignIn();


  showToast(
    `Welcome back, ${name}!`
  );

}


window.signInUser =
  signInUser;


// ============================================================
// SIGN OUT
// ============================================================

function signOutUser() {

  isLoggedIn =
    false;


  const signinBtn =
    document.getElementById(
      'signin-btn'
    );


  const avatarBtn =
    document.getElementById(
      'profile-avatar-btn'
    );


  const menu =
    document.getElementById(
      'profile-menu-box'
    );


  if (signinBtn) {

    signinBtn.style.display =
      'inline-flex';

  }


  if (avatarBtn) {

    avatarBtn.style.display =
      'none';

  }


  if (menu) {

    menu.classList.remove(
      'active'
    );

  }


  showToast(
    'Signed out of Netflix'
  );

}


window.signOutUser =
  signOutUser;


// ============================================================
// SHOW PREVIEW
// ============================================================

function openShowPreview(showId) {

  activeShowId =
    showId;


  const modal =
    document.getElementById(
      'show-preview-modal'
    );


  const bannerImg =
    document.getElementById(
      'preview-banner-img'
    );


  const titleText =
    document.getElementById(
      'preview-title-text'
    );


  const tagsRow =
    document.getElementById(
      'preview-tags-row'
    );


  const descElem =
    document.getElementById(
      'preview-show-desc'
    );


  const data =
    showDetailsMap[showId] ||
    showDetailsMap['musafir-cafe'];


  if (!data) {

    return;

  }


  if (bannerImg) {

    bannerImg.src =
      data.bannerImg;

    bannerImg.alt =
      data.title;

  }


  if (titleText) {

    titleText.textContent =
      data.title;

  }


  if (tagsRow) {

    tagsRow.innerHTML =
      data.tags
        .map(
          tag =>
            `<span class="preview-tag-pill">${tag}</span>`
        )
        .join('');

  }


  if (descElem) {

    descElem.textContent =
      data.description;

  }


  if (modal) {

    modal.classList.add(
      'active'
    );

    modal.scrollTop =
      0;

    document.body.style.overflow =
      'hidden';

  }


  updateMyListUI();

}


window.openShowPreview =
  openShowPreview;


// ============================================================
// CLOSE SHOW PREVIEW
// ============================================================

function closeShowPreview() {

  const modal =
    document.getElementById(
      'show-preview-modal'
    );


  if (modal) {

    modal.classList.remove(
      'active'
    );

  }


  document.body.style.overflow =
    '';

}


window.closeShowPreview =
  closeShowPreview;


// ============================================================
// CLOSE SHOW PREVIEW ON BACKDROP
// ============================================================

function closeShowPreviewOnBackdrop(
  event
) {

  const modal =
    document.getElementById(
      'show-preview-modal'
    );


  if (
    modal &&
    event.target === modal
  ) {

    closeShowPreview();

  }

}


window.closeShowPreviewOnBackdrop =
  closeShowPreviewOnBackdrop;


// ============================================================
// FAQ ACCORDION
// ONLY ONE FAQ FUNCTION
// ============================================================

function toggleFAQ(btn) {

  const faqItem = btn ? btn.closest('.faq-item') : null;

  if (!faqItem) {
    return;
  }

  const isActive =
    faqItem.classList.contains(
      'active'
    );

  // Close every FAQ
  document
    .querySelectorAll('.faq-item')
    .forEach(item => {
      item.classList.remove(
        'active'
      );
    });


  // Open clicked FAQ
  if (!isActive) {

    faqItem.classList.add(
      'active'
    );
  }
}


window.toggleFAQ = toggleFAQ;


// ============================================================
// GLOBAL CLICK LISTENER
// ============================================================

document.addEventListener('click', (e) => {

  // ----------------------------------------------------
  // FAQ
  // ----------------------------------------------------

  const faqBtn =
    e.target.closest(
      '.faq-question'
    );


  if (faqBtn) {
    toggleFAQ(
      faqBtn
    );
    return;
  }

  // ----------------------------------------------------
  // Trending Cards
  // ---------------------------------------------------

  const card =
    e.target.closest(
      '.trending-card'
    );

  if (card) {
    const showId =
      card.getAttribute(
        'data-show-id'
      );

    if (showId) {
      openShowPreview(
        showId
      );
    }
  }
}
);

// ===========================================================
// ESCAPE KEY
// ============================================================

document.addEventListener('keydown', (e) => {
  if (
    e.key === 'Escape'
  ) {
    closeVideoPlayer();
    closeShowPreview();
    closeHelpCenter();
    closeSignIn();
  }
}
);