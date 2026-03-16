"use client";

import { useState } from "react";
import { SAMPLE_RECIPES } from "./utils/sample-recipes";
import { ConfirmModal } from "./components/confirm-modal";
import { RecipeModal } from "./components/recipe-modal";
import AuthScreen from "./pages/login";
import { CATEGORIES } from "./utils/categories";
import { style } from "./styles";
import { RecipePage } from "./pages/recipe-page";

export default function Home() {
  const [user, setUser] = useState(null);
  const [recipes, setRecipes] = useState(SAMPLE_RECIPES);
  const [view, setView] = useState("grid"); // grid | list
  const [search, setSearch] = useState("");
  const [filterCat, setFilterCat] = useState("All");
  const [selected, setSelected] = useState(null); // viewing a recipe
  const [showForm, setShowForm] = useState(false);
  const [editingRecipe, setEditingRecipe] = useState(null);
  const [deletingRecipe, setDeletingRecipe] = useState(null);

  const filtered = recipes.filter((r) => {
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      r.name.toLowerCase().includes(q) ||
      r.category.toLowerCase().includes(q) ||
      r.tags?.some((t) => t.toLowerCase().includes(q));
    const matchCat = filterCat === "All" || r.category === filterCat;
    return matchSearch && matchCat;
  });

  const handleSave = (r) => {
    setRecipes((prev) =>
      prev.find((x) => x.id === r.id)
        ? prev.map((x) => (x.id === r.id ? r : x))
        : [r, ...prev],
    );
    setShowForm(false);
    setEditingRecipe(null);
    if (selected?.id === r.id) setSelected(r);
  };
  const handleDelete = () => {
    setRecipes((prev) => prev.filter((r) => r.id !== deletingRecipe.id));
    setDeletingRecipe(null);
    if (selected?.id === deletingRecipe.id) setSelected(null);
  };
  const openEdit = (recipe) => {
    setEditingRecipe(recipe);
    setShowForm(true);
  };
  const openAdd = () => {
    setEditingRecipe(null);
    setShowForm(true);
  };

  if (!user)
    return (
      <>
        <style>{style}</style>
        <AuthScreen onLogin={setUser} />
      </>
    );

  if (selected)
    return (
      <>
        <style>{style}</style>
        <div className="app-shell">
          <nav className="topbar">
            <div className="topbar-brand">
              <span>🍽️</span> Coooking
            </div>
            <div className="topbar-right">
              <div className="user-chip">
                <div className="user-avatar">{user.name[0].toUpperCase()}</div>
                <span>{user.name}</span>
              </div>
              <button className="btn-logout" onClick={() => setUser(null)}>
                Sign out
              </button>
            </div>
          </nav>
          <div className="main-content">
            <RecipePage
              recipe={selected}
              onBack={() => setSelected(null)}
              onEdit={openEdit}
              onDelete={setDeletingRecipe}
            />
          </div>
        </div>
        {showForm && (
          <RecipeModal
            recipe={editingRecipe}
            onSave={handleSave}
            onClose={() => {
              setShowForm(false);
              setEditingRecipe(null);
            }}
          />
        )}
        {deletingRecipe && (
          <ConfirmModal
            recipe={deletingRecipe}
            onConfirm={handleDelete}
            onCancel={() => setDeletingRecipe(null)}
          />
        )}
      </>
    );

  return (
    <>
      <style>{style}</style>
      <div className="app-shell">
        <nav className="topbar">
          <div className="topbar-brand">
            <span>🍽️</span> Coooking
          </div>
          <div className="topbar-right">
            <div className="user-chip">
              <div className="user-avatar">{user.name[0].toUpperCase()}</div>
              <span>{user.name}</span>
            </div>
            <button className="btn-logout" onClick={() => setUser(null)}>
              Sign out
            </button>
          </div>
        </nav>
        <div className="main-content">
          <div className="page-header">
            <div className="page-title">
              <h1>My Recipes</h1>
              <p>
                {filtered.length} {filtered.length === 1 ? "recipe" : "recipes"}
                {filterCat !== "All" ? ` in ${filterCat}` : ""}
              </p>
            </div>
            <div className="header-actions">
              <div className="view-toggle">
                <button
                  className={`view-btn${view === "grid" ? " active" : ""}`}
                  onClick={() => setView("grid")}
                  title="Grid view"
                >
                  ⊞
                </button>
                <button
                  className={`view-btn${view === "list" ? " active" : ""}`}
                  onClick={() => setView("list")}
                  title="List view"
                >
                  ☰
                </button>
              </div>
              <button className="btn-add" onClick={openAdd}>
                + Add Recipe
              </button>
            </div>
          </div>

          <div
            className="search-bar"
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <div className="search-input-wrap">
              <span className="search-icon">🔍</span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search recipes..."
              />
            </div>
            <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilterCat(cat)}
                  style={{
                    background: filterCat === cat ? "var(--brown)" : "white",
                    color: filterCat === cat ? "white" : "var(--muted)",
                    border: "1.5px solid var(--border)",
                    borderRadius: "20px",
                    padding: "0.3rem 0.9rem",
                    fontSize: "0.8rem",
                    cursor: "pointer",
                    transition: "all 0.15s",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="empty-state">
              <div className="emoji">🫙</div>
              <h3>No recipes found</h3>
              <p>
                {search
                  ? "Try a different search term."
                  : "Add your first recipe to get started!"}
              </p>
            </div>
          ) : view === "grid" ? (
            <div className="recipe-grid">
              {filtered.map((recipe) => (
                <div
                  key={recipe.id}
                  className="recipe-card"
                  onClick={() => setSelected(recipe)}
                >
                  <div className="card-thumb">
                    {recipe.photo ? (
                      <img
                        src={recipe.photo}
                        alt={recipe.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    ) : (
                      <span>{recipe.emoji}</span>
                    )}
                  </div>
                  <div className="card-body">
                    <div className="card-category">{recipe.category}</div>
                    <div className="card-name">{recipe.name}</div>
                    <div className="card-meta">
                      <span>⏱ {recipe.time} min</span>
                      <span>👥 {recipe.servings} servings</span>
                      <span>📊 {recipe.difficulty}</span>
                    </div>
                    {recipe.tags?.length > 0 && (
                      <div className="card-tags">
                        {recipe.tags.slice(0, 3).map((t) => (
                          <span key={t} className="tag">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="recipe-list">
              {filtered.map((recipe) => (
                <div
                  key={recipe.id}
                  className="recipe-list-item"
                  onClick={() => setSelected(recipe)}
                >
                  <div className="list-thumb">
                    {recipe.photo ? (
                      <img
                        src={recipe.photo}
                        alt={recipe.name}
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    ) : (
                      recipe.emoji
                    )}
                  </div>
                  <div className="list-info">
                    <div className="list-category">{recipe.category}</div>
                    <div className="list-name">{recipe.name}</div>
                    <div className="list-meta">
                      <span>⏱ {recipe.time} min</span>
                      <span>👥 {recipe.servings}</span>
                      <span>📊 {recipe.difficulty}</span>
                      {recipe.tags?.length > 0 && (
                        <span>🏷 {recipe.tags.slice(0, 2).join(", ")}</span>
                      )}
                    </div>
                  </div>
                  <span className="list-arrow">›</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {showForm && (
        <RecipeModal
          recipe={editingRecipe}
          onSave={handleSave}
          onClose={() => {
            setShowForm(false);
            setEditingRecipe(null);
          }}
        />
      )}
      {deletingRecipe && (
        <ConfirmModal
          recipe={deletingRecipe}
          onConfirm={handleDelete}
          onCancel={() => setDeletingRecipe(null)}
        />
      )}
    </>
  );
}
