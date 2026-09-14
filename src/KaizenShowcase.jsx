import React, { useState, useEffect } from 'react';
import './KaizenShowcase.css';
import { getCleanLeaderName } from './kaizenData';

export default function KaizenShowcase({ 
  projects = [], 
  onSelectProject,
  rankingScores = {} 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('ALL');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedBlock, setSelectedBlock] = useState('ALL');
  const [sortBy, setSortBy] = useState('default'); // 'default', 'score', 'likes', 'views'

  // Quản lý trạng thái like lưu local
  const [userLikes, setUserLikes] = useState(() => {
    try {
      const saved = localStorage.getItem('hv_kaizen_user_likes');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [projectLikesMap, setProjectLikesMap] = useState(() => {
    try {
      const saved = localStorage.getItem('hv_kaizen_project_likes');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const handleToggleLike = (maDeTai, e) => {
    e.stopPropagation();
    const isLiked = !!userLikes[maDeTai];
    const newLikedState = !isLiked;

    const updatedUserLikes = { ...userLikes, [maDeTai]: newLikedState };
    setUserLikes(updatedUserLikes);
    localStorage.setItem('hv_kaizen_user_likes', JSON.stringify(updatedUserLikes));

    const currentCount = projectLikesMap[maDeTai] !== undefined 
      ? projectLikesMap[maDeTai] 
      : (projects.find(p => p.maDeTai === maDeTai)?.likes || 0);

    const updatedCount = newLikedState ? currentCount + 1 : Math.max(0, currentCount - 1);
    const updatedProjectLikes = { ...projectLikesMap, [maDeTai]: updatedCount };
    setProjectLikesMap(updatedProjectLikes);
    localStorage.setItem('hv_kaizen_project_likes', JSON.stringify(updatedProjectLikes));
  };

  // Lọc dữ liệu
  const filteredProjects = projects.filter((p) => {
    const matchSearch = !searchQuery || 
      (p.tenDeTai && p.tenDeTai.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (p.maDeTai && p.maDeTai.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (p.khoaPhong && p.khoaPhong.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (p.khoaPhoiHop && p.khoaPhoiHop.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (p.nhomTacGia && p.nhomTacGia.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchBranch = selectedBranch === 'ALL' || p.nhanh === selectedBranch;
    const matchCat = selectedCategory === 'ALL' || p.chuDe === selectedCategory;
    const matchBlock = selectedBlock === 'ALL' || p.khoiChuyenMon === selectedBlock;

    return matchSearch && matchBranch && matchCat && matchBlock;
  });

  // Sắp xếp
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === 'score') {
      const scoreA = rankingScores[a.maDeTai]?.tongDiem || 0;
      const scoreB = rankingScores[b.maDeTai]?.tongDiem || 0;
      return scoreB - scoreA;
    }
    if (sortBy === 'likes') {
      const likesA = projectLikesMap[a.maDeTai] !== undefined ? projectLikesMap[a.maDeTai] : (a.likes || 0);
      const likesB = projectLikesMap[b.maDeTai] !== undefined ? projectLikesMap[b.maDeTai] : (b.likes || 0);
      return likesB - likesA;
    }
    if (sortBy === 'views') {
      return (b.views || 0) - (a.views || 0);
    }
    return (a.maDeTai || '').localeCompare(b.maDeTai || '');
  });

  return (
    <div className="showcase-container">
      {/* Header Thư viện */}
      <div className="showcase-header">
        <div>
          <h1 className="showcase-title">Không Gian Giới Thiệu Sản Phẩm & Đề Tài Cải Tiến</h1>
          <p className="showcase-subtitle">
            Xem tham khảo các mô hình, sáng chế kỹ thuật và giải pháp y tế đang được đăng ký và thử nghiệm tại Bệnh viện Đa khoa Hùng Vương
          </p>
        </div>
        <div className="showcase-count-pill">
          Hiển thị {sortedProjects.length} / {projects.length} sản phẩm
        </div>
      </div>

      {/* Thanh Công Cụ Lọc & Tìm Kiếm 5S */}
      <div className="showcase-filter-panel">
        <div className="search-bar-row">
          <input
            type="text"
            className="search-input"
            placeholder="Tìm kiếm theo tên đề tài, mã số, khoa phòng, tác giả..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button 
              type="button" 
              className="clear-search-btn"
              onClick={() => setSearchQuery('')}
            >
              Xóa
            </button>
          )}
        </div>

        <div className="filter-tags-row">
          <div className="filter-group">
            <span className="filter-label">Phân nhánh:</span>
            <select 
              className="filter-select"
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
            >
              <option value="ALL">Tất cả các nhánh</option>
              <option value="Nhánh A">Nhánh A (Nội bộ khoa)</option>
              <option value="Nhánh B">Nhánh B (Liên khoa)</option>
            </select>
          </div>

          <div className="filter-group">
            <span className="filter-label">Khối chuyên môn:</span>
            <select 
              className="filter-select"
              value={selectedBlock}
              onChange={(e) => setSelectedBlock(e.target.value)}
            >
              <option value="ALL">Tất cả các khối</option>
              <option value="Khối Lâm sàng">Khối Lâm sàng</option>
              <option value="Khối Ngoại - Phẫu thuật">Khối Ngoại - Phẫu thuật</option>
              <option value="Khối Cận lâm sàng">Khối Cận lâm sàng</option>
              <option value="Khối Dược - KSNK">Khối Dược - KSNK</option>
              <option value="Khối Hành chính - Quản lý">Khối Hành chính - Quản lý</option>
            </select>
          </div>

          <div className="filter-group">
            <span className="filter-label">Chủ đề:</span>
            <select 
              className="filter-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="ALL">Tất cả chủ đề</option>
              <option value="TIME">Thời gian chờ</option>
              <option value="SAFETY">An toàn người bệnh</option>
              <option value="5S">Thực hành 5S</option>
              <option value="DIGITAL">Chuyển đổi số</option>
            </select>
          </div>

          <div className="filter-group">
            <span className="filter-label">Sắp xếp:</span>
            <select 
              className="filter-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Theo mã đề tài</option>
              <option value="score">Điểm số cao nhất</option>
              <option value="likes">Lượt thích nhiều nhất</option>
              <option value="views">Lượt xem nhiều nhất</option>
            </select>
          </div>
        </div>
      </div>

      {/* Lưới Thẻ Đề Tài */}
      {sortedProjects.length === 0 ? (
        <div className="empty-results">
          <p className="empty-title">Không tìm thấy đề tài phù hợp với tiêu chí lọc.</p>
          <p className="empty-desc">Vui lòng thử xóa từ khóa tìm kiếm hoặc chọn lại bộ lọc.</p>
          <button 
            type="button" 
            className="btn btn-outline"
            onClick={() => {
              setSearchQuery('');
              setSelectedBranch('ALL');
              setSelectedCategory('ALL');
              setSelectedBlock('ALL');
              setSortBy('default');
            }}
          >
            Đặt lại tất cả bộ lọc
          </button>
        </div>
      ) : (
        <div className="project-grid">
          {sortedProjects.map((p) => {
            const scoreInfo = rankingScores[p.maDeTai];
            const currentLikes = projectLikesMap[p.maDeTai] !== undefined 
              ? projectLikesMap[p.maDeTai] 
              : (p.likes || 0);
            const isLiked = !!userLikes[p.maDeTai];

            return (
              <div 
                key={p.maDeTai} 
                className="project-card"
                onClick={() => onSelectProject(p)}
              >
                {/* Header Thẻ */}
                <div className="card-top-row">
                  <span className="card-id-badge">{p.maDeTai}</span>
                  <span className={`card-branch-pill ${p.nhanh === 'Nhánh A' ? 'branch-a' : 'branch-b'}`}>
                    {p.nhanh}
                  </span>
                  {p.chuDeTen && (
                    <span className="card-cat-pill">{p.chuDeTen}</span>
                  )}
                </div>

                {/* Tên Sản phẩm & Đề tài */}
                <h3 className="card-title">{p.tenSanPham || p.tenDeTai}</h3>
                {p.tenSanPham && (
                  <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                    Đề tài: {p.tenDeTai}
                  </div>
                )}

                {/* Khoa Phòng & Tác giả */}
                <div className="card-dept-box">
                  <div className="dept-item">
                    <span className="dept-label">Chủ trì:</span>
                    <span className="dept-val">{p.khoaPhong}</span>
                  </div>
                  {p.khoaPhoiHop && (
                    <div className="dept-item">
                      <span className="dept-label">Phối hợp:</span>
                      <span className="dept-val partner">{p.khoaPhoiHop}</span>
                    </div>
                  )}
                  {p.nhomTacGia && (
                    <div className="dept-item">
                      <span className="dept-label">Chủ nhiệm:</span>
                      <span className="dept-val text-muted">{getCleanLeaderName(p)}</span>
                    </div>
                  )}
                </div>

                {/* Tóm tắt súc tích */}
                <p className="card-summary">
                  {p.quickSummary?.idea || p.tomTat || (p.a3Report?.background ? p.a3Report.background.substring(0, 130) + '...' : 'Đề án cải tiến chất lượng đang triển khai thử nghiệm.')}
                </p>

                {/* Trạng thái đề tài */}
                <div className="card-score-strip">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
                    <span style={{
                      background: '#dcfce7',
                      color: '#15803d',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      padding: '0.2rem 0.55rem',
                      borderRadius: '4px',
                      border: '1px solid #86efac'
                    }}>
                      Đã Tiếp Nhận & Phê Duyệt
                    </span>
                    <span style={{ fontSize: '0.76rem', color: '#64748b' }}>
                      Đang thử nghiệm thực địa
                    </span>
                  </div>
                </div>

                {/* Footer Thẻ: Like, View, Action */}
                <div className="card-footer-row">
                  <div className="card-stats">
                    <button 
                      type="button" 
                      className={`vote-btn ${isLiked ? 'liked' : ''}`}
                      onClick={(e) => handleToggleLike(p.maDeTai, e)}
                      title={isLiked ? "Bỏ bình chọn" : "Bình chọn sản phẩm"}
                    >
                      <span className="vote-heart">{isLiked ? '♥' : '♡'}</span>
                      <span className="vote-count">{currentLikes}</span>
                    </button>
                    <span className="view-count" title="Lượt xem">{p.views || 0} lượt xem</span>
                  </div>

                  <button 
                    type="button" 
                    className="view-a3-btn"
                    style={{ background: '#0085db', color: '#fff', fontWeight: 600, padding: '0.45rem 0.85rem' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProject(p);
                    }}
                  >
                    Xem Chi Tiết Sản Phẩm ➔
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
