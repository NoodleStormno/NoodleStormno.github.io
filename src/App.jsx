import React from 'react';
import ReactMarkdown from 'react-markdown';
import { profile } from './data/profile';
import { commercialGames, jamGames } from './data/games';
import { articles } from './data/articles';

function App() {
  return (
    <div className="container">
      {/* 1. Hero / 个人介绍 */}
      <section className="section hero">
        <h1>{profile.name}</h1>
        <h2>{profile.title}</h2>
        <p>{profile.bio}</p>
        <div style={{ marginTop: '20px' }}>
          {profile.socials.map(social => (
            <a key={social.name} href={social.url} target="_blank" className="btn">
              {social.name}
            </a>
          ))}
        </div>
      </section>

      {/* 2. 商业游戏 (1行1个) */}
      <section className="section">
        <h2 className="section-title">Commercial Games</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {commercialGames.map(game => (
            <div key={game.id} className="glass-card commercial-game">
              <img src={game.image} alt={game.title} />
              <div className="commercial-info">
                <h3>{game.title}</h3>
                <div className="game-tags">
                  {game.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
                <p style={{ marginBottom: '20px' }}>{game.description}</p>
                <div>
                  {game.links.map(link => (
                    <a key={link.platform} href={link.url} target="_blank" className="btn">
                      {link.platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Jam Games (1行3个) */}
      <section className="section">
        <h2 className="section-title">Game Jam Projects</h2>
        <div className="jam-grid">
          {jamGames.map(game => (
            <a key={game.id} href={game.url} target="_blank" className="glass-card jam-card">
              <h3>{game.title}</h3>
              <p style={{ color: 'var(--text-muted)' }}>{game.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* 4. 练习方式 (联系方式) */}
      <section className="section">
        <h2 className="section-title">Contact</h2>
        <div className="glass-card">
          <p>Email: <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a></p>
          <p>Twitter: <a href={`https://twitter.com/${profile.contact.twitter.replace('@','')}`} target="_blank">{profile.contact.twitter}</a></p>
        </div>
      </section>

      {/* 5. 文章区域 */}
      <section className="section">
        <h2 className="section-title">Articles</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {articles.map(article => (
            <div key={article.id} className="glass-card article-item">
              <h3>{article.title}</h3>
              <div className="article-meta">{article.date}</div>
              <div className="markdown-body">
                <ReactMarkdown>{article.content}</ReactMarkdown>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
        <p>&copy; 2026 {profile.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
