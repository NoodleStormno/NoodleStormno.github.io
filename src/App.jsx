import React, { useState, useRef } from 'react';
import { profile } from './data/profile';
import { commercialGames, jamGames } from './data/games';
import { philosophy } from './data/philosophy';
import avatarImg from './assets/noodlestorm.png';

function App() {
  const [lang, setLang] = useState('zh'); // 'zh' or 'en'
  const commercialRef = useRef(null);
  const jamRef = useRef(null);

  const toggleLang = () => {
    setLang(lang === 'zh' ? 'en' : 'zh');
  };

  const scrollGallery = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -800 : 800;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="top-nav">
        <div className="nav-links">
          <a href="#home">{lang === 'zh' ? '主页' : 'Home'}</a>
          <a href="#philosophy">{lang === 'zh' ? '设计理念' : 'Philosophy'}</a>
          <a href="#jam">{lang === 'zh' ? '创意原型' : 'Jam Games'}</a>
          <a href="#contact">{lang === 'zh' ? '联系合作' : 'Contact'}</a>
        </div>
        <button className="nav-lang-toggle" onClick={toggleLang}>
          {lang === 'zh' ? 'EN' : '中'}
        </button>
      </nav>

      <div className="snap-container">
        
        {/* Section 1: Hero & Commercial Games */}
        <section id="home" className="snap-section" style={{ paddingTop: '15vh' }}>
          <div className="hero-header">
            <img src={avatarImg} alt="NoodleStorm Avatar" className="hero-avatar" />
            <div className="hero-text">
              <h1>{profile.name}</h1>
              <p className="subtitle">
                {profile.bio[lang]}
              </p>
            </div>
          </div>

          <div className="gallery-wrapper">
            <button className="scroll-btn left" onClick={() => scrollGallery(commercialRef, 'left')}>‹</button>
            <div className="horizontal-gallery" ref={commercialRef}>
              {commercialGames.map(game => (
                <div key={game.id} className="commercial-card">
                  <div className="commercial-image-wrapper">
                    <img src={game.image} alt={game.title} className="commercial-image" />
                  </div>
                  <div className="commercial-info" style={{ textAlign: 'left' }}>
                    <h3 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{game.title}</h3>
                    <div className="tags">
                      {game.tags[lang].map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '30px' }}>{game.description[lang]}</p>
                    <div>
                      {game.links.map(link => (
                        <a key={link.platform} href={link.url} target="_blank" rel="noreferrer" className="btn">
                          {link.platform}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="scroll-btn right" onClick={() => scrollGallery(commercialRef, 'right')}>›</button>
          </div>
        </section>

        {/* Section 3: Design Philosophy */}
        <section id="philosophy" className="snap-section">
          <h2 className="section-title">{philosophy.title[lang]}</h2>
          <div className="text-card">
            {philosophy.paragraphs.map((p, idx) => (
              <p key={idx} className="philosophy-text">
                {p[lang]}
              </p>
            ))}
          </div>
        </section>

        {/* Section 4: Jam Games */}
        <section id="jam" className="snap-section">
          <h2 className="section-title">{lang === 'zh' ? '创意原型 (Jam Games)' : 'Jam Games'}</h2>
          <div className="gallery-wrapper">
            <button className="scroll-btn left" onClick={() => scrollGallery(jamRef, 'left')}>‹</button>
            <div className="horizontal-gallery jam-gallery" ref={jamRef}>
              {jamGames.map(game => (
                <a key={game.id} href={game.url} target="_blank" rel="noreferrer" className="jam-card">
                  <div className="jam-image-wrapper">
                    <img src={game.image} alt={game.title} className="jam-image" />
                  </div>
                  <div className="jam-info">
                    <h3>{game.title}</h3>
                    <p>{game.description[lang]}</p>
                  </div>
                </a>
              ))}
            </div>
            <button className="scroll-btn right" onClick={() => scrollGallery(jamRef, 'right')}>›</button>
          </div>
        </section>

        {/* Section 5: Contact Me */}
        <section id="contact" className="snap-section">
          <h2 className="section-title">{lang === 'zh' ? '联系合作' : 'Contact Me'}</h2>
          <div className="contact-links">
            <a href={`mailto:${profile.contact.email}`}>Email: {profile.contact.email}</a>
            <a href={`https://bsky.app/profile/${profile.contact.bluesky}`} target="_blank" rel="noreferrer">
              Bluesky: @{profile.contact.bluesky}
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
