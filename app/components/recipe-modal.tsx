import { useState } from "react";
import { CATEGORIES } from "../utils/categories";
import { DIFFICULTIES } from "../utils/difficulties";
import { genId } from "../utils/generate-id";

// ── RECIPE FORM MODAL ─────────────────────────────────────────────────────────
export const RecipeModal = ({
  recipe,
  onSave,
  onClose,
}: {
  recipe: any;
  onSave: (recipe: any) => void;
  onClose: () => void;
}) => {
  const isEdit = !!recipe?.id;
  const [form, setForm] = useState({
    name: recipe?.name || "",
    category: recipe?.category || "Italian",
    time: recipe?.time || "",
    servings: recipe?.servings || "",
    difficulty: recipe?.difficulty || "Easy",
    description: recipe?.description || "",
    emoji: recipe?.emoji || "🍽️",
    photo: recipe?.photo || "",
    videoUrl: recipe?.videoUrl || "",
    tags: recipe?.tags?.join(", ") || "",
    ingredients: recipe?.ingredients?.join("\n") || "",
    steps: recipe?.steps?.join("\n") || "",
  });

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSave = () => {
    if (!form.name.trim()) return;
    onSave({
      ...recipe,
      id: recipe?.id || genId(),
      ...form,
      time: Number(form.time) || 0,
      servings: Number(form.servings) || 2,
      tags: form.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      ingredients: form.ingredients
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean),
      steps: form.steps
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean),
    });
  };

  return (
    <div
      className="modal-overlay"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal">
        <div className="modal-header">
          <h2>{isEdit ? "Edit Recipe" : "New Recipe"}</h2>
          <button className="modal-close" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="form-row">
          <div className="form-field" style={{ gridColumn: "1/-1" }}>
            <label>Recipe Name *</label>
            <input
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              placeholder="e.g. Pasta Carbonara"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-field">
            <label>Category</label>
            <select
              value={form.category}
              onChange={(e) => set("category", e.target.value)}
            >
              {CATEGORIES.filter((c) => c !== "All").map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
          <div className="form-field">
            <label>Difficulty</label>
            <select
              value={form.difficulty}
              onChange={(e) => set("difficulty", e.target.value)}
            >
              {DIFFICULTIES.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-field">
            <label>Cook Time (min)</label>
            <input
              type="number"
              value={form.time}
              onChange={(e) => set("time", e.target.value)}
              placeholder="30"
            />
          </div>
          <div className="form-field">
            <label>Servings</label>
            <input
              type="number"
              value={form.servings}
              onChange={(e) => set("servings", e.target.value)}
              placeholder="4"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-field">
            <label>Emoji Icon</label>
            <input
              value={form.emoji}
              onChange={(e) => set("emoji", e.target.value)}
              placeholder="🍽️"
            />
          </div>
          <div className="form-field">
            <label>Photo URL (optional)</label>
            <input
              value={form.photo}
              onChange={(e) => set("photo", e.target.value)}
              placeholder="https://..."
            />
          </div>
        </div>
        <div className="form-field">
          <label>Video URL (optional)</label>
          <input
            value={form.videoUrl}
            onChange={(e) => set("videoUrl", e.target.value)}
            placeholder="https://youtube.com/..."
          />
        </div>
        <div className="form-field">
          <label>Description</label>
          <textarea
            rows={2}
            value={form.description}
            onChange={(e) => set("description", e.target.value)}
            placeholder="A brief description of this dish..."
          />
        </div>
        <div className="form-field">
          <label>Tags (comma separated)</label>
          <input
            value={form.tags}
            onChange={(e) => set("tags", e.target.value)}
            placeholder="quick, vegetarian, dinner"
          />
        </div>
        <div className="form-field">
          <label>Ingredients (one per line)</label>
          <textarea
            rows={5}
            value={form.ingredients}
            onChange={(e) => set("ingredients", e.target.value)}
            placeholder={"400g spaghetti\n4 eggs\n..."}
          />
        </div>
        <div className="form-field">
          <label>Steps (one per line)</label>
          <textarea
            rows={6}
            value={form.steps}
            onChange={(e) => set("steps", e.target.value)}
            placeholder={"Boil water and add salt.\nCook pasta al dente.\n..."}
          />
        </div>
        <div className="modal-footer">
          <button className="btn-cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="btn-save" onClick={handleSave}>
            {isEdit ? "Save Changes" : "Add Recipe"}
          </button>
        </div>
      </div>
    </div>
  );
};
