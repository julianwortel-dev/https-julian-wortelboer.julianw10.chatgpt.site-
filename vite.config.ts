import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'contact.html'),
        insights: resolve(__dirname, 'insights.html'),
        articleDiagnosis: resolve(__dirname, 'article-diagnosis.html'),
        articlePractice: resolve(__dirname, 'article-practice.html'),
        articleLesson: resolve(__dirname, 'article-lesson.html'),
        articleJuniors: resolve(__dirname, 'article-juniors.html'),
        articleCommunity: resolve(__dirname, 'article-community.html'),
        articleRevenue: resolve(__dirname, 'article-revenue.html'),
        articleGm: resolve(__dirname, 'article-gm.html'),
        articlePps: resolve(__dirname, 'article-pps.html'),
        articleScaling: resolve(__dirname, 'article-scaling.html'),
        article52Shots: resolve(__dirname, 'article-52-shots.html'),
      },
    },
  },
});
