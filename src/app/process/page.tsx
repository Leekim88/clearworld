'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

interface ProcessSettings {
  scale: 2 | 4;
  model: 'standard' | 'anime' | 'photo';
  denoise: 0 | 1 | 2 | 3;
  format: 'png' | 'jpg' | 'webp';
}

export default function ProcessPage() {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [settings, setSettings] = useState<ProcessSettings>({
    scale: 2,
    model: 'standard',
    denoise: 0,
    format: 'png',
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

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
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      handleFile(file);
    }
  };

  const handleFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setOriginalImage(e.target?.result as string);
      setProcessedImage(null);
    };
    reader.readAsDataURL(file);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleProcess = async () => {
    if (!originalImage || !fileInputRef.current?.files?.[0]) return;

    setIsProcessing(true);
    setProgress(0);

    // 模拟处理进度
    const progressInterval = setInterval(() => {
      setProgress((prev) => Math.min(prev + Math.random() * 20, 90));
    }, 500);

    try {
      // TODO: 这里调用后端 API 进行图片处理
      // 暂时使用模拟数据
      await new Promise((resolve) => setTimeout(resolve, 3000));

      clearInterval(progressInterval);
      setProgress(100);
      setProcessedImage(originalImage); // 暂时用原图代替
    } catch (error) {
      console.error('处理失败:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!processedImage) return;
    const link = document.createElement('a');
    link.download = `clearworld_${settings.scale}x.${settings.format}`;
    link.href = processedImage;
    link.click();
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
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* 左侧：预览区 */}
            <div className="lg:col-span-2">
              {processedImage ? (
                <div className="glass-card rounded-2xl p-4 h-full">
                  <ReactCompareSlider
                    itemOne={<ReactCompareSliderImage src={originalImage!} alt="原图" />}
                    itemTwo={<ReactCompareSliderImage src={processedImage} alt="高清图" />}
                    style={{ width: '100%', height: '500px', borderRadius: '12px' }}
                  />
                  <div className="flex justify-center gap-4 mt-4">
                    <button onClick={handleDownload} className="btn-gradient px-6 py-3 rounded-xl text-white font-semibold">
                      下载高清图
                    </button>
                    <button onClick={() => setProcessedImage(null)} className="px-6 py-3 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-all">
                      处理新图片
                    </button>
                  </div>
                </div>
              ) : originalImage ? (
                <div className="glass-card rounded-2xl p-4 h-full flex items-center justify-center">
                  <img src={originalImage} alt="原图" className="max-w-full max-h-[500px] rounded-lg" />
                </div>
              ) : (
                <div
                  className={`upload-zone rounded-2xl p-12 cursor-pointer h-[400px] flex items-center justify-center ${
                    isDragging ? 'active' : ''
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-purple-600/20 flex items-center justify-center">
                      <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-lg font-medium text-white mb-2">点击或拖拽图片到此处</p>
                    <p className="text-white/40">支持 PNG, JPG, WEBP, BMP, GIF</p>
                  </div>
                </div>
              )}
            </div>

            {/* 右侧：设置面板 */}
            <div className="glass-card rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-white mb-6">处理设置</h2>

              {/* 放大倍数 */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-3">放大倍数</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: 2, label: '2x', desc: '快速处理' },
                    { value: 4, label: '4x', desc: '高清画质' },
                  ].map((item) => (
                    <button
                      key={item.value}
                      onClick={() => setSettings({ ...settings, scale: item.value as 2 | 4 })}
                      className={`p-4 rounded-xl border transition-all ${
                        settings.scale === item.value
                          ? 'border-purple-500 bg-purple-500/20'
                          : 'border-white/10 hover:border-white/30'
                      }`}
                    >
                      <div className="text-white font-semibold">{item.label}</div>
                      <div className="text-xs text-white/40">{item.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* AI 模型 */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-3">AI 模型</label>
                <select
                  value={settings.model}
                  onChange={(e) => setSettings({ ...settings, model: e.target.value as any })}
                  className="input-dark w-full px-4 py-3 rounded-xl"
                >
                  <option value="standard">通用标准</option>
                  <option value="anime">动漫插画</option>
                  <option value="photo">照片人像</option>
                </select>
              </div>

              {/* 降噪程度 */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-3">降噪程度</label>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { value: 0, label: '无' },
                    { value: 1, label: '低' },
                    { value: 2, label: '中' },
                    { value: 3, label: '高' },
                  ].map((item) => (
                    <button
                      key={item.value}
                      onClick={() => setSettings({ ...settings, denoise: item.value as 0 | 1 | 2 | 3 })}
                      className={`py-2 rounded-lg border text-sm transition-all ${
                        settings.denoise === item.value
                          ? 'border-purple-500 bg-purple-500/20 text-white'
                          : 'border-white/10 text-gray-400 hover:border-white/30'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 输出格式 */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-300 mb-3">输出格式</label>
                <div className="grid grid-cols-3 gap-3">
                  {(['png', 'jpg', 'webp'] as const).map((format) => (
                    <button
                      key={format}
                      onClick={() => setSettings({ ...settings, format })}
                      className={`py-2 rounded-lg border text-sm uppercase transition-all ${
                        settings.format === format
                          ? 'border-purple-500 bg-purple-500/20 text-white'
                          : 'border-white/10 text-gray-400 hover:border-white/30'
                      }`}
                    >
                      {format}
                    </button>
                  ))}
                </div>
              </div>

              {/* 处理按钮 */}
              <button
                onClick={handleProcess}
                disabled={!originalImage || isProcessing}
                className={`w-full py-4 rounded-xl font-semibold transition-all ${
                  originalImage && !isProcessing
                    ? 'btn-gradient text-white'
                    : 'bg-white/10 text-white/40 cursor-not-allowed'
                }`}
              >
                {isProcessing ? (
                  <span>处理中...</span>
                ) : (
                  <span>开始处理</span>
                )}
              </button>

              {/* 进度条 */}
              {isProcessing && (
                <div className="mt-4">
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="text-center text-sm text-white/60 mt-2">{progress}%</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
