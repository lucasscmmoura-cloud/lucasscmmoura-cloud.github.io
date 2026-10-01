/**
 * Alto Mourão Empreendimentos Imobiliários - Main JavaScript (V1)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Configurable default WhatsApp number for Alto Mourão
  // You can easily update this number whenever needed:
  const DEFAULT_WHATSAPP = '5521999999999'; // Example: 55 + DDD + Telefone (Maricá/RJ usa DDD 21)

  /* ==========================================================================
     1. Sticky Navbar & Scroll Effects
     ========================================================================== */
  const navbar = document.getElementById('navbar');
  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* ==========================================================================
     2. Mobile Drawer Navigation
     ========================================================================== */
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const mobileLinks = document.querySelectorAll('.mobile-drawer-link');

  const openDrawer = () => {
    mobileDrawer?.classList.add('open');
    drawerBackdrop?.classList.add('active');
    mobileToggle?.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    mobileDrawer?.classList.remove('open');
    drawerBackdrop?.classList.remove('active');
    mobileToggle?.classList.remove('active');
    document.body.style.overflow = '';
  };

  mobileToggle?.addEventListener('click', () => {
    const isOpen = mobileDrawer?.classList.contains('open');
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  drawerBackdrop?.addEventListener('click', closeDrawer);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer?.classList.contains('open')) {
      closeDrawer();
    }
  });

  /* ==========================================================================
     3. Scrollspy (IntersectionObserver for Active Navigation)
     ========================================================================== */
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        desktopNavLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
        mobileLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  sections.forEach(sec => observer.observe(sec));

  /* ==========================================================================
     4. Service Cards Quick Action (Auto-select Service in Form)
     ========================================================================== */
  const serviceActionButtons = document.querySelectorAll('[data-select-service]');
  const serviceSelectInput = document.getElementById('contact-service');
  const messageInput = document.getElementById('contact-message');

  serviceActionButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetService = btn.getAttribute('data-select-service');
      if (serviceSelectInput && targetService) {
        serviceSelectInput.value = targetService;
      }
      if (messageInput) {
        messageInput.placeholder = `Olá, gostaria de saber mais sobre ${targetService} em Maricá...`;
      }
    });
  });

  /* ==========================================================================
     5. Phone / WhatsApp Input Formatting (Brazilian format)
     ========================================================================== */
  const phoneInput = document.getElementById('contact-phone');
  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      let val = e.target.value.replace(/\D/g, '');
      if (val.length > 11) val = val.substring(0, 11);

      if (val.length > 10) {
        // (XX) XXXXX-XXXX
        val = val.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
      } else if (val.length > 6) {
        // (XX) XXXX-XXXX
        val = val.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
      } else if (val.length > 2) {
        val = val.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
      } else if (val.length > 0) {
        val = val.replace(/^(\d*)$/, '($1');
      }
      e.target.value = val;
    });
  }

  /* ==========================================================================
     6. Contact Form Submission via WhatsApp & Toast Feedback
     ========================================================================== */
  const contactForm = document.getElementById('contact-form');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');

  const showToast = (msg, duration = 4000) => {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, duration);
  };

  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name')?.value.trim();
    const phone = document.getElementById('contact-phone')?.value.trim();
    const email = document.getElementById('contact-email')?.value.trim();
    const service = document.getElementById('contact-service')?.value || 'Informações Gerais';
    const message = document.getElementById('contact-message')?.value.trim();

    if (!name || !phone) {
      showToast('Por favor, preencha pelo menos seu nome e telefone.');
      return;
    }

    // Build friendly WhatsApp message
    let waText = `*Novo Contato via Site - Alto Mourão*\n\n`;
    waText += `*Nome:* ${name}\n`;
    waText += `*Telefone/WhatsApp:* ${phone}\n`;
    if (email) waText += `*E-mail:* ${email}\n`;
    waText += `*Interesse:* ${service}\n`;
    if (message) waText += `*Mensagem:* ${message}\n`;

    const encodedText = encodeURIComponent(waText);
    const waUrl = `https://wa.me/${DEFAULT_WHATSAPP}?text=${encodedText}`;

    showToast('Encaminhando para o WhatsApp da Alto Mourão...');

    // Open WhatsApp in new tab
    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 600);
  });

  /* ==========================================================================
     7. Dynamic Year in Footer
     ========================================================================== */
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
});
