// ── CONFIRM DELETE ────────────────────────────────────────────────────────────
export const ConfirmModal = ({
  recipe,
  onConfirm,
  onCancel,
}: {
  recipe: any;
  onConfirm: () => void;
  onCancel: () => void;
}) => {
  return (
    <div
      className="modal-overlay"
      onClick={(e) => e.target === e.currentTarget && onCancel()}
    >
      <div className="modal confirm-modal">
        <div className="icon">🗑️</div>
        <h3>Delete Recipe?</h3>
        <p>
          Are you sure you want to delete <strong>{recipe.name}</strong>? This
          action cannot be undone.
        </p>
        <div className="confirm-actions">
          <button className="btn-cancel" onClick={onCancel}>
            Cancel
          </button>
          <button className="btn-delete" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
