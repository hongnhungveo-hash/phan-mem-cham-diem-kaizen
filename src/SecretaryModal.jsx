import React, { useState, useEffect } from 'react';
import './SecretaryModal.css';

export default function SecretaryModal({ 
  isOpen, 
  onClose, 
  project, 
  existingComment = '', 
  onSaveComment,
  rawScoreRows = []
}) {
  const [commentText, setCommentText] = useState(existingComment);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    setCommentText(existingComment || '');
    setSaveSuccess(false);
  }, [project, existingComment, isOpen]);

  if (!isOpen || !project) return null;

  const judgeScores = rawScoreRows.filter(r => r.maDeTai === project.maDeTai);

  const handleSave = async () => {
    setIsSaving(true);
    setSaveSuccess(false);
    try {
      await onSaveComment(project.maDeTai, commentText);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2500);
    } catch (err) {
      alert("Lỗi: " + err.message);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog glass-panel" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="flex items-center gap-2">
            <h3 className="modal-title">Thư Ký — Nhận Xét & Kết Luận</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="modal-body">
          {/* Thông tin Đề án */}
          <div className="project-brief-card">
            <div className="brief-header">
              <span className="badge badge-good">{project.maDeTai}</span>
              <span className="badge badge-pass">{project.nhanh}</span>
              <span className="brief-score">
                {project.hasScore !== false ? `Điểm TB: ${project.tongDiem} (${project.xepLoai})` : 'Chờ chấm'}
              </span>
            </div>
            <h4 className="brief-title">{project.tenDeTai}</h4>
            <div className="brief-meta">
              <span><strong>Đơn vị:</strong> {project.khoaPhong}</span>
              {project.khoaPhoiHop && (
                <span className="tag-partner"><strong>Phối hợp:</strong> {project.khoaPhoiHop}</span>
              )}
            </div>
          </div>

          {/* Danh sách Điểm Giám khảo */}
          <div className="judges-scored-section">
            <label className="section-label">
              Phiếu chấm ({judgeScores.length} phiếu):
            </label>
            {judgeScores.length === 0 ? (
              <p className="text-muted" style={{fontSize: '0.85rem'}}>Chưa có phiếu chấm nào.</p>
            ) : (
              <div className="judges-score-tags">
                {judgeScores.map((js, idx) => (
                  <div key={idx} className="judge-tag">
                    <span className="judge-name">👤 {js.giamKhao || `GK ${idx + 1}`}</span>
                    <span className="judge-score">{js.tongDiem} đ</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Khung Nhập Nhận xét */}
          <div className="comment-input-section">
            <label className="section-label">
              Nhận xét & phản biện của Hội đồng:
            </label>
            <textarea
              className="comment-textarea"
              rows={7}
              placeholder="Thư ký ghi nhận xét, phản biện và kết luận của Hội đồng..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
          </div>

          {saveSuccess && (
            <div className="save-success-banner">
              ✅ Đã lưu thành công!
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button type="button" className="btn btn-outline" onClick={onClose}>
            Đóng
          </button>
          <button 
            type="button" 
            className="btn btn-primary"
            style={{padding: '0.5rem 1.8rem'}}
            onClick={handleSave}
            disabled={isSaving}
          >
            {isSaving ? 'Đang lưu...' : '💾 Lưu'}
          </button>
        </div>
      </div>
    </div>
  );
}
