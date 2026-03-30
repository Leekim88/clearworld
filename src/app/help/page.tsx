'use client';

import { useState } from 'react';
import Link from 'next/link';

const faqs = [
  {
    question: '如何上传图片进行超分处理？',
    answer: '点击首页中央的上传区域或拖拽图片到该区域。支持 PNG、JPG、WEBP、BMP、GIF 等常见图片格式。图片大小建议不超过 10MB。',
  },
  {
    question: '免费版和会员版有什么区别？',
    answer: '免费版每天可处理 1 张图片，放大倍数最高支持 4x。会员可享受无限次处理、8x/16x 超高倍数放大、批量处理、去除水印等高级功能。',
  },
  {
    question: '支持哪些放大倍数？',
    answer: '免费版支持 2x 和 4x 放大，会员版额外支持 8x 和 16x 放大。倍数越高，处理时间越长，但细节保留更丰富。',
  },
  {
    question: '处理后的图片可以保存多久？',
    answer: '处理后的图片可在 7 天内随时下载。建议及时保存到本地，我们服务器不会永久存储用户图片。',
  },
  {
    question: '如何开通会员？',
    answer: '点击首页的"了解会员"按钮或访问会员中心页面，选择适合您的套餐（月卡/年卡/终身），完成支付后即可开通。',
  },
  {
    question: '支持批量处理吗？',
    answer: '批量处理功能仅对会员开放。会员可一次性上传多张图片进行批量处理，大大提高工作效率。',
  },
];

export default function HelpPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-semibold text-white text-center mb-4">帮助中心</h1>
          <p className="text-gray-400 text-center mb-12">常见问题解答</p>

          {/* FAQ 列表 */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="glass-card rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-white">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-purple-400 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 联系客服 */}
          <div className="mt-12 glass-card rounded-xl p-8 text-center">
            <h2 className="text-xl font-semibold text-white mb-4">没有找到答案？</h2>
            <p className="text-gray-400 mb-6">联系我们的客服团队，获取更多帮助</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="btn-gradient px-6 py-3 rounded-xl text-white font-semibold">
                联系客服
              </a>
              <Link href="/" className="px-6 py-3 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-all">
                回到首页
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="relative z-10 border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-sm text-white/40">
          <p>&copy; 2024 ClearWorld 清晰世界</p>
          <div className="flex gap-6">
            <Link href="/help" className="hover:text-white transition-colors">帮助中心</Link>
            <a href="#" className="hover:text-white transition-colors">联系方式</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
