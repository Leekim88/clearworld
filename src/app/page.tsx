'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleUploadClick = () => {
    window.location.href = '/process';
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* 液态光晕背景 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="liquid-orb orb-1"></div>
        <div className="liquid-orb orb-2"></div>
        <div className="liquid-orb orb-3"></div>
      </div>

      {/* 顶部导航 */}
      <header className="relative z-10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2"/>
                <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
                <polyline points="21 15 16 10 5 21" strokeWidth="2"/>
              </svg>
            </div>
            <span className="text-xl font-semibold text-white">ClearWorld</span>
          </div>

          <nav className="flex items-center gap-6">
            <Link href="/help" className="text-gray-400 hover:text-white transition-colors">帮助中心</Link>
            <Link href="/profile" className="text-gray-400 hover:text-white transition-colors">用户中心</Link>
            <Link href="/vip" className="text-gray-400 hover:text-white transition-colors">会员中心</Link>
            <Link href="/login" className="text-gray-400 hover:text-white transition-colors">登录</Link>
            <Link href="/register" className="btn-gradient px-5 py-2 rounded-xl text-white font-semibold transition-all">
              注册
            </Link>
          </nav>
        </div>
      </header>

      {/* 主内容区 */}
      <main className="flex-1 flex flex-col items-center justify-center p-8 relative z-10">
        <div className="max-w-3xl w-full text-center">
          {/* 上传区域 */}
          <div
            className={`upload-zone rounded-3xl p-16 cursor-pointer ${
              isDragging ? 'active' : ''
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={handleUploadClick}
          >
            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/10 flex items-center justify-center">
                <svg className="w-10 h-10 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xl font-medium text-white mb-2">点击或拖拽图片到此处</p>
                <p className="text-white/40">支持 PNG, JPG, WEBP, BMP, GIF</p>
              </div>
            </div>
          </div>

          {/* 功能卡片 */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <Link href="/process" className="feature-card rounded-2xl p-6 text-center cursor-pointer">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-purple-600/20 to-pink-600/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white">2x 快速</h3>
              <p className="text-sm text-white/40 mt-1">日常处理</p>
            </Link>
            <Link href="/process" className="feature-card rounded-2xl p-6 text-center cursor-pointer">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-purple-600/20 to-pink-600/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white">4x 高清</h3>
              <p className="text-sm text-white/40 mt-1">专业画质</p>
            </Link>
            <Link href="/vip" className="feature-card rounded-2xl p-6 text-center cursor-pointer">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-purple-600/20 to-pink-600/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white">8x 会员</h3>
              <p className="text-sm text-white/40 mt-1">高清无损</p>
            </Link>
          </div>

          {/* 会员引导 */}
          <div className="mt-8 glass-card rounded-2xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"/>
                </svg>
              </div>
              <span className="text-white/80">开通会员，享无限次处理 + 批量处理</span>
            </div>
            <button className="btn-gradient px-4 py-2 rounded-xl text-white text-sm font-semibold transition-all">
              了解会员
            </button>
          </div>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="relative z-10 border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-sm text-white/40">
          <p>&copy; 2024 ClearWorld 清晰世界</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">帮助中心</a>
            <a href="#" className="hover:text-white transition-colors">联系方式</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
