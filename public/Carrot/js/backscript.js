window.sections = [...document.querySelectorAll('.ctamainsection')];
window.lastScrollTop = window.pageYOffset;

document.querySelector('.ctabydy').background = window.sections[0].getAttribute('data-bg');

window.addEventListener('scroll', onScroll);

function onScroll() {
  const scrollTop = window.pageYOffset;

  const ctamainsection = window.sections
    .map(ctamainsection => {
      const el = ctamainsection;
      const rect = el.getBoundingClientRect();
      return { el, rect };
    })
    .find(ctamainsection => ctamainsection.rect.bottom >= (window.innerHeight * 0.5));
  document.querySelector('.ctabydy').style.background = ctamainsection.el.getAttribute('data-bg');
}