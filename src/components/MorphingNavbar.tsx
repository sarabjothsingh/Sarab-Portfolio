// import { useState } from 'react';

// const TAN_COLOR = '#D2B48C'; // tan color hex

// const SimpleNavbar = () => {
//   const menuItems = [
//     { label: 'Home', href: '#hero' },
//     { label: 'About', href: '#about' },
//     { label: 'Skills', href: '#skills' },
//     { label: 'Projects', href: '#projects' },
//     { label: 'Experience', href: '#experience' },
//     { label: 'Contact', href: '#contact' },
//   ];

//   const [active, setActive] = useState('Home');

//   const scrollToSection = (href, label) => {
//     if (href === '#hero') {
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     } else {
//       document.getElementById(href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
//     }
//     setActive(label);
//   };

//   return (
//     <nav className="fixed top-7 right-0 mr-16 z-50">
//       <ul className="flex gap-6 text-white font-semibold text-sm">
//         {menuItems.map(({ label, href }) => (
//           <li key={label}>
//             <button
//               onClick={() => scrollToSection(href, label)}
//               className="relative pb-1 transition-colors duration-200"
//               style={{
//                 background: 'none',
//                 border: 'none',
//                 cursor: 'pointer',
//               }}
//             >
//               <span
//                 className="relative"
//                 style={{
//                   borderBottom: active === label
//                     ? `2px solid ${TAN_COLOR}`
//                     : '2px solid transparent',
//                   transition: 'border-color 0.3s, color 0.3s',
//                   paddingBottom: '2px',
//                   color: active === label ? TAN_COLOR : undefined,
//                 }}
//                 onMouseEnter={e => (e.target.style.color = TAN_COLOR)}
//                 onMouseLeave={e => (e.target.style.color = active === label ? TAN_COLOR : 'white')}
//               >
//                 {label}
//               </span>
//             </button>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default SimpleNavbar;

import { useState, useEffect } from 'react';

const TAN_COLOR = '#D2B48C';
const NAVBAR_OFFSET = 80; // adjust for your navbar height

const SimpleNavbar = () => {
  const menuItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const [active, setActive] = useState('Home');

  const scrollToSection = (href, label) => {
    if (href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = document.getElementById(href.substring(1));
      section?.scrollIntoView({ behavior: 'smooth' });
    }
    setActive(label);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < NAVBAR_OFFSET) {
        // If near the top of the page, highlight Home
        if (active !== 'Home') setActive('Home');
        return;
      }

      let current = 'Home';
      let minDistance = Infinity;

      menuItems.forEach(({ label, href }) => {
        if (label === 'Home') return; // Skip Home - handled by scrollY check

        const section = document.getElementById(href.substring(1));
        if (section) {
          const distance = Math.abs(section.getBoundingClientRect().top - NAVBAR_OFFSET);
          if (distance < minDistance) {
            minDistance = distance;
            current = label;
          }
        }
      });

      if (current !== active) {
        setActive(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initialize on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [active, menuItems]);

  return (
    <nav className="fixed top-7 right-0 mr-16 z-50">
      <ul className="flex gap-6 text-white font-semibold text-sm">
        {menuItems.map(({ label, href }) => (
          <li key={label}>
            <button
              onClick={() => scrollToSection(href, label)}
              className="relative pb-1 transition-colors duration-200"
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <span
                className="relative"
                style={{
                  borderBottom: active === label ? `2px solid ${TAN_COLOR}` : '2px solid transparent',
                  transition: 'border-color 0.3s, color 0.3s',
                  paddingBottom: '2px',
                  color: active === label ? TAN_COLOR : undefined,
                }}
                onMouseEnter={e => (e.target.style.color = TAN_COLOR)}
                onMouseLeave={e => (e.target.style.color = active === label ? TAN_COLOR : 'white')}
              >
                {label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SimpleNavbar;
