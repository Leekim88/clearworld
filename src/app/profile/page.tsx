'use client';

import { useState } from 'react';
import Link from 'next/link';

interface HistoryItem {
  id: number;
  date: string;
  originalName: string;
  scale: string;
  model: string;
  status: 'completed' | 'processing' | 'failed';
}

const mockHistory: HistoryItem[] = [
  { id: 1, date: '2024-01-15 14:30', originalName: 'photo_001.jpg', scale: '4x', model: '照片人像', status: 'completed' },
  { id: 2, date: '2024-01-14 10:15', originalName: 'landscape.png', scale: '2x', model: '通用标准', status: 'completed' },
  { id: 3, date: '2024-01-13 16:45', originalName: 'anime_art.jpg', scale: '4x', model: '动漫插画', status: 'completed' },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'history' | 'settings' | 'vip'>('history');

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
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2"/>
                <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
                <polyline points="21 15 16 10 5 21" strokeWidth="2"/>
              </svg>
            </div>
            <span className="text-xl font-semibold text-white">ClearWorld</span>
          </Link>
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">
            返回首页
          </Link>
        </div>
      </header>

      {/* 主内容区 */}
      <main className="flex-1 p-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* 用户信息卡片 */}
          <div className="glass-card rounded-2xl p-6 mb-6">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-2xl font-bold text-white">
                U
              </div>
              <div className="flex-1">
                <h1 className="text-xl font-semibold text-white">用户</h1>
                <p className="text-gray-400">user@example.com</p>
                <div className="flex items-center gap-4 mt-2">
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">
                    免费用户
                  </span>
                  <span className="text-gray-500 text-sm">剩余次数：1/天</span>
                </div>
              </div>
              <Link href="/vip" className="btn-gradient px-6 py-3 rounded-xl text-white font-semibold">
                开通会员
              </Link>
            </div>
          </div>

          {/* 标签页 */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setActiveTab('history')}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === 'history'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              处理记录
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === 'settings'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              账号设置
            </button>
            <button
              onClick={() => setActiveTab('vip')}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === 'vip'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              会员中心
            </button>
          </div>

          {/* 内容区 */}
          <div className="glass-card rounded-2xl p-6">
            {activeTab === 'history' && (
              <div>
                <h2 className="text-lg font-semibold text-white mb-4">处理记录</h2>
                <div className="space-y-3">
                  {mockHistory.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-4 bg-white/5 rounded-xl"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-purple-600/20 flex items-center justify-center">
                          <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-white font-medium">{item.originalName}</p>
                          <p className="text-gray-500 text-sm">{item.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-gray-400 text-sm">{item.scale} | {item.model}</span>
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                          已完成
                        </span>
                        <button className="text-purple-400 hover:text-purple-300">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div>
                <h2 className="text-lg font-semibold text-white mb-4">账号设置</h2>
                <div className="space-y-4 max-w-md">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">邮箱地址</label>
                    <input
                      type="email"
                      defaultValue="user@example.com"
                      className="input-dark w-full px-4 py-3 rounded-xl"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">新密码</label>
                    <input
                      type="password"
                      placeholder="请输入新密码"
                      className="input-dark w-full px-4 py-3 rounded-xl"
                    />
                  </div>
                  <button className="btn-gradient px-6 py-3 rounded-xl text-white font-semibold">
                    保存修改
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'vip' && (
              <div>
                <h2 className="text-lg font-semibold text-white mb-4">会员中心</h2>
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-500/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"/>
                    </svg>
                  </div>
                  <p className="text-gray-400 mb-6">开通会员，享无限次处理 + 批量处理</p>
                  <Link href="/vip" className="btn-gradient px-8 py-3 rounded-xl text-white font-semibold inline-block">
                    立即开通
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
