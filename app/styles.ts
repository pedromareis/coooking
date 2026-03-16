export const style = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --cream: #FAF7F2;
    --warm-white: #FFF9F2;
    --brown: #3B2A1A;
    --terracotta: #C4622D;
    --sage: #7A8C6E;
    --gold: #D4A853;
    --muted: #9E8E7E;
    --border: #E8DDD0;
    --card-bg: #FFFFFF;
    --shadow: 0 2px 20px rgba(59,42,26,0.08);
    --shadow-hover: 0 8px 40px rgba(59,42,26,0.15);
  }

  body { font-family: 'DM Sans', sans-serif; background: var(--cream); color: var(--brown); }

  /* AUTH */
  .auth-page {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .auth-visual {
    background: var(--brown);
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    padding: 3rem;
    position: relative;
    overflow: hidden;
  }
  .auth-visual::before {
    content: '';
    position: absolute;
    width: 400px; height: 400px;
    border-radius: 50%;
    background: var(--terracotta);
    opacity: 0.15;
    top: -100px; right: -100px;
  }
  .auth-visual::after {
    content: '';
    position: absolute;
    width: 300px; height: 300px;
    border-radius: 50%;
    background: var(--gold);
    opacity: 0.1;
    bottom: -80px; left: -80px;
  }
  .auth-brand {
    font-family: 'Playfair Display', serif;
    color: #FAF7F2;
    text-align: center;
    z-index: 1;
  }
  .auth-brand h1 { font-size: 3.5rem; font-style: italic; line-height: 1; }
  .auth-brand p { font-size: 1rem; color: var(--gold); margin-top: 0.75rem; letter-spacing: 0.2em; text-transform: uppercase; font-family: 'DM Sans', sans-serif; font-weight: 300; }
  .auth-deco {
    font-size: 8rem;
    margin-bottom: 1.5rem;
    filter: drop-shadow(0 4px 16px rgba(0,0,0,0.3));
  }
  .auth-form-panel {
    display: flex; align-items: center; justify-content: center;
    background: var(--warm-white);
    padding: 3rem;
  }
  .auth-form-wrap { width: 100%; max-width: 380px; }
  .auth-form-wrap h2 { font-family: 'Playfair Display', serif; font-size: 2rem; margin-bottom: 0.5rem; }
  .auth-form-wrap p { color: var(--muted); font-size: 0.9rem; margin-bottom: 2rem; }
  .field { margin-bottom: 1.25rem; }
  .field label { display: block; font-size: 0.8rem; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); margin-bottom: 0.4rem; }
  .field input {
    width: 100%; padding: 0.75rem 1rem;
    border: 1.5px solid var(--border);
    border-radius: 8px;
    font-family: 'DM Sans', sans-serif; font-size: 0.95rem;
    background: white; color: var(--brown);
    transition: border-color 0.2s;
    outline: none;
  }
  .field input:focus { border-color: var(--terracotta); }
  .btn-primary {
    width: 100%; padding: 0.85rem;
    background: var(--terracotta); color: white;
    border: none; border-radius: 8px;
    font-family: 'DM Sans', sans-serif; font-size: 0.95rem; font-weight: 500;
    cursor: pointer; transition: background 0.2s, transform 0.1s;
    letter-spacing: 0.03em;
  }
  .btn-primary:hover { background: #b05527; }
  .btn-primary:active { transform: scale(0.99); }
  .auth-hint { text-align: center; margin-top: 1.25rem; font-size: 0.85rem; color: var(--muted); }
  .auth-hint span { color: var(--terracotta); cursor: pointer; font-weight: 500; }
  .auth-error { background: #FDE8E0; border: 1px solid #F5C0A8; border-radius: 8px; padding: 0.7rem 1rem; font-size: 0.85rem; color: #A8391A; margin-bottom: 1rem; }

  /* APP SHELL */
  .app-shell { min-height: 100vh; display: flex; flex-direction: column; }
  .topbar {
    background: var(--brown);
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 2rem;
    height: 64px;
    position: sticky; top: 0; z-index: 100;
  }
  .topbar-brand { font-family: 'Playfair Display', serif; color: var(--cream); font-size: 1.5rem; font-style: italic; display: flex; align-items: center; gap: 0.5rem; }
  .topbar-brand span { font-size: 1.3rem; }
  .topbar-right { display: flex; align-items: center; gap: 1rem; }
  .user-chip { display: flex; align-items: center; gap: 0.6rem; color: var(--cream); font-size: 0.85rem; }
  .user-avatar {
    width: 32px; height: 32px;
    border-radius: 50%; background: var(--terracotta);
    display: flex; align-items: center; justify-content: center;
    font-weight: 600; font-size: 0.8rem; color: white;
  }
  .btn-logout { background: transparent; border: 1px solid rgba(255,255,255,0.2); color: var(--cream); padding: 0.4rem 1rem; border-radius: 6px; font-family: 'DM Sans', sans-serif; font-size: 0.8rem; cursor: pointer; transition: background 0.2s; }
  .btn-logout:hover { background: rgba(255,255,255,0.1); }

  /* MAIN */
  .main-content { flex: 1; padding: 2.5rem 2rem; max-width: 1400px; margin: 0 auto; width: 100%; }
  .page-header { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 2rem; flex-wrap: wrap; gap: 1rem; }
  .page-title h1 { font-family: 'Playfair Display', serif; font-size: 2.5rem; line-height: 1.1; }
  .page-title p { color: var(--muted); margin-top: 0.25rem; font-size: 0.95rem; }
  .header-actions { display: flex; align-items: center; gap: 0.75rem; }
  .view-toggle { display: flex; border: 1.5px solid var(--border); border-radius: 8px; overflow: hidden; }
  .view-btn { background: transparent; border: none; padding: 0.5rem 0.75rem; cursor: pointer; color: var(--muted); font-size: 1.1rem; transition: background 0.15s, color 0.15s; }
  .view-btn.active { background: var(--brown); color: white; }
  .btn-add {
    display: flex; align-items: center; gap: 0.5rem;
    background: var(--terracotta); color: white;
    border: none; padding: 0.6rem 1.25rem;
    border-radius: 8px; font-family: 'DM Sans', sans-serif; font-size: 0.9rem; font-weight: 500;
    cursor: pointer; transition: background 0.2s;
  }
  .btn-add:hover { background: #b05527; }

  /* SEARCH */
  .search-bar { margin-bottom: 2rem; }
  .search-input-wrap { position: relative; max-width: 420px; }
  .search-input-wrap input {
    width: 100%; padding: 0.7rem 1rem 0.7rem 2.75rem;
    border: 1.5px solid var(--border); border-radius: 10px;
    font-family: 'DM Sans', sans-serif; font-size: 0.9rem;
    background: white; color: var(--brown); outline: none;
    transition: border-color 0.2s;
  }
  .search-input-wrap input:focus { border-color: var(--terracotta); }
  .search-icon { position: absolute; left: 0.9rem; top: 50%; transform: translateY(-50%); color: var(--muted); font-size: 0.95rem; pointer-events: none; }

  /* GRID */
  .recipe-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; }
  .recipe-card {
    background: var(--card-bg); border-radius: 16px;
    overflow: hidden; box-shadow: var(--shadow);
    cursor: pointer; transition: transform 0.2s, box-shadow 0.2s;
    border: 1px solid var(--border);
  }
  .recipe-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-hover); }
  .card-thumb {
    width: 100%; height: 180px;
    object-fit: cover; display: block;
    background: linear-gradient(135deg, #F0E8DC 0%, #E0D0C0 100%);
    display: flex; align-items: center; justify-content: center;
    font-size: 4rem;
  }
  .card-body { padding: 1.25rem; }
  .card-category { font-size: 0.72rem; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: var(--terracotta); margin-bottom: 0.4rem; }
  .card-name { font-family: 'Playfair Display', serif; font-size: 1.15rem; font-weight: 700; line-height: 1.3; margin-bottom: 0.75rem; }
  .card-meta { display: flex; gap: 1rem; font-size: 0.8rem; color: var(--muted); flex-wrap: wrap; }
  .card-meta span { display: flex; align-items: center; gap: 0.3rem; }
  .card-tags { margin-top: 0.75rem; display: flex; gap: 0.4rem; flex-wrap: wrap; }
  .tag { background: var(--cream); border: 1px solid var(--border); color: var(--muted); font-size: 0.72rem; padding: 0.2rem 0.6rem; border-radius: 20px; }

  /* LIST VIEW */
  .recipe-list { display: flex; flex-direction: column; gap: 1rem; }
  .recipe-list-item {
    background: var(--card-bg); border-radius: 12px;
    border: 1px solid var(--border); box-shadow: var(--shadow);
    display: flex; align-items: center; gap: 1.25rem;
    padding: 1rem 1.25rem; cursor: pointer;
    transition: box-shadow 0.2s, transform 0.15s;
  }
  .recipe-list-item:hover { box-shadow: var(--shadow-hover); transform: translateX(4px); }
  .list-thumb { width: 72px; height: 72px; border-radius: 12px; flex-shrink: 0; background: linear-gradient(135deg, #F0E8DC, #E0D0C0); display: flex; align-items: center; justify-content: center; font-size: 2rem; overflow: hidden; }
  .list-thumb img { width: 100%; height: 100%; object-fit: cover; }
  .list-info { flex: 1; }
  .list-name { font-family: 'Playfair Display', serif; font-size: 1.05rem; font-weight: 700; margin-bottom: 0.3rem; }
  .list-meta { display: flex; gap: 1.25rem; font-size: 0.8rem; color: var(--muted); }
  .list-category { font-size: 0.72rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--terracotta); font-weight: 500; }
  .list-arrow { color: var(--muted); font-size: 1.1rem; flex-shrink: 0; }

  /* DETAIL PAGE */
  .detail-page { max-width: 860px; margin: 0 auto; }
  .detail-back { display: inline-flex; align-items: center; gap: 0.4rem; color: var(--muted); font-size: 0.85rem; cursor: pointer; margin-bottom: 1.5rem; border: none; background: transparent; font-family: 'DM Sans', sans-serif; padding: 0; transition: color 0.2s; }
  .detail-back:hover { color: var(--brown); }
  .detail-hero {
    border-radius: 20px; overflow: hidden;
    background: linear-gradient(135deg, #F0E8DC, #E0D0C0);
    height: 340px; display: flex; align-items: center; justify-content: center;
    font-size: 8rem; position: relative; margin-bottom: 2rem;
  }
  .detail-hero img { width: 100%; height: 100%; object-fit: cover; position: absolute; inset: 0; }
  .detail-hero-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(59,42,26,0.6) 0%, transparent 60%);
    pointer-events: none;
  }
  .detail-header { margin-bottom: 2rem; }
  .detail-category { font-size: 0.78rem; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: var(--terracotta); margin-bottom: 0.5rem; }
  .detail-title { font-family: 'Playfair Display', serif; font-size: 2.6rem; line-height: 1.15; margin-bottom: 1rem; }
  .detail-meta-bar { display: flex; gap: 2rem; flex-wrap: wrap; }
  .detail-meta-item { text-align: center; }
  .detail-meta-item .val { font-family: 'Playfair Display', serif; font-size: 1.5rem; font-weight: 700; color: var(--terracotta); line-height: 1; }
  .detail-meta-item .lbl { font-size: 0.72rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); margin-top: 0.2rem; }
  .detail-divider { border: none; border-top: 1px solid var(--border); margin: 2rem 0; }
  .detail-description { font-size: 1rem; color: var(--muted); line-height: 1.75; margin-bottom: 1.5rem; }
  .detail-section-title { font-family: 'Playfair Display', serif; font-size: 1.4rem; margin-bottom: 1rem; }
  .ingredients-list { list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; }
  .ingredients-list li { display: flex; align-items: center; gap: 0.6rem; font-size: 0.9rem; padding: 0.5rem 0.75rem; background: var(--cream); border-radius: 8px; }
  .ingredients-list li::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--terracotta); flex-shrink: 0; }
  .steps-list { list-style: none; display: flex; flex-direction: column; gap: 1rem; }
  .step-item { display: flex; gap: 1rem; }
  .step-num { width: 32px; height: 32px; border-radius: 50%; background: var(--terracotta); color: white; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.8rem; flex-shrink: 0; }
  .step-text { font-size: 0.9rem; line-height: 1.65; padding-top: 0.4rem; color: var(--brown); }
  .video-link { display: inline-flex; align-items: center; gap: 0.6rem; background: var(--brown); color: white; padding: 0.65rem 1.25rem; border-radius: 8px; text-decoration: none; font-size: 0.9rem; font-weight: 500; transition: background 0.2s; margin-top: 0.5rem; }
  .video-link:hover { background: var(--terracotta); }
  .detail-actions { display: flex; gap: 0.75rem; margin-top: 2rem; }
  .btn-edit { background: var(--brown); color: white; border: none; padding: 0.65rem 1.5rem; border-radius: 8px; font-family: 'DM Sans', sans-serif; font-size: 0.9rem; font-weight: 500; cursor: pointer; transition: background 0.2s; display: flex; align-items: center; gap: 0.5rem; }
  .btn-edit:hover { background: var(--terracotta); }
  .btn-delete { background: transparent; color: #C0392B; border: 1.5px solid #E8A0A0; padding: 0.65rem 1.5rem; border-radius: 8px; font-family: 'DM Sans', sans-serif; font-size: 0.9rem; font-weight: 500; cursor: pointer; transition: background 0.2s, color 0.2s; display: flex; align-items: center; gap: 0.5rem; }
  .btn-delete:hover { background: #FDE8E8; }

  /* MODAL */
  .modal-overlay {
    position: fixed; inset: 0;
    background: rgba(59,42,26,0.45);
    backdrop-filter: blur(4px);
    display: flex; align-items: center; justify-content: center;
    z-index: 200; padding: 1.5rem;
    animation: fadeIn 0.2s ease;
  }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  .modal {
    background: white; border-radius: 20px;
    width: 100%; max-width: 600px;
    max-height: 90vh; overflow-y: auto;
    padding: 2rem;
    animation: slideUp 0.25s ease;
  }
  @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
  .modal-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; }
  .modal-header h2 { font-family: 'Playfair Display', serif; font-size: 1.6rem; }
  .modal-close { background: var(--cream); border: none; width: 32px; height: 32px; border-radius: 50%; cursor: pointer; font-size: 1rem; display: flex; align-items: center; justify-content: center; color: var(--muted); transition: background 0.15s; }
  .modal-close:hover { background: var(--border); }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  .form-field { margin-bottom: 1rem; }
  .form-field label { display: block; font-size: 0.78rem; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); margin-bottom: 0.4rem; }
  .form-field input, .form-field select, .form-field textarea {
    width: 100%; padding: 0.65rem 0.9rem;
    border: 1.5px solid var(--border); border-radius: 8px;
    font-family: 'DM Sans', sans-serif; font-size: 0.9rem;
    background: white; color: var(--brown); outline: none;
    transition: border-color 0.2s; resize: vertical;
  }
  .form-field input:focus, .form-field select:focus, .form-field textarea:focus { border-color: var(--terracotta); }
  .modal-footer { display: flex; justify-content: flex-end; gap: 0.75rem; margin-top: 1.5rem; }
  .btn-cancel { background: transparent; border: 1.5px solid var(--border); color: var(--brown); padding: 0.6rem 1.25rem; border-radius: 8px; font-family: 'DM Sans', sans-serif; font-size: 0.9rem; cursor: pointer; }
  .btn-cancel:hover { background: var(--cream); }
  .btn-save { background: var(--terracotta); color: white; border: none; padding: 0.6rem 1.5rem; border-radius: 8px; font-family: 'DM Sans', sans-serif; font-size: 0.9rem; font-weight: 500; cursor: pointer; transition: background 0.2s; }
  .btn-save:hover { background: #b05527; }
  .empty-state { text-align: center; padding: 5rem 2rem; color: var(--muted); }
  .empty-state .emoji { font-size: 4rem; margin-bottom: 1rem; }
  .empty-state h3 { font-family: 'Playfair Display', serif; font-size: 1.5rem; color: var(--brown); margin-bottom: 0.5rem; }
  .confirm-modal { max-width: 380px; text-align: center; padding: 2.5rem; }
  .confirm-modal .icon { font-size: 3rem; margin-bottom: 1rem; }
  .confirm-modal h3 { font-family: 'Playfair Display', serif; font-size: 1.4rem; margin-bottom: 0.5rem; }
  .confirm-modal p { color: var(--muted); font-size: 0.9rem; margin-bottom: 1.5rem; }
  .confirm-actions { display: flex; gap: 0.75rem; justify-content: center; }
`;
