// @ts-nocheck

// ── RECIPE PAGE ─────────────────────────────────────────────────────────────
export const RecipePage = ({ recipe, onBack, onEdit, onDelete }: any) => {
  return (
    <div className="detail-page">
      <button className="detail-back" onClick={onBack}>
        ← Back to recipes
      </button>
      <div className="detail-hero">
        {recipe.photo ? (
          <img
            src={recipe.photo}
            alt={recipe.name}
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        ) : (
          <span style={{ fontSize: "7rem", zIndex: 1 }}>{recipe.emoji}</span>
        )}
        <div className="detail-hero-overlay" />
      </div>
      <div className="detail-header">
        <div className="detail-category">{recipe.category}</div>
        <h1 className="detail-title">{recipe.name}</h1>
        <div className="detail-meta-bar">
          <div className="detail-meta-item">
            <div className="val">{recipe.time}m</div>
            <div className="lbl">Cook Time</div>
          </div>
          <div className="detail-meta-item">
            <div className="val">{recipe.servings}</div>
            <div className="lbl">Servings</div>
          </div>
          <div className="detail-meta-item">
            <div className="val" style={{ fontSize: "1.1rem" }}>
              {recipe.difficulty}
            </div>
            <div className="lbl">Difficulty</div>
          </div>
          <div className="detail-meta-item">
            <div className="val">{recipe.ingredients?.length || 0}</div>
            <div className="lbl">Ingredients</div>
          </div>
        </div>
      </div>
      {recipe.description && (
        <p className="detail-description">{recipe.description}</p>
      )}
      {recipe.tags?.length > 0 && (
        <div className="card-tags" style={{ marginBottom: "1.5rem" }}>
          {recipe.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
      )}
      <hr className="detail-divider" />
      {recipe.ingredients?.length > 0 && (
        <div style={{ marginBottom: "2rem" }}>
          <h2 className="detail-section-title">Ingredients</h2>
          <ul className="ingredients-list">
            {recipe.ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
        </div>
      )}
      <hr className="detail-divider" />
      {recipe.steps?.length > 0 && (
        <div style={{ marginBottom: "2rem" }}>
          <h2 className="detail-section-title">Steps</h2>
          <ol className="steps-list">
            {recipe.steps.map((step, i) => (
              <li key={i} className="step-item">
                <div className="step-num">{i + 1}</div>
                <p className="step-text">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      )}
      {recipe.videoUrl && (
        <>
          <hr className="detail-divider" />
          <h2 className="detail-section-title">Watch & Learn</h2>
          <a
            className="video-link"
            href={recipe.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            ▶ Watch Recipe Video
          </a>
        </>
      )}
      <div className="detail-actions">
        <button className="btn-edit" onClick={() => onEdit(recipe)}>
          ✏️ Edit Recipe
        </button>
        <button className="btn-delete" onClick={() => onDelete(recipe)}>
          🗑️ Delete
        </button>
      </div>
    </div>
  );
};
