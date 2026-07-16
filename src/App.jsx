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
          <a href="#business">{lang === 'zh' ? '业务合作' : 'Business'}</a>
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

        {/* Section 5: Business Collaboration */}
        <section id="business" className="snap-section">
          <h2 className="section-title">{lang === 'zh' ? '业务合作' : 'Business Collaboration'}</h2>
          <div className="business-cards-container">
            <div className="business-card">
              <h3>{lang === 'zh' ? '融资与发行' : 'Funding & Publishing'}</h3>
              <p>{lang === 'zh' ? '寻求资金支持与专业的全球发行资源，共同将极简解谜游戏推向更广阔的商业市场。' : 'Seeking financial support and global publishing resources to bring minimalist puzzle games to a broader market.'}</p>
            </div>
            <div className="business-card">
              <h3>{lang === 'zh' ? '希望加入' : 'Join the Team'}</h3>
              <p>{lang === 'zh' ? '如果你也是热爱机制驱动与烧脑逻辑的开发者，非常欢迎加入共同创作。' : 'If you are a developer who loves mechanics-driven and brain-burning logic, you are welcome to join us.'}</p>
            </div>
            <div className="business-card">
              <h3>{lang === 'zh' ? '技术合作' : 'Tech Collaboration'}</h3>
              <p>{lang === 'zh' ? '开放核心玩法代码的授权，承接定制化的小游戏开发，以及各类前沿游戏技术的探索合作。' : 'Open to core gameplay licensing, customized tiny game development, and exploring cutting-edge game tech.'}</p>
            </div>
          </div>
        </section>

        {/* Section 6: Contact Me */}
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
