'use client';

import { useState } from 'react';
import Link from 'next/link';

const plans = [
  {
    name: '月卡',
    price: '¥29',
    period: '/月',
    features: ['无限次处理', '4x 放大', '批量处理', '去除水印'],
    popular: false,
  },
  {
    name: '年卡',
    price: '¥199',
    period: '/年',
    features: ['无限次处理', '8x/16x 放大', '批量处理', '去除水印', '优先队列'],
    popular: true,
  },
  {
    name: '终身',
    price: '¥499',
    period: '一次性',
    features: ['永久无限次', '8x/16x 放大', '批量处理', '去除水印', '优先队列', '专属客服'],
    popular: false,
  },
];

export default function VipPage() {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

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
          {/* 标题 */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-semibold text-white mb-4">升级会员</h1>
            <p className="text-gray-400">解锁全部高级功能，让图片更清晰</p>
          </div>

          {/* 会员卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`glass-card rounded-2xl p-6 relative ${
                  plan.popular ? 'border-purple-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-purple-600 text-white text-sm rounded-full">
                      最受欢迎
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedPlan(index)}
                  className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? 'btn-gradient text-white'
                      : 'border border-purple-500 text-purple-400 hover:bg-purple-500/10'
                  }`}
                >
                  立即订阅
                </button>
              </div>
            ))}
          </div>

          {/* 支付方式 */}
          {selectedPlan !== null && (
            <div className="glass-card rounded-2xl p-6 max-w-md mx-auto">
              <h3 className="text-lg font-semibold text-white mb-4 text-center">
                选择支付方式
              </h3>
              <p className="text-center text-gray-400 mb-6">
                {plans[selectedPlan].name} - {plans[selectedPlan].price}
              </p>
              <div className="space-y-3">
                <button className="w-full py-4 rounded-xl bg-[#07C160] text-white font-semibold flex items-center justify-center gap-3 hover:bg-[#06AE56] transition-all">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9.5 4C5.36 4 2 6.69 2 10c0 2.03 1.1 3.85 2.8 5.03l-.7 2.12 2.45-1.47c.8.24 1.65.37 2.45.37.35 0 .7-.02 1.04-.06l-.3 2.14-.85-.3c-.63-.22-1.3-.38-2-.46L6.1 19H8l.5-1.5.5 1.5h2l-.4-1.2c.74.33 1.55.57 2.4.67l-.3 2.1 1-.35c.65-.23 1.27-.5 1.85-.8l1.35 1.35-1.1 1.1 1.4 1.4 1.1-1.1-1.4-1.4 1.2-1.2c.28.52.53 1.07.73 1.65l2.05-.7-1.2-2.1c.16-.42.27-.86.33-1.32.6.18 1.23.27 1.88.27 3.86 0 7-2.48 7-5.5s-3.14-5.5-7-5.5c-.52 0-1.03.06-1.52.16l-1.2-2.1L16.5 2H14l-.5 1.5-2-1.5-1.5 1.5 1 2L9.5 4z"/>
                  </svg>
                  微信支付
                </button>
                <button className="w-full py-4 rounded-xl bg-[#1677FF] text-white font-semibold flex items-center justify-center gap-3 hover:bg-[#0D6EFD] transition-all">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M120 12c0 6.627-5.373 12-12 12S96 18.627 96 12 101.373 0 108 0s12 5.373 12 12z" fill="#1677FF"/>
                    <path d="M102.5 17.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z" fill="#fff"/>
                    <path d="M113.5 17.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z" fill="#fff"/>
                  </svg>
                  支付宝
                </button>
              </div>
              <p className="text-center text-gray-500 text-sm mt-4">
                支付即表示您同意我们的服务条款
              </p>
            </div>
          )}

          {/* 常见问题 */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-white text-center mb-8">常见问题</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card rounded-xl p-5">
                <h3 className="font-semibold text-white mb-2">会员可以取消吗？</h3>
                <p className="text-gray-400 text-sm">月卡会员可随时取消，年卡和终身会员不支持退款。</p>
              </div>
              <div className="glass-card rounded-xl p-5">
                <h3 className="font-semibold text-white mb-2">支付安全吗？</h3>
                <p className="text-gray-400 text-sm">我们使用微信和支付宝官方支付接口，安全有保障。</p>
              </div>
              <div className="glass-card rounded-xl p-5">
                <h3 className="font-semibold text-white mb-2">会员有效期如何计算？</h3>
                <p className="text-gray-400 text-sm">月卡从开通之日起30天有效，年卡365天有效。</p>
              </div>
              <div className="glass-card rounded-xl p-5">
                <h3 className="font-semibold text-white mb-2">如何联系客服？</h3>
                <p className="text-gray-400 text-sm">终身会员享有专属客服，可通过页面底部联系方式联系我们。</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
