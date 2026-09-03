import React, { useState, useEffect } from 'react';
import './SecretaryDesk.css';

export default function SecretaryDesk({
  projects = [],
  rawScoreRows = [],
  judgesList = [],
  comments = {},
  onSaveComment,
  onRefresh,
  isLoading
}) {
  const [selectedProjectId, setSelectedProjectId] = useState(projects[0]?.maDeTai || '');
  const [commentText, setCommentText] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (!selectedProjectId && projects.length > 0) {
      setSelectedProjectId(projects[0].maDeTai);
    }
  }, [projects, selectedProjectId]);

  useEffect(() => {
    if (selectedProjectId) {
      setCommentText(comments[selectedProjectId]?.nhanXet || '');
      setSaveSuccess(false);
    }
  }, [selectedProjectId, comments]);

  const activeProject = projects.find(p => p.maDeTai === selectedProjectId) || projects[0];

  const filteredProjects = projects.filter(p => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      (p.tenDeTai && p.tenDeTai.toLowerCase().includes(q)) ||
      (p.maDeTai && p.maDeTai.toLowerCase().includes(q)) ||
      (p.khoaPhong && p.khoaPhong.toLowerCase().includes(q))
    );
  });

  const projectJudgeScores = rawScoreRows.filter(r => r.maDeTai === activeProject?.maDeTai);
  const totalJudgesCount = judgesList.length || 5;

  const handleSave = async () => {
    if (!activeProject) return;
    setIsSaving(true);
    setSaveSuccess(false);
    try {
      await onSaveComment(activeProject.maDeTai, commentText);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2500);
    } catch (err) {
      alert("Lỗi: " + err.message);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="secretary-desk-container glass-panel">
      {/* CỘT TRÁI: DANH SÁCH ĐỀ ÁN */}
      <div className="desk-sidebar">
        <div className="sidebar-header">
          <h3 className="sidebar-title">Danh Sách Đề Án</h3>
          <input
            type="text"
            className="sidebar-search"
            placeholder="🔍 Tìm nhanh đề án..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="desk-project-list">
          {filteredProjects.map((p, idx) => {
            const pScores = rawScoreRows.filter(r => r.maDeTai === p.maDeTai);
            const isScored = pScores.length > 0;
            const hasCmt = comments[p.maDeTai]?.nhanXet?.trim().length > 0;
            const isSelected = p.maDeTai === selectedProjectId;

            return (
              <div
                key={p.maDeTai || idx}
                className={`desk-project-item ${isSelected ? 'active' : ''}`}
                onClick={() => setSelectedProjectId(p.maDeTai)}
              >
                <div className="item-header">
                  <span className="badge badge-good">{p.maDeTai}</span>
                  <span className={`badge ${p.nhanh === 'Nhánh B' ? 'badge-partner' : 'badge-pass'}`}>
                    {p.nhanh}
                  </span>
                  {hasCmt && <span className="icon-cmt" title="Đã có nhận xét">💬</span>}
                </div>

                <div className="item-title font-medium">{p.tenDeTai}</div>
                <div className="item-dept text-muted">{p.khoaPhong} {p.khoaPhoiHop ? `+ ${p.khoaPhoiHop}` : ''}</div>

                <div className="item-footer">
                  <span className={`status-tag ${isScored ? 'status-scored' : 'status-waiting'}`}>
                    {isScored ? `${pScores.length} phiếu chấm` : 'Chờ chấm'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CỘT PHẢI: KHUNG GHI NHẬN XÉT TRỰC TIẾP */}
      <div className="desk-main">
        {activeProject ? (
          <>
            {/* Header thông tin đề án */}
            <div className="desk-main-header">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="badge badge-excellent">{activeProject.maDeTai}</span>
                  <span className="badge badge-pass">{activeProject.nhanh}</span>
                  <span className="text-muted" style={{fontSize: '0.85rem'}}>
                    {activeProject.nhomTacGia ? `Nhóm: ${activeProject.nhomTacGia}` : ''}
                  </span>
                </div>
                <h2 className="active-project-title">{activeProject.tenDeTai}</h2>
                <div className="active-project-dept">
                  <strong>Đơn vị:</strong> {activeProject.khoaPhong}
                  {activeProject.khoaPhoiHop && (
                    <span className="tag-partner ml-2">
                      + {activeProject.khoaPhoiHop}
                    </span>
                  )}
                </div>
              </div>

              <button 
                type="button" 
                className="btn btn-outline"
                onClick={onRefresh}
                disabled={isLoading}
              >
                🔄 {isLoading ? 'Đang tải...' : 'Làm mới'}
              </button>
            </div>

            {/* Trạng thái nộp điểm của Hội đồng */}
            <div className="judges-live-status-box">
              <div className="status-box-header">
                <span className="font-bold">
                  Tiến độ nộp điểm: {projectJudgeScores.length}/{totalJudgesCount} Giám khảo
                </span>
              </div>

              {projectJudgeScores.length === 0 ? (
                <div className="waiting-judges-notice">
                  <em>Chưa có phiếu chấm nào được lưu. Thư ký ghi nhận xét bình thường.</em>
                </div>
              ) : (
                <div className="judges-scored-tags">
                  {projectJudgeScores.map((js, idx) => (
                    <div key={idx} className="judge-tag">
                      <span className="judge-name">👤 {js.giamKhao || `GK ${idx + 1}`}</span>
                      <span className="judge-score">{js.tongDiem} đ</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Khung Nhập Nhận Xét */}
            <div className="desk-comment-editor">
              <label className="section-label">
                Nhận xét & phản biện của Hội đồng:
              </label>
              <textarea
                className="desk-textarea"
                rows={9}
                placeholder="Thư ký ghi nhận xét, phản biện và góp ý của các Giám khảo..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              />
            </div>

            {saveSuccess && (
              <div className="save-success-banner">
                ✅ Đã lưu thành công!
              </div>
            )}

            {/* Nút Lưu */}
            <div className="desk-actions">
              <button
                type="button"
                className="btn btn-primary"
                style={{padding: '0.65rem 2.5rem', fontSize: '1rem'}}
                onClick={handleSave}
                disabled={isSaving}
              >
                {isSaving ? 'Đang lưu...' : '💾 Lưu'}
              </button>
            </div>
          </>
        ) : (
          <div className="empty-state text-center text-muted">
            Chọn đề án từ danh sách bên trái để ghi nhận xét.
          </div>
        )}
      </div>
    </div>
  );
}
