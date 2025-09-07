
 // -------------------- Welcome typing animation --------------------
      const text = "Hi, I'm Fateme Daghlani";
      let i = 0;
      function typingEffect() {
        if (i < text.length) {
          document.getElementById("welcome-text").innerHTML += text.charAt(i);
          i++;
          setTimeout(typingEffect, 100);
        } else {
          document.getElementById("welcome-text").style.borderRight = "none";
        }
      }
      typingEffect();
      // -------------------------------------------------------------------

      document.addEventListener("DOMContentLoaded", () => {
        // -------------------- Fade-in animation --------------------
        const fadeElements = document.querySelectorAll(".fade-in");
        const fadeObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) entry.target.classList.add("visible");
            });
          },
          { threshold: 0.2 }
        );
        fadeElements.forEach((el) => fadeObserver.observe(el));
        // ------------------------------------------------------------

        // -------------------- Dot navigation --------------------
        const sections = document.querySelectorAll("section");
        const dots = document.querySelectorAll(".dot-nav a");

        const dotObserver = new IntersectionObserver(
          (entries) => {
            let visibleSection = null;
            let maxRatio = 0;

            entries.forEach((entry) => {
              if (entry.intersectionRatio > maxRatio) {
                maxRatio = entry.intersectionRatio;
                visibleSection = entry.target.id;
              }
            });

            if (visibleSection) {
              dots.forEach((dot) => dot.classList.remove("active"));
              const activeDot = document.querySelector(
                `.dot-nav a[href="#${visibleSection}"]`
              );
              if (activeDot) activeDot.classList.add("active");
            }
          },
          { threshold: Array.from({ length: 101 }, (_, i) => i / 100) } // حساسیت بالا
        );

        sections.forEach((section) => dotObserver.observe(section));
        // ------------------------------------------------------------

        const shine = document.querySelector(".shine");

        document.addEventListener("mousemove", (e) => {
          const x = (e.clientX / window.innerWidth) * 100;
          const y = (e.clientY / window.innerHeight) * 100;

          // تغییر موقعیت مرکز radial-gradient بر اساس موس
          shine.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.2) 0%, transparent 60%)`;
        });

        // ---------------------------hobbies slider-------------------------------
        const slides = document.querySelectorAll(".slide");
        const next = document.querySelector(".next");
        const prev = document.querySelector(".prev");

        let index = 0;

        function showSlide(n) {
          slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === n) slide.classList.add("active");
          });
          document.querySelector(".slider").style.transform = `translateX(-${
            n * 100
          }%)`;
        }

        next.addEventListener("click", () => {
          index = (index + 1) % slides.length;
          showSlide(index);
        });

        prev.addEventListener("click", () => {
          index = (index - 1 + slides.length) % slides.length;
          showSlide(index);
        });
      });