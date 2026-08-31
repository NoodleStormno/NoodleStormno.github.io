import React, { useState, useEffect } from 'react';
import { profile } from './data/profile';
import { commercialGames, jamGames } from './data/games';
import { philosophy } from './data/philosophy';
import avatarImg from './assets/noodlestorm.png';

function App() {
  const [lang, setLang] = useState('zh'); // 'zh' or 'en'
  const toggleLang = () => {
    setLang(lang === 'zh' ? 'en' : 'zh');
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          entry.target.classList.remove('is-visible');
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className="top-nav">
        <div className="nav-links">
          <a href="#home">{lang === 'zh' ? '主页' : 'Home'}</a>
          <a href="#jam">{lang === 'zh' ? '创意原型' : 'Jam Games'}</a>
          <a href="#philosophy">{lang === 'zh' ? '设计理念' : 'Philosophy'}</a>
          <a href="#business">{lang === 'zh' ? '业务合作' : 'Business'}</a>
          <a href="#contact">{lang === 'zh' ? '联系合作' : 'Contact'}</a>
        </div>
        <button className="nav-lang-toggle" onClick={toggleLang}>
          {lang === 'zh' ? 'EN' : '中'}
        </button>
      </nav>

      <div className="snap-container">
        
        {/* Section 1: Home (First Page) */}
        <section id="home" className="snap-section full-page reveal-on-scroll">
          <div className="hero-stack">
            <img src={avatarImg} alt="NoodleStorm" className="hero-logo-large" />
            <h1>NoodleStorm</h1>
            <p className="subtitle">{profile.bio[lang]}</p>
          </div>
        </section>

        {/* Section 2: Commercial Games (Second Page) */}
        <section id="commercial" className="snap-section reveal-on-scroll">
          <div className="commercial-grid">
            {commercialGames.map(game => (
              <div key={game.id} className="commercial-card-container">
                <div className="commercial-card">
                  <div className="commercial-image-wrapper">
                    <img src={game.image} alt={typeof game.title === 'string' ? game.title : game.title[lang]} className="commercial-image" />
                    <div className="tags">
                      {game.tags[lang].map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                    <div className="commercial-links-overlay">
                      {game.links.map(link => (
                        <a key={link.platform} href={link.url} target="_blank" rel="noreferrer" className="btn overlay-btn">
                          {link.platform}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="commercial-info-static">
                    <h3 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{typeof game.title === 'string' ? game.title : game.title[lang]}</h3>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{game.description[lang]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Jam Games */}
        <section id="jam" className="snap-section reveal-on-scroll">
          <h2 className="section-title">{lang === 'zh' ? '创意原型 (Jam Games)' : 'Jam Games'}</h2>
          <div className="jam-grid">
            {jamGames.map(game => (
              <a key={game.id} href={game.url} target="_blank" rel="noreferrer" className="jam-card">
                <div className="jam-image-wrapper">
                  <img src={game.image} alt={typeof game.title === 'string' ? game.title : game.title[lang]} className="jam-image" />
                </div>
                <div className="jam-info">
                  <h3>{typeof game.title === 'string' ? game.title : game.title[lang]}</h3>
                  <p>{game.description[lang]}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Section 4: Design Philosophy */}
        <section id="philosophy" className="snap-section reveal-on-scroll">
          <h2 className="section-title">{philosophy.title[lang]}</h2>
          <div className="cards-container">
            {philosophy.items.map((item, idx) => (
              <div key={idx} className="feature-card">
                <h3>{item.title[lang]}</h3>
                <p>{item.text[lang]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Business Collaboration */}
        <section id="business" className="snap-section reveal-on-scroll">
          <h2 className="section-title">{lang === 'zh' ? '业务合作' : 'Business Collaboration'}</h2>
          <div className="cards-container">
            <div className="feature-card">
              <h3>{lang === 'zh' ? '融资与发行' : 'Funding & Publishing'}</h3>
              <p>{lang === 'zh' ? '寻求资金支持与专业的全球发行资源，共同将极简解谜游戏推向更广阔的商业市场。' : 'Seeking financial support and global publishing resources to bring minimalist puzzle games to a broader market.'}</p>
            </div>
            <div className="feature-card">
              <h3>{lang === 'zh' ? '合作开发' : 'Co-development'}</h3>
              <p>{lang === 'zh' ? '如果你也是热爱机制驱动与烧脑逻辑的开发者，非常欢迎加入共同创作。' : 'If you are a developer who loves mechanics-driven and brain-burning logic, you are welcome to join us in co-development.'}</p>
            </div>
            <div className="feature-card">
              <h3>{lang === 'zh' ? '技术合作' : 'Tech Collaboration'}</h3>
              <p>{lang === 'zh' ? '开放核心玩法代码的授权，承接定制化的小游戏开发，以及各类前沿游戏技术的探索合作。' : 'Open to core gameplay licensing, customized tiny game development, and exploring cutting-edge game tech.'}</p>
            </div>
          </div>
        </section>

        {/* Section 6: Contact Me */}
        <section id="contact" className="snap-section reveal-on-scroll">
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
